const express = require("express");
const app = express();
const fs = require("fs");
const { calcCondition } = require("./calcCondition");

const setupServer = () => {
    app.use(express.json());
    /**
     * Create, set up and return your express server, split things into separate files if it becomes too long!
     */
    // Return pokemon data
    app.post("/api/condition/", (req, res) => {
        console.log(222222222)
        console.log(req.body)
        const position = req.body.position;
        const condition = req.body.condition;
        const result = calcCondition(position, condition);
        console.log(result)

        res.json(result);


    });

    return app;
};

module.exports = { setupServer };