const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});


app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
    
})