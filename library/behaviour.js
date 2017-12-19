$(document).ready(function() {
    var container = $(this).find(".container");
    container.append("<div id ='projects'></div>");
    var projects = $(this).find("#projects");

    // Request the list of repos from my github
    $.get("https://api.github.com/users/carlospalf/repos", function(repos) {
        repos.forEach(function(repo) {
            if (repo.description != null) { // Check if the repo has description 
                projects.append("<div class='repo'><div class='repoLanguage'></div><div class='repoData'><div class='repoName'><a href='https://github.com/cpathb/" + repo.name + "'><span class='RepoName'>" + repo.name + "</span></a></div><div class='repoLang'><span class='RepoLang'>" + repo.language + "</span></div><div class='repoDesc'><span class='RepoDesc'>" + repo.description + "</span></div></div></div>");
            } else {
                projects.append("<div class='repo'><div class='repoLanguage'></div><div class='repoData'><div class='repoName'><a href='https://github.com/cpathb/" + repo.name + "'><span class='RepoName'>" + repo.name + "</span></a></div><div class='repoLang'><span class='RepoLang'>" + repo.language + "</span></div><div class='repoDesc'><span class='RepoDesc'></span></div></div></div>");
            }

            // Get the last aparition of the div with class repoLanguage and change the background color
            var lastRepoLang = $(projects).find(".repoLanguage");
            lastRepoLang = lastRepoLang.get(lastRepoLang.length - 1);
            $(lastRepoLang).css("background-color", getColorLanguage(repo.language));

        }, this);
    });

});

/**
 * Function that returns a RGB string to put the color to the card that contains the project data
 * 
 * @param String lang Programming Language
 * @returns 
 */
function getColorLanguage(lang) {
    langs = {
        "C": "rgb(100,200,50)",
        "C++": "rgb(100,200,100)",
        "C#": "rgb(100,200,150)",
        "Objective-C": "rgb(100,200,200)",
        "Java": "rgb(220,35,70)",
        "JavaScript": "rgb(230,20,40)",
        "HTML": "rgb(255,103,0)",
        "CSS": "rgb(30,55,175)",
        "XML": "rgb(190, 127, 56)",
        "Python": "rgb(245, 230, 70)",
        "Shell": "rgb(245, 69, 139)",
        "Lex": "rgb(198, 245, 98)",
        "Yacc": "rgb(178, 215, 69)",
        "CLIPS": "rgb(255, 153, 204)",
        "Markdown": "rgb(152, 133, 198)",
        "Text": "rgb(0, 0, 0)"
    }

    return langs[lang];
}
