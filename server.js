const PORT = process.env.PORT || 3000
let express = require("express"); 
let repocollection = require("./repocollection.js");
let app = express(); 

let testString = 0;
let repos = repocollection.getRepoList();

repocollection.updateRepoList();
setInterval(function(){
    repocollection.updateRepoList();
}, 600000);

app.get("/", function(req, res) {
    testString++;
    repos = repocollection.getRepoList();
    res.render("pages/index", {
        testString: testString,
        repos: repos
    });
});

app.get('/repos', function(req, res) {
    res.send(repocollection.getRepoList());
});

app.set("view engine", "ejs");
app.listen(PORT);
console.log("Listening on port " + PORT);