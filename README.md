# 💳 Shared Card API

API RESTful desenvolvida para gerenciar e compartilhar cartões, construída com foco em boas práticas de arquitetura de backend, tipagem estática rigorosa e integração com banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando a seguinte pilha tecnológica (Stack):

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (v5)
* **Ambiente de Execução:** [Node.js](https://nodejs.org/) (v20 LTS)
* **Framework Web:** [Express.js](https://expressjs.com/)
* **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)
* **Driver do Banco:** `pg` (com gerenciamento de Pool de conexões)
* **Ferramentas de Desenvolvimento:** `ts-node-dev`, `dotenv`, `cors`
* **Ambiente de Desenvolvimento:** WSL (Ubuntu no Windows)

---

## 📂 Arquitetura do Projeto

A estrutura de diretórios foi pensada para manter a separação de responsabilidades e facilitar a escalabilidade:

```text
shared-card-api/
├── src/
│   ├── config/       # Configurações globais (ex: conexão com o banco de dados)
│   ├── types/        # Declarações globais de tipos do TypeScript (ex: env.d.ts)
│   └── server.ts     # Ponto de entrada da aplicação (Entrypoint)
├── .env              # Variáveis de ambiente (não versionado)
├── .env.example      # Exemplo de variáveis de ambiente
├── .gitignore        # Arquivos ignorados pelo Git
├── package.json      # Dependências e scripts do projeto
└── tsconfig.json     # Configurações do compilador TypeScript
