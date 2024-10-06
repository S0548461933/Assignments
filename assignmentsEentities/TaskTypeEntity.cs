using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assignmentsEentities
{
  public class TaskTypeEntity
  {
    [Key]
    public int Id { get; set; }  // מזהה ייחודי לסוג המשימה
    [Required]
    public string Name { get; set; }  // שם סוג המשימה (אישית, עבודה, לימודים)

    // רשימת המשימות הקשורות לסוג המשימה הזה
    public ICollection<TaskEntity> Tasks { get; set; }
  }
}
