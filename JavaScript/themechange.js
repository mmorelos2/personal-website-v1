let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/') + 1);
filename = filename.substring(0, filename.indexOf('.'));

function setTheme(theme) {
  if (theme == "Style1") {
    localStorage.theme = "Style1";
    document.getElementById("favicon").href = "Assets/favicon.png";
  } else {
    localStorage.theme = "Style2";
    document.getElementById("favicon").href = "Assets/favicon2.png";
  }
  document.getElementById("stylesheet").href = "CSS/" + theme + "/" + filename + ".css";
}

console.log(localStorage.theme)

if (!localStorage.theme) {
  localStorage.theme = "Style1";
}

setTheme(localStorage.theme);
