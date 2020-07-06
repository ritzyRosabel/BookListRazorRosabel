﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookListRazor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BookListRazor.Pages.BookList
{
    public class EditModel : PageModel
    {
        private ApplicationDbContext _db;

        public EditModel(ApplicationDbContext db)
        {
            _db = db;
        }
        [BindProperty]
        public Book Book { get; set; }
        public async Task OnGet( int id)
        {
            if (id != 0)
            {
                Book = await _db.Books.FindAsync(id);

            }
        }

        public async Task<IActionResult>  OnPost() 
        {
            if (ModelState.IsValid)
            {
                var BookFromDB = await _db.Books.FindAsync(Book.Id);
                BookFromDB.Name = Book.Name;
                BookFromDB.Author = Book.Author;
                BookFromDB.ISBN = Book.ISBN;

                await _db.SaveChangesAsync();
                return RedirectToPage("Index");


            }
            else
            {
                return Page();
            }
            
        }

    }
}