const quizData = [
    {
        question: "What is the fastest animal in the world?",
        a: "Parrot",
        b: "Bear",
        c: "Cheetah",
        d: "Falcon",
        correct: "c"
    },
    {
        question: "What is the heaviest animal in the world?",
        a: "Blue whale",
        b: "Bear",
        c: "Elephant",
        d: "Bull",
        correct: "a"
    }
]

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const aa_text = document.getElementById('a_text');
const bb_text = document.getElementById('b_text');
const cc_text = document.getElementById('c_text');
const dd_text = document.getElementById('d_text');

const submit_button = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deSelectAnswer();

    const currentQuizData = quizData[currentQuiz];
    questionElement.innerHTML = currentQuizData.question;
    aa_text.innerHTML = currentQuizData.a
    bb_text.innerHTML = currentQuizData.b
    cc_text.innerHTML = currentQuizData.c
    dd_text.innerHTML = currentQuizData.d

}

function deSelectAnswer(){
    answerElements.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer;
}

submit_button.addEventListener('click', () => {
    const answer = getSelected();

    if (answer){
        if(answer == quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
})