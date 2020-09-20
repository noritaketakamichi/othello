const express = require("express");
const app = express();
const fs = require("fs");

const setupServer = () => {
    app.use(express.json());
    /**
     * Create, set up and return your express server, split things into separate files if it becomes too long!
     */
    // Return pokemon data
    app.get("/api/condition", (req, res) => {

        res.json({ "a": "b" });

    });

    return app;
};

module.exports = { setupServer };