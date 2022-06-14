const linksContainer = document.getElementById("links");
const folder = "/projects/";
const projects = [
    "four-card-feature-section-master",
];

// TO-DO - does not work on remote server
// $.ajax({
//     url : folder,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if(val.includes("/projects/")){
//                 console.log(val);
//                 renderProjectLink(val);
//             }
//         });
//     }
// });

projects.forEach(function(projectName){
    renderProjectLink(folder + projectName);
});

function renderProjectLink(projectPath) {
    let projectName = projectPath.replace("/projects/", "").replaceAll("-", " ");
    let projectUrl = projectPath.replace("/", "") + "/index.html";
    linksContainer.innerHTML += `<a href="${projectUrl}" class="project-link">${projectName}</a>`;
}

