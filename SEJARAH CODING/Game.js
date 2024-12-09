// Data peristiwa sejarah
const questions = [
    {
        question: "Proklamasi Kemerdekaan Indonesia",
        yearOptions: ["1942", "1945", "1950", "1960"],
        correct: 1
    },
    {
        question: "Revolusi Prancis dimulai",
        yearOptions: ["1776", "1789", "1804", "1812"],
        correct: 1
    },
    {
        question: "Berlin Wall runtuh",
        yearOptions: ["1987", "1989", "1991", "1995"],
        correct: 1
    },
    {
        question: "Deklarasi Kemerdekaan Amerika Serikat",
        yearOptions: ["1770", "1776", "1781", "1787"],
        correct: 1
    },
    {
        question: "Perang Dunia II berakhir",
        yearOptions: ["1940", "1945", "1950", "1955"],
        correct: 1
    }
];

let currentQuestionIndex = 0;

// Fungsi untuk memulai permainan
function startGame() {
    document.querySelector('.welcome-container').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    loadQuestion();
}

// Fungsi untuk memuat pertanyaan berikutnya
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = `Kapan ${questionData.question} terjadi?`;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    questionData.yearOptions.forEach((year, index) => {
        const button = document.createElement('button');
        button.innerText = year;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });

    document.getElementById('result').innerText = '';
    document.getElementById('nextButton').style.display = 'none';
}

// Fungsi untuk mengecek jawaban
function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    if (selectedIndex === questionData.correct) {
        resultElement.innerText = 'Jawaban benar!';
        resultElement.style.color = '#28a745';
    } else {
        resultElement.innerText = 'Jawaban salah!';
        resultElement.style.color = '#dc3545';
    }
    document.getElementById('nextButton').style.display = 'inline-block';
}

// Fungsi untuk berpindah ke pertanyaan berikutnya
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').innerText = 'Permainan selesai! Terima kasih telah bermain.';
        document.getElementById('answers').innerHTML = '';
        document.getElementById('nextButton').style.display = 'none';
    }
}
