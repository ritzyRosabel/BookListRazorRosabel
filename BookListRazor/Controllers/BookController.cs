using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookListRazor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> Delete(int id)
        {
            var bookFromDb = _db.Books.FirstOrDefaultAsync(B => B.Id == id);
            if (bookFromDb == null)
            {
                return Json(new { success = false, message = "Error while Deleting Book" });
            }
            _db.Remove(bookFromDb);
            await _db.SaveChangesAsync();
            return Json(new { success = true, message = "successfully deleted the Book" });

        }
    }
}
