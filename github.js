var request = require('request');

var opts = {
  headers: {
    'User-Agent': 'UnumUX Test App'
  }
};

function getRepos(org, cb) {
    request(`https://api.github.com/orgs/${org}/repos`, opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            var repoNames = result.map(function(repo) {
                return repo.name;
            });

            cb(repoNames);
        }
    });
}

module.exports = {
    getRepos: getRepos
};