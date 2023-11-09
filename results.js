document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const scoreElement = document.getElementById("score");
    const correctAnswersElement = document.getElementById("correctAnswers");
    const wrongAnswersElement = document.getElementById("wrongAnswers");
    const questionResultsList = document.getElementById("questionResults");
    const questionIndicesElement = document.getElementById("questionIndices");

    // Retrieve the results from the query parameters
    const score = urlParams.get("score") || "0";
    const correctCount = urlParams.get("correctCount") || "0";
    const wrongCount = urlParams.get("wrongCount") || "0";
    const results = urlParams.get("results") || "";
    const questionCount = urlParams.get("questionCount") || "0";

    // Display the results on the page
    scoreElement.textContent = score;
    correctAnswersElement.textContent = correctCount;
    wrongAnswersElement.textContent = wrongCount;

    const resultsArray = results.split(',');
    questionResultsList.innerHTML = resultsArray.map(result => `<li>${result}</li>`).join('');

    // Display the actual question indices
    const actualQuestionIndices = Array.from({ length: questionCount }, (_, index) => index % 10 + 1);
    questionIndicesElement.textContent = actualQuestionIndices.join(', ');
});
