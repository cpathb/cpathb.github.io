$(document).ready(function() {
    var container = $(this).find(".container");
    container.append("<div class ='projects'></div>");

    var projects = $(this).find(".projects");

    // Request the list of repos from my github
    $.get("https://api.github.com/users/cpathb/repos", function(repos) {
        repos.forEach(function(repo) {
            //projects.append("<div class='repo'><div class='repoLanguage'><span>Pruebas</span></div><div class='repoData'><div class='repoName'><span class='RepoName'>" + repo.name + "</span></div><br><div class='repoDesc'><span class='RepoDesc'>" + repo.description + "</span></div></div></div>");
            //$(this).find(".repoLanguage").css("background-color:", "rgb(255, 0, 0)");
            if (repo.description != null) {
                projects.append("<table class='repo' cellspacing='0' cellpadding='0'><tr><td rowspan='2' class='repoLang'></td><td class='repoName'><a href='https://github.com/cpathb/" + repo.name + "'>" + repo.name + "</a></td></tr><tr><td class='repoDesc'>" + repo.description + "</td></tr></table>");
            } else {
                projects.append("<table class='repo' cellspacing='0' cellpadding='0'><tr><td rowspan='2' class='repoLang'></td><td class='repoName'><a href='https://github.com/cpathb/" + repo.name + "'>" + repo.name + "</a></td></tr><tr><td class='repoDesc'></td></tr></table>");
            }
        }, this);
    });
});