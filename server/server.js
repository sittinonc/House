require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const authRouter = require('./routes/authRouter')
const imageRouter = require('./routes/imageRouter')
const apiRouter = require('./routes/apiRouter')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const uri = require('./database/config')

let port = process.env.PORT || 8080
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "DELETE"],
        credentials: true,
    })
);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        name: process.env.SESSION_NAME,
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
        store: MongoStore.create({
            mongoUrl: uri,
            ttl: 3600000 / 1000,
        }),
        cookie: {
            maxAge: 3600000,
            sameSite: true,
            httpOnly: true,
            secure: false,
        },
    })
);

app.use('/auth', authRouter)
app.use('/image', imageRouter)
app.use('/api', apiRouter)

app.use((req, res) => {
    res.status(404).send('Error 404 not found')
})

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})