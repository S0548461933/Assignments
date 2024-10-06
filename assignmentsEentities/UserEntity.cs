using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assignmentsEentities
{
  public class UserEntity
  {
    [Key]
    public int Id { get; set; }  // מזהה ייחודי למשתמש
    [Required]
    public string Name { get; set; }  // שם המשתמש
    [Required]
    public string Email { get; set; }  // כתובת אימייל

    // רשימת המשימות שנוצרו ע"י המשתמש
    public ICollection<TaskEntity> Tasks { get; set; }
  }
}
