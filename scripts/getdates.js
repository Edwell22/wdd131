const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© ${today.getFullYear()} Edwell Kakunguwo, Zimbabwe`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;