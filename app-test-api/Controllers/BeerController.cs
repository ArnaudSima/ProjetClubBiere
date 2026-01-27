using app_test_api.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app_test_api.Controllers
{
    [Route("/api[controller]")]
    [ApiController]
    public class BeerController : ControllerBase
    {
        private readonly DataContext _context;
        public BeerController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllBeers()
        {
            var beers = await _context.Beers.ToListAsync();
            return Ok(beers);
        }
    }
}
