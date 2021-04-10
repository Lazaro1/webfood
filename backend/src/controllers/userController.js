const connection = require('../database/connection')

const getAll = async (req, res) => {
    return res.json({
        mensagem: 'success'
    })
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await connection('users')
            .where({
                email: email,
                password: password
            })
            .select('*')
            .first();

        // Retorna se houve erro ou não, e o retorno do bando
        return res.json({
            error: false,
            result: result
        })

    } catch (error) {
        // Retorna se houve erro ou não, e o retorno do bando
        return res.json({
            error: true,
            result: error.message
        })

    }

}

const createuser = async (req, res) => {
    try {
        const register = {
            name: req.body.name,
            username: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        const result = await connection('users').insert(register)

        if (result > 1) {
            return res.json(true)
        } else {
            return res.json(false)
        }
    } catch (error) {
        return response.json({ error: error.message });
    }

}


module.exports = {
    getAll,
    login,
    createuser
}