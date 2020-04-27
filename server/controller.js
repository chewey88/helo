const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        console.log(db)
        const {username, password} = req.body
        
        
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([username, hash])

        req.session.user = newUser

        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(password)
        const existingUser = await db.check_user([username])
        if(!existingUser[0]){
            return res.status(404).send('User does not exist')
        }
        const authenticated = bcrypt.compareSync(password, existingUser[0].password)
        if(authenticated){
            delete existingUser[0].password

            req.session.user = existingUser[0]
            res.status(200).send(req.session.user)
        } else {
            res.status(403).send('Username or Password incorrect')
        }
        
    },
}
