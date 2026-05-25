/* storage.js */
const CHAVE_JOGOS = 'gameshelf_jogos';
const CHAVE_WISHLIST = 'gameshelf_wishlist';
const CHAVE_REVIEWS = 'gameshelf_reviews';
const CHAVE_PERFIL = 'gameshelf_perfil';

// Funções Genéricas de manipulação de Vetores e Estruturas (Requisito do Professor)
function carregarDados(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
}

function salvarDados(chave, vetor) {
    localStorage.setItem(chave, JSON.stringify(vetor));
}

function gerarId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Aplica o tema global salvo nas configurações do perfil
function aplicarTemaGlobal() {
    const perfil = localStorage.getItem(CHAVE_PERFIL);
    if (perfil) {
        const objPerfil = JSON.parse(perfil);
        if (objPerfil.tema === 'claro') {
            document.body.classList.add('tema-claro');
        } else {
            document.body.classList.remove('tema-claro');
        }
    }
}

// Executa automaticamente ao carregar qualquer uma das interfaces
window.addEventListener('DOMContentLoaded', aplicarTemaGlobal);
