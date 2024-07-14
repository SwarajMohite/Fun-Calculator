let userScore = 0;
let userTries = 0;
let lastResultWasFault = false;

        

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

        const updateScoreBasedOnFeedback = () => {
            const feedback = document.querySelector('input[name="feedback"]:checked').value;

            if (feedback === "wrong" && lastResultWasFault) {
                userScore++;
            } else if (feedback === "correct" && !lastResultWasFault) {
                userScore++;
            }

            userTries++;
            if (userTries === 5) {
                document.getElementById("score").innerText = `Final Score: ${userScore} / 15`;
                const endTime = new Date(); // Get the current time when all answers are submitted
                const totalTime = (endTime - startTime) / 1000; // Calculate total time in seconds
                console.log(`Total time taken: ${totalTime} seconds`); // Output total time (you can display this on your page as needed)
        
                resetGame();
            } else {
                document.getElementById("score").innerText = `Score: ${userScore}`;
            }
        }

        const resetGame = () => {
            userScore = 0;
            userTries = 0;
            document.getElementById("num1").value = '';
            document.getElementById("num2").value = '';
            document.getElementById("choice").value = '1';
            document.getElementById("result").innerText = 'Answer';
            document.getElementById("score").innerText = 'Score: 0';
        }
    
