
#  GameShelf

Projeto desenvolvido para a disciplina de Desenvolvimento Web, focado no gerenciamento pessoal de uma coleção de jogos.

##  Objetivo
O GameShelf permite cadastrar jogos, gerenciar status (Jogando, Zerado, Pausado) e visualizar estatísticas da coleção. Toda a persistência de dados ocorre localmente no navegador do usuário.

##  Tecnologias Utilizadas (Vanilla Stack)
Atendendo aos requisitos da disciplina, este projeto foi construído **sem o uso de frameworks ou bibliotecas externas**:
- **HTML5:** Estruturação semântica de múltiplas interfaces.
- **CSS3:** Estilização global própria, sem uso de CSS externo (ex: Bootstrap).
- **JavaScript (Vanilla):** - Manipulação intensa do DOM.
  - Uso de eventos (`onsubmit`, `onchange`, `onclick`).
  - Manipulação de vetores (Arrays) e objetos JSON.
  - Persistência de dados utilizando `localStorage` (Arquitetura sem backend).

##  Interfaces
1. **Dashboard (`index.html`):** Resumo em tempo real dos dados da coleção utilizando métodos de array como `.filter()` e `.reduce()`.
2. **Minha Coleção (`colecao.html`):** CRUD completo dos jogos, com formulário de cadastro, filtros dinâmicos e exclusão de itens.

## 🚀 Como executar
Como o projeto não utiliza dependências ou servidores backend complexos, basta fazer o download dos arquivos e abrir o `index.html` em qualquer navegador web moderno.
