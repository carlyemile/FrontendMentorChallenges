const linksContainer = document.getElementById("links");
const folder = "projects/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if(val.includes("/projects/")){
                console.log(val);
                renderProjectLink(val);
            }
        });
    }
});

function renderProjectLink(projectPath) {
    let projectName = projectPath.replace("/projects/", "").replaceAll("-", " ");
    let projectUrl = projectPath.replace("/", "") + "/index.html";
    console.log(projectName);
    //linksContainer.innerHTML += `<a href="${projectUrl}" class="project-link">${projectName}</a>`;
    console.log(projectUrl)
    console.log(linksContainer.innerHtml)
}

