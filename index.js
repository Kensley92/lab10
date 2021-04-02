import Express from "express";
import fs from "fs";
import cors from "cors";

const App = Express();
const port = 3000;
App.use(cors());

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.use("/", Express.static("client/build"));

App.get("/api/movies/score/:score", (req, res) => {
    let result = {"error": "Not available!"};

    database.forEach((value) => {
        if(req.params.score ==value.score) {
            result = value;
        }
    });

    res.json(result);
})

App.get("/api/movies/name/:name", (req, res) => {
        let result = {"error": "Not available!"};
    
        database.forEach((value) => {
            if(req.params.name == value.name) {
                result = value;
            }
        });

    res.json(result);
});

App.listen(port, () =>{
    console.log("Server running!");
})