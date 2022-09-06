var e = document.getElementById("navbar-item-1");
e.firstChild.style.background = 'rgb(75, 204, 213)'

const leftDeco = document.createElement("div");
leftDeco.style.position = "absolute";
leftDeco.style.top = "15vh";
leftDeco.style.left = "15vw";
leftDeco.style.borderTop = "8px solid rgb(255, 49, 49)";
leftDeco.style.borderLeft = "6px solid rgb(255, 49, 49)";
leftDeco.style.display = "block";
leftDeco.style.height = "100px";
leftDeco.style.width = "200px";

const rightDeco = document.createElement("div");
rightDeco.style.position = "absolute";
rightDeco.style.bottom = "15vh";
rightDeco.style.right = "15vw";
rightDeco.style.borderBottom = "8px solid rgb(15, 255, 80)";
rightDeco.style.borderRight = "6px solid rgb(15, 255, 80)";
rightDeco.style.display = "block";
rightDeco.style.height = "100px";
rightDeco.style.width = "200px";

document.getElementById("favicon").href = "Assets/favicon.png";

document.getElementById("content").style.position = "relative"
document.getElementById("content").appendChild(leftDeco);
document.getElementById("content").appendChild(rightDeco);