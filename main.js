const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  const newElement = document.createElement("div");
  newElement.classList.add("row");
  container.append(newElement);
}
