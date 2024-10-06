using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assignmentsEentities
{
    public class TaskEntity
    {
    [Key]
    public int Id { get; set; }  // מזהה ייחודי לכל משימה000
    [Required]
    public string Name { get; set; }  // שם המשימה
    [Required]
    public DateTime StartDate { get; set; }  // מועד התחלה
    [Required]
    public bool IsCompleted { get; set; }  // האם הסתיימה
    
    public DateTime? EndDate { get; set; }  // מועד סיום, במידה וסומנה כהסתיימה
    [Required]
    public bool IsRecurring { get; set; }  // האם מחזורית או חד-פעמית
    [Required]
    public string Description { get; set; }  // תיאור המשימה
    [Required]
    public bool IsArchived { get; set; }  // האם המשימה בארכיון

    // קשר בין משימה לסוג המשימה
    public int TaskTypeId { get; set; }
    public TaskTypeEntity TaskType { get; set; }

    // קשר בין משימה למשתמש
    
    public int UserId { get; set; }
    public UserEntity User { get; set; }
  }
}

