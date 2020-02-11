const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();
const fs = require('fs');

function updateRepoList() {
    repos = [];
    octokit.repos.listForUser({
        username: "TylerOlson",
        type: "owner"
    }).then(({data}) => {
        data.forEach(repo => {
            let neededData = {
                name: repo.name,
                private: repo.private,
                html_url: repo.html_url,
                description: repo.description,
                fork: repo.fork,
                created_at: repo.created_at,
                updated_at: repo.updated_at,
                size: repo.size,
                stargazers_count: repo.stargazers_count,
                language: repo.language,
                forks: repo.forks,
                open_issues_count: repo.open_issues_count
            }  
            repos.push(neededData);
        });
    
        fs.writeFile("repos.json", JSON.stringify(repos, null, "\t"), function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Updated repos at " + new Date().toLocaleString());
            }
        });
    });

    return repos;
}

function getRepoList() {
    let repoFile = fs.readFileSync('repos.json');
    let repos = JSON.parse(repoFile);
    return repos;
}

module.exports = {
    updateRepoList,
    getRepoList
}