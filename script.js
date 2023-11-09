document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const calculateScoreButton = document.getElementById("calculateScore");
    const scoreElement = document.getElementById("score");

    const correctAnswersElement = document.getElementById("correctAnswers");
    const wrongAnswersElement = document.getElementById("wrongAnswers");
    const questionResultsList = document.getElementById("questionResults");


    calculateScoreButton.addEventListener("click", function () {
        let score = 0;
        let correctCount = 0;
        let wrongCount = 0;
        const questionResults = [];

        const selectedOptions = quizForm.querySelectorAll("input[type=radio]:checked");
        selectedOptions.forEach(function (option,index) {
            const questionIndex = index % 10 + 1 ;
            const optionValue = parseInt(option.value, 10);
            score += optionValue;

            if (optionValue > 0) {
                correctCount++;
                questionResults.push(`Question ${questionIndex}: Correct`);
            } else {
                wrongCount++;
                questionResults.push(`Question ${questionIndex}: Wrong`);
            }
        });

        const queryParams = `?score=${score}&correctCount=${correctCount}&wrongCount=${wrongCount}&results=${questionResults.join(',')}&questionCount=${questionResults.length}`;
        window.location.href = `resultmath62.html${queryParams}`;
    });
});



        // Get the selected options and calculate the score
        /*const selectedOptions = quizForm.querySelectorAll("input[type=radio]:checked");
        selectedOptions.forEach(function (option) {
            score += parseInt(option.value, 10);
        });

        scoreElement.textContent = score;
    });
});*/



