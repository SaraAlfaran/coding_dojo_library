const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
require('./server/config/mongoose.config');
const cookies = require("cookie-parser")
require("dotenv").config()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookies())

require('./server/routes/book.routes')(app);

app.listen(port, () => {
    console.log("Listening at Port 8000")
})