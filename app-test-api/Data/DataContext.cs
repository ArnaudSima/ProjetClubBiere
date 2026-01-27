using app_test_api.Entities;
using Microsoft.EntityFrameworkCore;

namespace app_test_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Beer> Beers { get; set; }
    }
}
