const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        statusCode: 200,
        payload: {
            msg: "The Backend is healthy and running",
            ci: "CI Test successfull"
        },
    }).status(200)
})

//Route imports
const userRoute = require('./routes/userRoutes');
const questionRoute = require('./routes/tigerTeamRoutes');
const ctfTimeRoute = require('./routes/ctfTimeRoutes');

//Use Routes
app.use('/user', userRoute);
app.use('/tigerTeam', questionRoute);
app.use('/ctfTime', ctfTimeRoute);

module.exports = app