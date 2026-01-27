using app_test_api.Data;
using app_test_api.Dto;
using app_test_api.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app_test_api.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserController(DataContext context, IMapper mapper) 
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet(Name ="GetAllUsers")]
        
        public async Task<IActionResult> GetAllUsers()
        {
            //try
            //{
                var users = await _context.Users.ToListAsync();
                var usersDto = _mapper.Map<List<UserDto>>(users);
                return Ok(usersDto);
            //}
            //catch
            //{
            //    return 
            //}
        }

        [HttpGet]
        [Route("{email}")]
        public async Task<IActionResult> GetUser(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
            if(user is null)
            {
                return NotFound("Aucun compte n'existe avec ce courriel");
            }
            var userDto = _mapper.Map<UserDto>(user);
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {
            Console.WriteLine("Inserting user...");
            _context.Users.Add(user);
            var users = await _context.Users.ToListAsync();
            var usersDto = _mapper.Map<List<UserDto>>(users);

            await _context.SaveChangesAsync();
            return Ok(usersDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User user)
        {
            var existingUser = await _context.Users.FindAsync(id);
            if (existingUser == null)
            {
                return NotFound("Utilisateur inexistant");
            }

            existingUser.Email = user.Email;
            existingUser.Password = user.Password;
            _context.Entry(existingUser).CurrentValues.SetValues(existingUser);
            await _context.SaveChangesAsync();

            return Ok("Utilisateur modifié avec succès!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var existingUser = await _context.Users.FindAsync(id);
            if (existingUser == null)
            {
                return NotFound("Utilisateur inexistant");
            }

            _context.Users.Remove(existingUser);
            await _context.SaveChangesAsync();
            return Ok("Utilisateur supprimé avec succès");
        }
        
    }
}
