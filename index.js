const express = require("express");
const app = express();
const port = 5000;

//mongodb+srv://yoonsang:<password>@yoon-cluster.boklk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("Hello World!!"));

app.listen(port, () => console.log(`Example app listening on port ${port} !!`));
