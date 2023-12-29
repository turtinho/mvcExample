const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite_dist')
})
const Distribuct = sequelize.define('Distribuct',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(120),
        allowNull:false,
    } 
})
Distribuct.sync()

module.exports = Distribuct

