function operation(num1, num2, choice) {
    switch (choice) {
        case '+':
            return num1 + num2;
        case '-': 
            return num1 - num2;
        case '*': 
            return num1 * num2;
        case '/': 
            return num2 !== 0 ? num1 / num2 : 'Can not divide by zero! error';
        default: 
            return "Invalid choice! ";
    }
}
function performCalculation(passChoice) {
    var choice = passChoice;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers and choose an operation.";
    } else {
        result = operation(num1, num2, choice);
    }

    document.getElementById("result").innerText = result;
}
