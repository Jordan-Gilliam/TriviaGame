function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id= 'score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Who is the main character of Mr. Robot?", ["Elliot Alderson", "Maria Carry", "Wayne Rooney", "Bam Margera"], "Elliot Alderson"),
    new Question("Where is the show set?", ["NYC", "Boston", "China", "Denver"], "NYC"),
    new Question("Who is Mr. Robot trying to take down?", ["Google", "E-corp", "Walmart", "Microsoft"], "E-corp"),
    new Question("What operating system is used for hacking in the series?", ["OSX", "Windows 7", "Kali Linux", "Chrome OS"], "Kali Linux"),
    new Question("What year does the series take place?", ["1970", "In the Future", "Present Day", "Unknown"], "Present Day")
];


var quiz = new Quiz(questions);

populate();
