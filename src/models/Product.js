const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')

// criando uma instancia para o sequelize
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite')
    //o path irá resolver o caminho e criar um arquivo que
    //conterá os arquivos do BD
})

//criando o modelo e seus campos
const Product = sequelize.define('Product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(120),
        allowNull:false,
    } // não pode ser falso
})
// criando a tabela no banco de dados, caso não exista
Product.sync()

module.exports = Product

