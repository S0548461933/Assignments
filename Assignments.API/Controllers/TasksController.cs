using Microsoft.AspNetCore.Mvc;
using Assignments.API.Entities;
using assignmentsEentities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignments.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TasksController : ControllerBase
  {
    // GET: api/<TasksController>
    [HttpGet]
    public TaskEntity Get()
    {
      TaskEntity t=  new TaskEntity
      {
        Id = 1,
        Name = "Alice",
        Description = "Description for Assignment 1",
      };
       return t;
    }
    

    // GET api/<TasksController>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/<TasksController>
    [HttpPost]
    public void Post([FromBody] string value)
    {

    }

    // PUT api/<TasksController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<TasksController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
