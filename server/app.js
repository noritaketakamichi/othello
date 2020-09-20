const express = require("express");
const morgan = require("morgan");
const path = require("path");
var bodyParser = require('body-parser')

const { calcCondition } = require("./calcCondition");
const { cpuCalc } = require("./cpuCalc");
const proxy = require('http-proxy-middleware');

const app = express();

// const cors = require("cors");
// app.use(cors({
//     origin: "http://localhost:3000"
// }));

// app.use(
//     proxy('/api', {
//         target: 'http://localhost:5000'
//     }))

// Setup Logger
app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.post("/api/condition/", (req, res) => {
    const position = req.body.position;
    const condition = req.body.condition;
    const result = calcCondition(position, condition);

    res.json(result);
});

app.post("/api/auto/", (req, res) => {
    //盤面から打てる手を探し返す
    //input:condition,手番

    const condition = req.body.condition;
    const color = req.body.color;
    const result = cpuCalc(condition, color);

    res.json(result);
});

// process.on('uncaughtException', function(err) {
//     console.log(err);
// });


module.exports = app;