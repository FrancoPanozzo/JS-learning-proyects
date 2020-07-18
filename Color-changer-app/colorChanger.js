function randomHEXColor() {
  const HEX_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
  let HEX_color = "";
  for (let i = 0; i < 6; i++) {
    // Gets a random number between 0 - 14
    let random = Math.round(Math.random() * 14);
    HEX_color += HEX_values[random];
  }
  return `#${HEX_color}`;
}

document
  .querySelector(".container__card button")
  .addEventListener("click", () => {
    const color = randomHEXColor();
    document.querySelector(".container").style.backgroundColor = color;
    document.querySelector(".container__card span strong").innerText = color;
  });
