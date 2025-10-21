const container = document.getElementById("container");
const input = document.getElementById("input");
const button = document.getElementById("btn");

function doSomething() {
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

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("row")) {
    e.target.classList.add("red");
  }
});
