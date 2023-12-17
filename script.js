const questions = [
    {
        question: "1 ribuan + 7 ratusan + 3 puluhan + 1 satuan = ...",
        answers: [
            {text: "1.731", correct: true},
            {text: "1.173", correct: false},
            {text: "1.713", correct: false},
            {text: "1.137", correct: false},
        ]
    },
    {
        question: "Angga dan Kris mengikuti lomba matematika. Angga mendapat total niai 391 sedangkan Kris mendapat total nilai 333. Berapa jumlah total nilai yang mereka dapat jika digabungkan?",
        answers: [
            {text: "742", correct: false},
            {text: "724", correct: true},
            {text: "642", correct: false},
            {text: "624", correct: false},
        ]
    },
    {
        question: "(-10)+(-8)+5 = ...",
        answers: [
            {text: "13", correct: false},
            {text: "-13", correct: true},
            {text: "7", correct: false},
            {text: "-7", correct: false},
        ]
    },
    {
        question: "Bu Sari adalah seorang penjual beras. Bu Sari hari ini bisa menjual 450 kg beras, sedangkan kemarin hanya bisa menjual 325 kg beras. Jadi jumlah beras yang dijual Bu Sari hari ini dan kemarin adalah ... kg.",
        answers: [
            {text: "725", correct: false},
            {text: "575", correct: false},
            {text: "775", correct: true},
            {text: "755", correct: false},
        ]
    },
    {
        question: "1.345 + 2.437 = ...",
        answers: [
            {text: "3.782", correct: true},
            {text: "3.772", correct: false},
            {text: "3.872", correct: false},
            {text: "3.682", correct: false},
        ]
    },
    {
        question: "Bentuk panjang bilangan dari 3.756 adalah...",
        answers: [
            {text: "3+7+5+6", correct: false},
            {text: "3000+580+70+6", correct: false},
            {text: "3+709+5+6", correct: false},
            {text: "3000+700+50+6", correct: true},
        ]
    },
    {
        question: "Dinda setiap hari diberi uang saku oleh ibunya. Namun ia selalu menyisihkan uang sakunya setiap 3 kali dalam seminggu. Pada hari Senin ia menyisihkan uang sakunya sebesar Rp.5.000. Pada hari Rabu ia menyisihkan uang sakunya sebesar Rp. 3.000. Dan pada hari Jum'at ia menyisihkan uang sakunya sebesar Rp.6.000. Berapa jumlah uang yang disisihkan Dinda selama seminggu?",
        answers: [
            {text: "Rp.13.000", correct: false},
            {text: "Rp.14.000", correct: true},
            {text: "Rp.15.000", correct: false},
            {text: "Rp.16.000", correct: false},
        ]
    },
    {
        question: "48 + (-21)= ...",
        answers: [
            {text: "69", correct: false},
            {text: "-69", correct: false},
            {text: "27", correct: true},
            {text: "-27", correct: false},
        ]
    },
    {
        question: "Desa Temuireng memiliki jumlah warga sebanyak 406 laki-laki dan 673 perempuan. Berapa jumlah warga di desa Temuireng?",
        answers: [
            {text: "1.129", correct: false},
            {text: "1.329", correct: false},
            {text: "1.159", correct: false},
            {text: "1.079", correct: true},
        ]
    },
    {
        question: "(-11) + 8 = ...",
        answers: [
            {text: "19", correct: false},
            {text: "3", correct: true},
            {text: "-3", correct: false},
            {text: "-19", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block" 
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();