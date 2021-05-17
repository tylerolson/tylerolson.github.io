const PORT = process.env.PORT || 3000
let express = require("express");
let repocollection = require("./repocollection.js");
let app = express();

let vistCount = 0;

repocollection.updateRepoList();
setInterval(function () {
    repocollection.updateRepoList();
}, 600000); // update repos every 10 minutes

app.use(express.static("public"));

app.get("/", function (req, res) {
    vistCount++;
    res.render("pages/index", {
        page_name: "index",
        vistCount: vistCount
    });
});

app.get("/projects", function (req, res) {
    res.render("pages/projects", {
        page_name: "projects",
        repos: repocollection.getRepoList()
    });
});

app.get('/repos', function (req, res) {
    res.send(repocollection.getRepoList());
});

app.set("view engine", "ejs");
app.listen(PORT);
console.log("Listening on port " + PORT);