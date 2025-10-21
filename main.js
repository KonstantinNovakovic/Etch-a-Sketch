const container = document.getElementById("container");
const input = document.getElementById("input");
const button = document.getElementById("btn");

function doSomething() {
  opacity = 0;
  container.innerHTML = "";

  let numberOfSquaresPerRow = input.value;
  console.log(numberOfSquaresPerRow);
  for (let i = 0; i < numberOfSquaresPerRow * numberOfSquaresPerRow; i++) {
    newElement = document.createElement("div");
    newElement.classList.add("row");
    newElement.style.height =
      Math.sqrt(160000 / (numberOfSquaresPerRow * numberOfSquaresPerRow)) +
      "px";
    newElement.style.width =
      Math.sqrt(160000 / (numberOfSquaresPerRow * numberOfSquaresPerRow)) +
      "px";

    container.append(newElement);
  }
}

button.addEventListener("click", doSomething);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    button.click();
  }
});

let opacity = 0;

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("row")) {
    const r = Math.floor(Math.random() * 256); // Random number from 0-255
    const g = Math.floor(Math.random() * 256); // Random number from 0-255
    const b = Math.floor(Math.random() * 256); // Random number from 0-255

    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    e.target.style.opacity = opacity;
    opacity += 0.1;
  }
});
