const section = document.querySelector(".results");

const number1 = parseInt(prompt("Enter first number"));
const number2 = parseInt(prompt("Enter second number"));

const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;

const paragraph = document.createElement("p");
paragraph.innerHTML =
  "First entered number: " + number1 + "<br>Second entered number: " + number2;
section.append(paragraph);
10;

const paragraph1 = document.createElement("p");
paragraph1.textContent = "The result of addition: " + addition;
section.append(paragraph1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "The result of subtraction: " + subtraction;
section.append(paragraph2);

const paragraph3 = document.createElement("p");
paragraph3.textContent = "The result of multiplication " + multiplication;
section.append(paragraph3);

const paragraph4 = document.createElement("p");
paragraph4.textContent = "The result of division " + division;
section.append(paragraph4);
