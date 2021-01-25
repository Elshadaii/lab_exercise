var service;
var num1;
var num2;
service = prompt("Choose one: 1 - Addition 2 - Subtraction 3 - Division 4 - Multiplication");
num1 = prompt("Enter First Number: ");
num2 = prompt("Enter Second Number: ");
num1 = parseInt(num1);
num2 = parseInt(num2);

if (service == 1) {


    function add(num1, num2) {
        return num1 + num2;

    }
    let sum = add(num1, num2)
    console.log(sum)

    console.log(add);
} else if (service == 2) {
    function subtract(num1, num2) {
        return num1 - num2;

    }
    let a = subtract(num1, num2);
    console.subtract(a);
    console.log(subtract());
} else if (service == 3) {
    function divide(num1, num2) {
        return num1 / num2;

    }
    let a = divide(num1, num2);
    console.log(a);
    console.log(divide());
} else if (service == 4) {
    function multiply(num1, num2) {
        return num1 * num2;

    }
    console.log(multiply());
}