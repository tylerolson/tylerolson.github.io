let express = require("express"); 
let app = express(); 

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    let testString = "Hi";

    res.render("pages/index", {
        testString: testString
    });
});

app.listen(PORT);
console.log("Listening on port " + PORT);