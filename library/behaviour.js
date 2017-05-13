/*
$(document).ready(function() {
    var container = $(this).find(".container");
    container.append("<div class ='projects'></div>");

    var projects = $(this).find(".projects");

    // Request the list of repos from my github
    $.get("https://api.github.com/users/cpathb/repos", function(repos) {
        repos.forEach(function(repo) {
            Sprojects.append("<div class = 'repo'><div class='" + repo.language + "'></div><div class='repoData'><span class='RepoName'>" + repo.name + "</span><span class='repoDesc'>" + repo.description + "</span></div></div>");
        }, this);
    });
});
*/