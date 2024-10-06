using assignmentsEentities;
using Microsoft.EntityFrameworkCore;

namespace Assignments.API.Entities
{
  public class AssignmentsContext : DbContext
  {
    public AssignmentsContext(DbContextOptions<AssignmentsContext> options) : base(options) { }

    public DbSet<TaskEntity> Tasks { get; set; }
    public DbSet<TaskTypeEntity> TaskTypes { get; set; }
    public DbSet<UserEntity> Users { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //  optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=AssignmentsDB;Trusted_Connection=True;");
    //}


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<TaskEntity>(entity =>
      {
        entity.HasKey(t => t.Id);
      });

      // הגדרת קשרים בין היישויות
      modelBuilder.Entity<TaskEntity>()
                    .HasOne(t => t.TaskType)
                    .WithMany()
                    .HasForeignKey(t => t.TaskTypeId);

      modelBuilder.Entity<TaskEntity>()
                  .HasOne(t => t.User)
                  .WithMany()
                  .HasForeignKey(t => t.UserId);

      //OnModelCreatingPartial(modelBuilder);
    }
    //partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

  }
}

