const Distribuct = require('../models/Distribuct')

module.exports = {
    create: async (req,res) =>{
        await Distribuct.create(req.body)
        return res.redirect('/distribucts')
    },
    list: async (_,res) => {
        const distribucts = await Distribuct.findAll()
        return res.render('distribuct/list',{distribucts})
    },
    form: (_,res) => res.render('distribuct/form'),
}

