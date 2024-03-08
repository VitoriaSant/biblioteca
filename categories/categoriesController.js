const express = require("express");
const router = express.Router();
const category = require("./category");

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/Categories/new");
});

router.post("/categories/save",(req,res) =>{
     var title = req.body.cadTitle;
     if(title != undefined){
        category.create({
            title: title, 
        })
        res.redirect("/admin/categories/new")
     }else{
        res.redirect("/admin/categories/new")
     }

});
 
router.get("/admin/categories/list", (req, res) => {

    category.findAll().then(categories =>{
        res.render("admin/Categories/list", {categories: categories});
    });
});

router.post("/categories/delete", (req, res) => {
    var id= req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            category.destroy({
                where:{
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            })
            
        }else{
            res.render("/admin/categories");
        }
    }else{
        res.render("/admin/categories");
    }
});

router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;
    category.findByPk(id).then(category => {
        if(category != undefined){
            res.render("admin/Categories/edit", {category: category});
        }else{
            res.redirect("/admin/categories");
        }
    }).catch(erro =>{
        res.redirect("/admin/categories");
    })
});

router.post("/categories/update",(req, res) => {
    var id = req.body.id;
    var title = req.body.title;

    category.update({title: title}, {
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/admin/categories");
    })
});

module.exports = router;
