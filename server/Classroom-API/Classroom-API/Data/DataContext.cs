using Classroom_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Classroom_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Class> Classes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Class>()
                .HasMany(c => c.Students)
                .WithMany(u => u.Classes)
                .UsingEntity<Dictionary<string, object>>(
                    "ClassStudent",
                    x => x.HasOne<User>().WithMany().HasForeignKey("UserId"),
                    x => x.HasOne<Class>().WithMany().HasForeignKey("ClassId")
                );
        }

    }

}
