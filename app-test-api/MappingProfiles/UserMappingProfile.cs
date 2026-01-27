using app_test_api.Dto;
using app_test_api.Entities;
using AutoMapper;

namespace app_test_api.MappingProfiles
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile()
        {
            CreateMap<User,UserDto>();
        }
    }
}
