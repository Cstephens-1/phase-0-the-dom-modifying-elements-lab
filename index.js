const main = document.getElementById("main")

main.remove();

const newHeader = document.createElement("h1")

newHeader.innerHTML = "Cory is the champion";
newHeader.id = "victory"

document.body.appendChild(newHeader)