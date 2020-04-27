require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
        secret: SESSION_SECRET
    })
)

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)

app.get('/api/posts/:userid',ctrl.getPosts)
// app.post('api/post/:userid', ctrl.makePost)
// app.get('/api/post/:postid', ctrl.getPost)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    },
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db says helo')
    app.listen(SERVER_PORT, () => console.log(`helo from port ${SERVER_PORT}`))
})