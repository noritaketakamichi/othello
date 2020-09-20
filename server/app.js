const express = require("express");
const app = express();
const fs = require("fs");
const { calcCondition } = require("./calcCondition");
const { cpuCalc } = require("./cpuCalc");

const setupServer = () => {
    app.use(express.json());
    /**
     * Create, set up and return your express server, split things into separate files if it becomes too long!
     */
    // Return pokemon data
    app.post("/api/condition/", (req, res) => {
        const position = req.body.position;
        const condition = req.body.condition;
        const result = calcCondition(position, condition);
        console.log(result)

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

    return app;
};

module.exports = { setupServer };