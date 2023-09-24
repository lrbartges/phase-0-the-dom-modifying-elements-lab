const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Lindsey is the champion"; // Replace 'YOUR-NAME' with your desired name
document.body.append(newHeader);