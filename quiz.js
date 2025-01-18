// Function to check the answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById("feedback");

    // Check if an option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
