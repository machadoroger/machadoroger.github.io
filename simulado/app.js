let currentQuestions = []; // Armazena o conjunto de questões ativo.

// Função auxiliar para embaralhar um array (Fisher-Yates)
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

/**
 * Renderiza dinamicamente o formulário do quiz com as questões fornecidas.
 * @param {Array<Object>} questions - Lista de objetos de questão.
 */
function renderQuiz(questions) {
	const quizForm = document.getElementById('quiz-form');
	quizForm.innerHTML = ''; // Limpa o conteúdo anterior

	questions.forEach((q, qIndex) => {
		const inputType = q.type === 'single' ? 'radio' : 'checkbox';
		
		let alternativesHtml = q.options.map((option, oIndex) => {
			// Usando o atributo data-correct na label para a função checkAnswers
			return `
				<label class="alternative" data-correct="${option.isCorrect}">
					<input type="${inputType}" 
						   name="q${qIndex}" 
						   value="${oIndex}">
					<span>${option.text}</span>
				</label>
			`;
		}).join('');

		const explanationBlock = `
			<div class="obs hidden">
				<p class="font-bold">Explicação:</p>
				<p>${q.explanation}</p>
			</div>
		`;

		const questionBlock = `
			<div class="question-block">
				<div class="question-title text-xl font-bold mb-4">${qIndex + 1}. ${q.question}</div>
				${alternativesHtml}
				${explanationBlock}
			</div>
		`;
		quizForm.innerHTML += questionBlock;
	});

	document.getElementById('submit-btn').classList.remove('hidden');
}

/**
 * Inicia o quiz: esconde a seleção, mostra a área do quiz e renderiza as questões.
 * @param {HTMLElement} element - O link clicado.
 * @param {Array<Object> | null} questions - O array de questões.
 */
function startQuiz(element, questions) {
	if (!questions || questions.length === 0) {
		console.error('Simulado indisponível ou lista de questões vazia.');
		// Mensagem customizada (substituindo o alert)
		const mainTitle = document.getElementById('main-title');
		mainTitle.textContent = 'Erro: Simulado indisponível. Tente outro.';
		setTimeout(() => mainTitle.textContent = element.textContent, 3000);
		return;
	}
	currentQuestions = questions;
	document.getElementById('selection-buttons').classList.add('hidden');
	document.getElementById('quiz-area').classList.remove('hidden');
	document.getElementById('main-title').textContent = element.textContent;

	renderQuiz(questions);
}

/**
 * Reseta o estado da aplicação e retorna à tela de seleção.
 */
function resetQuiz() {
	document.getElementById('selection-buttons').classList.remove('hidden');
	document.getElementById('quiz-area').classList.add('hidden');
	document.getElementById('back-btn').classList.add('hidden');
	document.getElementById('submit-btn').classList.remove('hidden');
	document.getElementById('results').classList.add('hidden');
	document.getElementById('main-title').textContent = 'SAFe Practice Exams';

	// Limpa as classes de feedback
	document.querySelectorAll('.alternative').forEach(alt => {
		alt.classList.remove('correct-answer', 'incorrect-answer');
		// Reverte estilos de hover/default
		alt.classList.add('text-default'); 
	});

	// Remove seleções e reabilita inputs
	document.getElementById('quiz-form').reset();
	document.querySelectorAll('input').forEach(input => input.disabled = false);
}

/**
 * Verifica as respostas e exibe o resultado, além de mostrar as explicações.
 */
