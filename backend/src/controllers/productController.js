const connection = require('../database/connection')

const createproducts = async (req, res) => {
    try {
        const register = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            url: req.body.url
        };

        const result = await connection('products').insert(register)

        if (result >= 1) {
            return res.json({ result: true })
        } else {
            return res.json({ result: false })
        }
    } catch (error) {
        // Retorna se houve erro ou não, e o retorno do banco
        return res.json({
            error: true,
            result: error.message
        })
    }
}


const getAll = async (req,res) => {
    const result = await connection('products').select('*')

    return res.json(result)
}

module.exports = {
    createproducts,
    getAll
}