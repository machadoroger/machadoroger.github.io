let currentQuestions = [];
const quizForm = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('results');
const selectionDiv = document.getElementById('selection-buttons');
const quizArea = document.getElementById('quiz-area');
const mainTitle = document.getElementById('main-title');
const backBtn = document.getElementById('back-btn');
const submitBtn = document.getElementById('submit-btn');

// Função auxiliar para embaralhar um array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função principal para iniciar o simulado
function startQuiz(obj, questions) {

    currentQuestions = questions;

    // Prepara e exibe a interface do simulado
    mainTitle.textContent = obj.innerText;
    selectionDiv.classList.add('hidden');
    quizArea.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
    backBtn.classList.add('hidden');
    resultsDiv.classList.add('hidden');
    quizForm.innerHTML = '';
    
    renderQuiz();
}

// Função para renderizar as perguntas no HTML
function renderQuiz() {
    currentQuestions.forEach((q, qIndex) => {
        const block = document.createElement('div');
        block.classList.add('question-block');
        
        // Título da Pergunta
        const title = document.createElement('div');
        title.classList.add('question-title');
        title.innerHTML = `${qIndex + 1}. ${q.question}`;
        block.appendChild(title);

        // Alternativas
        q.options.forEach((opt, oIndex) => {
            const altDiv = document.createElement('label');
            altDiv.classList.add('alternative');
            
            const inputType = q.type === 'single' ? 'radio' : 'checkbox';
            const inputName = `q${qIndex}`;
            const inputValue = oIndex;

            altDiv.innerHTML = `
                <input type="${inputType}" name="${inputName}" value="${inputValue}" data-correct="${opt.isCorrect}">
                <span>${opt.text}</span>
            `;
            block.appendChild(altDiv);
        });

        quizForm.appendChild(block);
    });
}

// Função para verificar as respostas e mostrar o resultado
function checkAnswers() {
    let totalCorrect = 0;
    const questionsBlocks = document.querySelectorAll('#quiz-form .question-block');
    const totalQuestions = currentQuestions.length;

    questionsBlocks.forEach((block, qIndex) => {
        const questionData = currentQuestions[qIndex];
        const alternatives = block.querySelectorAll('.alternative');
        let isQuestionCorrect = true;

        alternatives.forEach((alt, oIndex) => {
            const input = alt.querySelector('input');
            const isCorrect = input.dataset.correct === 'true';
            const isChecked = input.checked;

            // 1. Marca visualmente a alternativa correta e remove correções anteriores
            alt.classList.remove('correct', 'incorrect-selected');
            if (isCorrect) {
                alt.classList.add('correct');
            }

            // 2. Avalia a resposta do usuário e marca erros
            if (questionData.type === 'single') {
                // Resposta Única: Se marcou errado OU deixou de marcar a correta
                if (isChecked && !isCorrect) {
                    alt.classList.add('incorrect-selected');
                    isQuestionCorrect = false;
                }
                if (isCorrect && !isChecked) {
                    isQuestionCorrect = false; 
                }
            } else {
                // Múltipla Escolha: Se marcou/desmarcou de forma diferente da correta
                if (isChecked !== isCorrect) {
                    isQuestionCorrect = false;
                    if (isChecked && !isCorrect) {
                        alt.classList.add('incorrect-selected');
                    }
                }
            }
            
            // Desabilita as opções
            input.disabled = true;
        });

        // Marca o bloco da questão como correta ou incorreta
        if (isQuestionCorrect) {
            totalCorrect++;
            block.style.border = '2px solid #28a745';
        } else {
            block.style.border = '2px solid #cc0000';
        }
    });

    // Exibe os resultados
    resultsDiv.innerHTML = `
        Você acertou **${totalCorrect}** de **${totalQuestions}** questões.<br>
        Sua pontuação: **${((totalCorrect / totalQuestions) * 100).toFixed(2)}%**
    `;
    resultsDiv.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    backBtn.classList.remove('hidden');
}

// Função para voltar à tela de seleção
function resetQuiz() {
    selectionDiv.classList.remove('hidden');
    quizArea.classList.add('hidden');
    mainTitle.textContent = "Simulado SAFe 6 Agilist";
    quizForm.innerHTML = ''; // Limpa o formulário
    resultsDiv.classList.add('hidden');
    backBtn.classList.add('hidden');
}

// Inicializa a tela de seleção
document.addEventListener('DOMContentLoaded', resetQuiz);