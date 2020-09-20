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
    app.get("/api/condition", (req, res) => {
        console.log(1111111)
        const position = req.body.position;
        const condition = req.body.condition;
        const result = calcCondition(position, condition)

        res.json(result);


    });

    return app;
};

module.exports = { setupServer };