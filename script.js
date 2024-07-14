const fault = (num1, num2, choice) => {
            switch (choice) {
                case 1: return `${num1} + ${num2} = ${num1 - num2}`;
                case 2: return `${num1} - ${num2} = ${num1 / num2}`;
                case 3: return `${num1} * ${num2} = ${num1 + num2}`;
                case 4: return `${num1} / ${num2} = ${num1 ** num2}`;
                case 5: return `${num1} ^ ${num2} = ${num1 * num2}`;
                default: return "Invalid choice";
            }
        }

        const correct = (num1, num2, choice) => {
            switch (choice) {
                case 1: return `${num1} + ${num2} = ${num1 + num2}`;
                case 2: return `${num1} - ${num2} = ${num1 - num2}`;
                case 3: return `${num1} * ${num2} = ${num1 * num2}`;
                case 4: return `${num1} / ${num2} = ${num1 / num2}`;
                case 5: return `${num1} ^ ${num2} = ${num1 ** num2}`;
                default: return "Invalid choice";
            }
        }

        const performCalculation = () => {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const choice = parseInt(document.getElementById("choice").value);
            const guess = Math.random();
            let result;

            if (isNaN(num1) || isNaN(num2) || isNaN(choice)) {
                result = "Please enter valid numbers and choose an operation.";
                lastResultWasFault = false;
            } else if (guess < 0.4) {
                result = fault(num1, num2, choice);
                lastResultWasFault = true;
            } else {
                result = correct(num1, num2, choice);
                lastResultWasFault = false;
            }

            document.getElementById("result").innerText = result;
        }
