// storage.js - Arquivo Unificado de Persistência em LocalStorage

const CHAVE_JOGOS = 'gameshelf_jogos';
const CHAVE_WISHLIST = 'gameshelf_wishlist';
const CHAVE_REVIEWS = 'gameshelf_reviews';
const CHAVE_PERFIL = 'gameshelf_perfil';
const CHAVE_TEMA = 'gameshelf_tema';

function carregarDados(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
}

function salvarDados(chave, objeto) {
    localStorage.setItem(chave, JSON.stringify(objeto));
}

function generarId() {
    return 'id_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

function aplicarTemaGlobal() {
    const tema = localStorage.getItem(CHAVE_TEMA);
    if(tema === 'claro') {
        document.body.classList.add('tema-claro');
    } else {
        document.body.classList.remove('tema-claro');
    }
}

// Executa automaticamente em todas as páginas vinculadas para manter consistência visual
document.addEventListener("DOMContentLoaded", aplicarTemaGlobal);
