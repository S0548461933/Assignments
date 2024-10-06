using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Assignments.API.Controllers
{
  public class AssignmentsController : Controller
  {
    // GET: AssignmentsController
    public ActionResult Index()
    {
      return View();
    }

    // GET: AssignmentsController/Details/5
    public ActionResult Details(int id)
    {
      return View();
    }

    // GET: AssignmentsController/Create
    public ActionResult Create()
    {
      return View();
    }

    // POST: AssignmentsController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(IFormCollection collection)
    {
      try
      {
        return RedirectToAction(nameof(Index));
      }
      catch
      {
        return View();
      }
    }

    // GET: AssignmentsController/Edit/5
    public ActionResult Edit(int id)
    {
      return View();
    }

    // POST: AssignmentsController/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(int id, IFormCollection collection)
    {
      try
      {
        return RedirectToAction(nameof(Index));
      }
      catch
      {
        return View();
      }
    }

    // GET: AssignmentsController/Delete/5
    public ActionResult Delete(int id)
    {
      return View();
    }

    // POST: AssignmentsController/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id, IFormCollection collection)
    {
      try
      {
        return RedirectToAction(nameof(Index));
      }
      catch
      {
        return View();
      }
    }
  }
}
