const Product = require('../models/Product')

module.exports = {
    create: async (req,res) =>{
        await Product.create(req.body)
        return res.redirect('/products')
    },
    list: async (_,res) => {
        const products = await Product.findAll()
        return res.render('product/list',{products})
    },
    form: (_,res) => res.render('product/form'),
    // acessar a template form
}