function checkAnswers() {
	let correctCount = 0;
	let totalQuestions = 0;
	const questionBlocks = document.querySelectorAll('.question-block');
	
	questionBlocks.forEach(block => {
		totalQuestions++;
		const alternatives = block.querySelectorAll('.alternative');
		let isQuestionCorrect = true;
		let hasSelection = false;

		// Novo código: Localiza o bloco de observação (explicação) e o torna visível
		const explanationDiv = block.querySelector('.obs');
		if (explanationDiv) {
			explanationDiv.classList.remove('hidden');
		}
		
		alternatives.forEach(alt => {
			const isCorrectOption = alt.getAttribute('data-correct') === 'true';
			const radio = alt.querySelector('input');
			const isSelected = radio && radio.checked;
			
			if (radio) radio.disabled = true; // Desabilita após verificação
			alt.classList.remove('hover:bg-indigo-50'); // Remove o efeito hover
			
			if (isCorrectOption) {
				// Marca a resposta correta
				alt.classList.add('correct-answer');
			}
			
			if (isSelected) {
				hasSelection = true;
				if (!isCorrectOption) {
					// Marca a resposta selecionada incorretamente
					alt.classList.add('incorrect-answer');
					isQuestionCorrect = false;
				}
			} else if (isCorrectOption) {
				// Se a resposta correta não foi selecionada, a questão está incorreta
				isQuestionCorrect = false;
			}
		});

		if (isQuestionCorrect) {
			correctCount++;
		}

		if (!hasSelection) {
			// Trata o caso de questão não respondida (pode ser ajustado conforme a regra)
		}

	});

	const score = (correctCount / totalQuestions) * 100;
	const resultsDiv = document.getElementById('results');

	// Limpa qualquer classe de resultado anterior
	resultsDiv.classList.remove('pass-result', 'fail-result'); 

	let feedbackMessage;

	// Define o limite de aprovação (geralmente 73% para o SAFe)
	if (score >= 73) {
		feedbackMessage = `🎉 Reprovado (${score.toFixed(0)}% de acertos | ${correctCount}/${totalQuestions})`;
		resultsDiv.classList.add('pass-result');
	} else {
		feedbackMessage = `⚠️ Reprovado (${score.toFixed(0)}% de acertos | ${correctCount}/${totalQuestions})`;
		resultsDiv.classList.add('fail-result');
	}

	const obsMessage = `
		<div class="text-sm">
			É necessário ter uma pontuação de 73% para ser aprovado.
		</div>
	`;

	resultsDiv.innerHTML = feedbackMessage + obsMessage;
;
	resultsDiv.classList.remove('hidden');

	document.getElementById('submit-btn').classList.add('hidden');
	document.getElementById('back-btn').classList.remove('hidden');
}

// --- Lógica de Dark Mode ---

const toggleButton = document.getElementById('dark-mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

const VAR_MAP = {
	'--text-color': { light: '#1e293b', dark: '#f1f5f9' },
	'--card-bg-color': { light: 'white', dark: '#1e293b' },
	'--border-color': { light: '#e2e8f0', dark: '#334155' }
};

// Função para aplicar os estilos CSS custom properties (melhora a transição)
function applyColors(isDarkMode) {
	const mode = isDarkMode ? 'dark' : 'light';
	for (const [prop, colors] of Object.entries(VAR_MAP)) {
		document.documentElement.style.setProperty(prop, colors[mode]);
	}
}

function checkDarkModePreference() {
	const isDarkMode = localStorage.getItem('dark-mode') === 'true' || 
						(!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
	
	if (isDarkMode) {
		body.classList.add('dark-mode');
		sunIcon.classList.add('hidden');
		moonIcon.classList.remove('hidden');
	} else {
		body.classList.remove('dark-mode');
		sunIcon.classList.remove('hidden');
		moonIcon.classList.add('hidden');
	}
	applyColors(isDarkMode);
}

toggleButton.addEventListener('click', () => {
	const isDarkMode = body.classList.toggle('dark-mode');
	localStorage.setItem('dark-mode', isDarkMode);
	
	if (isDarkMode) {
		sunIcon.classList.add('hidden');
		moonIcon.classList.remove('hidden');
	} else {
		sunIcon.classList.remove('hidden');
		moonIcon.classList.add('hidden');
	}
	applyColors(isDarkMode);
});

// Aplica a preferência inicial ao carregar
document.addEventListener('DOMContentLoaded', checkDarkModePreference);
window.addEventListener('load', () => {
		// Inicia a aplicação na tela de seleção para a demo
	document.getElementById('selection-buttons').classList.remove('hidden');
	document.getElementById('quiz-area').classList.add('hidden');
});