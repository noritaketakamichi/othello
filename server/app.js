const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Setup Logger
app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());

// app.get("/api/allpictures", async(req, res) => {
//     //全ての絵のデータを返す
//     try {


//         const allPictures = await db
//             .select()
//             .from("pictures");
//         res.set("Access-Control-Allow-Origin", "*");
//         res.json(allPictures);
//     } catch (err) {
//         console.error("Error loading locations!", err);
//         res.sendStatus(500);
//     }
// });

// app.get("/api/picture/:id", async(req, res) => {
//     //指定されたidの絵のデータを返す
//     try {
//         const id = req.params.id;


//         const picture = await db
//             .select()
//             .where({
//                 id: id
//             })
//             .from("pictures");
//         res.set("Access-Control-Allow-Origin", "*");
//         res.json(picture);
//     } catch (err) {
//         console.error("Error loading locations!", err);
//         res.sendStatus(500);
//     }
// });

// app.post("/api/picture/", async(req, res) => {
//     //作った絵を登録
//     try {
//         const data = req.body;

//         console.log(111111111);
//         console.log(req.body);

//         const picture = await db
//             .insert({
//                 name: data.name,
//                 introduction: data.introduction,
//                 author: data.author,
//                 numbers: data.numbers,
//                 picArray: data.picArray
//             }).into('pictures')

//         res.set("Access-Control-Allow-Origin", "*");
//         res.json(picture);
//     } catch (err) {
//         console.error("Error loading locations!", err);
//         res.sendStatus(500);
//     }
// });

// Always return the main index.html, since we are developing a single page application
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// });

module.exports = app;