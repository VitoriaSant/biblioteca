const Sequelize = require("sequelize");
const Connection = require("../database/connection");
const Category = require("../categories/category");

const Books = Connection.define('Books',{
    title:{
      type: Sequelize.STRING,
      allowNell: false
    },
    author:{
      type: Sequelize.STRING,
      allowNell: false
    },
    descripton:{
      type: Sequelize.STRING,
    },
    publicationYear:{
      type: Sequelize.INTEGER
    },
    copies:{
      type: Sequelize.INTEGER
    },
    avalableCopies:{
      type: Sequelize.INTEGER
    }
  
})

Category.hasMany(Books);//Uma categoria tem muitos livros
Books.belongsTo(Category);//Um Lvro pertence a uma categoria

//So tirar o comentario que vai criar a tabela no bd de acordo com esse arquivo
Books.sync({force: true})

module.exports = Books;