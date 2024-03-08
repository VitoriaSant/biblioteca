const express = require("express");
const router = express.Router();
const book = require("./book");
const category = require("../categories/category");

router.get("/admin/books/new", (req, res) => {
  res.render("admin/books/new");
});

router.post("/books/save",(req,res) =>{
   var title = req.body.cadTitle;
   var author = req.body.cadAutor;
   var descripton = req.body.cadDescricao;
   var publicationYear = req.body.cadAno;
   var copies = req.body.cadCopias;
   
   if(title != undefined && author != undefined){
      book.create({
          title: title, 
          author: author,
          descripton: descripton,
          publicationYear: publicationYear,
          copies: copies
      }).then(() => {
         res.redirect("/admin/books/new");
     })
   }else{
      res.redirect("/admin/categories/new")
   }

});

router.get("/admin/books", (req, res) => {
  category.findAll().then(categories =>{
      res.render("admin/books/new", {categories: categories});
  });
});

module.exports = router;