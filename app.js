const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const multer = require("multer")
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')


const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "public/assets")
    },
    filename: function (req, res, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
const connect = () => {
    return mongoose.connect(process.env.MONGO_URL)
}
require("./mainRoutes")(app);
app.listen(process.env.PORT, () => {
    connect()
    console.log("connected with databse")
})
