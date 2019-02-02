/*
 * Script file for the quiz
 * 
 * Kashyap Thakkar
 * 
 * I, Kashyap Thakkar, 000742712 certify that this material is my original work. No other person's work has been used without due acknowledgement.
 */

//questions Array
var questions =
        [{
                "question": "Which country has the largest population?",
                "option1": "India",
                "option2": "Canada",
                "option3": "China",
                "option4": "US",
                "answer": "3"
            }, {
                "question": "Which country has the most lakes?",
                "option1": "Canada",
                "option2": "India",
                "option3": "England",
                "option4": "US",
                "answer": "1"
            }, {
                "question": "What is the national sport of canada?",
                "option1": "Lacrosse",
                "option2": "Soccer",
                "option3": "Cricket",
                "option4": "Football",
                "answer": "1"
            }, {
                "question": "Where was cricket invented?",
                "option1": "India",
                "option2": "Australia",
                "option3": "West Indies",
                "option4": "England",
                "answer": "4"
            }, {
                "question": "Which country has the most time zones?",
                "option1": "India",
                "option2": "Canada",
                "option3": "France",
                "option4": "US",
                "answer": "3"
            }
        ];


var number = questions.length;                          //Number of questions
var screen = document.getElementById('screen');         //container of quiz
var questionText = document.getElementById('question'); //questions section

//option section

var choice1 = document.getElementById('opt1');          
var choice2 = document.getElementById('opt2');
var choice3 = document.getElementById('opt3');
var choice4 = document.getElementById('opt4');


var next = document.getElementById('next');             //Next button section
var score = document.getElementById('result');          //result section
var current = 0;                                        //current question
var count = 0;                                          //for keep tracking the score

/*
 * For displaying the first question
 * @param {int} questionIndex - index of the question in the array
 */
function loadQuestion(questionIndex) {
    var que = questions[questionIndex];                 // question from array
    questionText.innerHTML = (questionIndex + 1) + '. ' + que.question;
    choice1.innerHTML = que.option1;
    choice2.innerHTML = que.option2;
    choice3.innerHTML = que.option3;
    choice4.innerHTML = que.option4;

}

/*
 * For changing the questions and keep tracking the score
 */
function nextQuestion() {
    var selected = document.querySelector('input[type=radio]:checked');

    if (!selected) {
        return;
    }

    var choice = selected.value;

    if (questions[current].answer === choice) {
        count++;
    }

    selected.checked = false;
    current++;
    if (current === (number - 1)) {
        next.value = 'Submit';
    }
    if (current === (number)) {
        screen.style.display = 'none';
        score.style.display = '';
        
        if (count === 0) {
            score.innerHTML = 'Very Bad: Your Score is: ' + count;
        } else if (count === 1) {
            score.innerHTML = 'Bad: Your Score is: ' + count;
        } else if (count === 2) {
            score.innerHTML = 'Average: Your Score is: ' + count;
        } else if (count === 3) {
            score.innerHTML = 'Good: Your Score is: ' + count;
        } else if (count === 4) {
            score.innerHTML = 'Very Good: Your Score is: ' + count;
        } else if (count === 5) {
            score.innerHTML = 'Excelent: Your Score is: ' + count;
        }

        return;
    }
    loadQuestion(current);

}

loadQuestion(0);