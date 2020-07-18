function solveFibonacci(specifiedLength) {
  let sequence = [1, 1];
  for (let i = 0; i < specifiedLength - 2; i++) {
    const previousNumber = sequence[i];
    const currentNumber = sequence[i + 1];
    const newNumber = previousNumber + currentNumber;
    sequence.push(newNumber);
  }
  return sequence;
}

const ol = document.querySelector("#fibonacci-sequence");
const fibonacciSequenceArray = solveFibonacci(100);
let i = 0;

setInterval(() => {
  if (i < fibonacciSequenceArray.length) {
    ol.innerHTML += `<li>${fibonacciSequenceArray[i]}</li>`;
    i++;
  }
}, 100);
