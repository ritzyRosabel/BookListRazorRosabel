using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookListRazor.Model;
using Microsoft.AspNetCore.Mvc;

namespace BookListRazor.Controllers
{
    public class BookController : Controller
    {
        private readonly ApplicationDbContext _db;
        public BookController(ApplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        [Route("api/Books")]
        public IActionResult GetAll()
        {

            return Json(new { data = _db.Books.ToList() });
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {

        }
    }
}
