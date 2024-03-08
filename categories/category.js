const Sequelize = require("sequelize");
const Connection = require("../database/connection");

const Category = Connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNell: false
    }
  
})

//So tirar o comentario que vai criar a tabela no bd de acordo com esse arquivo
//Category.sync({force: true})

module.exports = Category;