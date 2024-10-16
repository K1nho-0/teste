function verificarResposta(faseAtual, respostasCorretas) {
    const input = document.getElementById(`resposta${faseAtual}`);

    // Verifica se o input existe antes de prosseguir
    if (!input) {
        console.error(`Elemento com id resposta${faseAtual} não encontrado.`);
        return;
    }

    const resposta = input.value.trim().toLowerCase();

    // Verifica se a resposta do usuário está entre as respostas corretas
    if (respostasCorretas.some(respostaCorreta => respostaCorreta.toLowerCase() === resposta)) {
        piscarVerde(() => avancarFase(faseAtual)); // Passa a função para avançarFase como callback
    } else {
        piscarVermelha(); // Chamada da função para resposta incorreta
    }
}

// Função para iniciar piscada verde
function piscarVerde(callback) {
    document.body.classList.add('piscada-verde');
    setTimeout(() => {
        document.body.classList.remove('piscada-verde');
        if (callback) callback(); // Chama a função de callback após a piscada
    }, 1000); // A piscada dura 1 segundo
}

// Função para iniciar piscada vermelha
function piscarVermelha() {
    document.body.classList.add('piscada-vermelha');
    setTimeout(() => {
        document.body.classList.remove('piscada-vermelha');
    }, 1000); // A piscada dura 1 segundo
}

function avancarFase(faseAtual) {
    const faseAtualDiv = document.getElementById(`fase${faseAtual}`);
    const proximaFaseDiv = document.getElementById(`fase${faseAtual + 1}`);

    faseAtualDiv.classList.remove('active');
    if (proximaFaseDiv) {
        proximaFaseDiv.classList.add('active');

        // Remove as classes de fundo e adiciona a nova classe correspondente
        document.body.classList.remove('fase1', 'fase2', 'fase3', 'fase4', 'fase5', 'fase6', 'fase7', 'fase8', 'fase9', 'fase10');
        
        // Adiciona a classe correspondente à nova fase
        document.body.classList.add(`fase${faseAtual + 1}`);
    } else {
        alert("Parabéns! Você completou todas as fases!");
        // Reseta o fundo ao final
        document.body.classList.remove('fase1', 'fase2', 'fase3', 'fase4', 'fase5', 'fase6', 'fase7', 'fase8', 'fase9', 'fase10'); // Remove todas as classes de fase
        document.body.style.backgroundImage = "url('./imagens/default.jpg')"; // Imagem padrão ou de conclusão
    }
}
// Iniciar na primeira fase
document.getElementById('fase1').classList.add('active');
document.body.classList.add('fase1'); // Classe para a fase inicial

