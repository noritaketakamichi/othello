const { setupServer } = require("./app");

const server = setupServer();
const PORT = process.env.PORT || 5000;

(async() => {
    try {

        console.log("Starting express");
        server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    } catch (err) {
        console.error("Error starting app!", err);
        process.exit(-1);
    }
})();