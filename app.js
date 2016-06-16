var github = require("./github.js");

github.getRepos("unumux", function(repos) {
    console.log(repos);
});

github.getRepos("github", function(repos) {
    console.log(repos);
});