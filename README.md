# Resenha ON — Landing Page (Sprint 4 · Front-End Design)

Landing page do **Resenha ON**, modo de câmera "Modo Estudo" dos smartphones JOVI que lê quadros, slides e anotações (OCR) e organiza o conteúdo da rotina do estudante full-time. Projeto do **FIAP Engineering Software Challenge 2026** em parceria com a **JOVI Smartphone**.

Esta entrega é a evolução da landing page da Sprint 3 (HTML + CSS Grid): a mesma proposta e o mesmo visual, agora integrados ao **React** e estilizados com **Tailwind CSS**, com layout responsivo para desktop, tablet e mobile.

## GitHub e Vercel

GitHub: https://github.com/MichelHanada/Sprint-4-Front-End
Vercel: https://vercel.com/fiapaulista/sprint4-front-end

## Tecnologias utilizadas

| Tecnologia | Uso |
| --- | --- |
| React 18 | Componentização da landing page |
| Tailwind CSS v4 (plugin `@tailwindcss/vite`) | Estilização e responsividade |
| Vite 6 | Servidor de desenvolvimento e build |
| HTML5 semântico e CSS Grid | Estrutura e layout (mantidos da Sprint 3) |
| Git + Vercel | Versionamento e deploy |

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior (inclui o `npm`).

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra o endereço exibido no terminal (por padrão, `http://localhost:5173`).

Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## Responsividade

O layout é mobile-first e usa os breakpoints padrão do Tailwind:

| Dispositivo | Largura | O que muda |
| --- | --- | --- |
| Mobile | até 639 px | Menu recolhido em botão, seções em coluna única, números em 2 colunas |
| Tablet | 640 px a 1023 px | Cards da solução e do público-alvo em 2 colunas, equipe em 3 colunas a partir de 768 px, menu ainda recolhido |
| Desktop | a partir de 1024 px | Menu horizontal completo, 3 cards da solução, 4 itens do público, 4 números |

## O que mudou da Sprint 3 para a Sprint 4

| Item | Sprint 3 | Sprint 4 |
| --- | --- | --- |
| Tecnologia | Um único `index.html` com CSS próprio | React com um componente por seção e Tailwind CSS |
| Menu | Botão "burger" sem ação | Menu mobile que abre e fecha, com `aria-expanded` |
| Galeria | Lista de 6 tópicos em texto | Galeria interativa: 6 telas ilustrativas do protótipo, navegáveis por etapa e pelos botões Anterior/Próxima |
| Contato | Formulário sem validação | Validação dos campos com mensagens de erro, contador de caracteres e confirmação |
| Equipe | Nome, função e RM | Mesmos dados, com avatar de iniciais |
| Alinhamento | Texto à esquerda | Texto centralizado em todas as seções |
| Deploy | Arquivo estático | Projeto Vite pronto para Git + Vercel (`vercel.json`) |

## Estrutura de pastas

```text
.
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── INTEGRANTES.TXT
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            Tailwind e tema (cores, fontes, animação)
    ├── data/
    │   └── conteudo.js      Textos e dados das seções
    └── components/
        ├── Header.jsx       Menu de navegação (desktop e mobile)
        ├── Hero.jsx
        ├── Stats.jsx
        ├── Solucao.jsx
        ├── Publico.jsx
        ├── Galeria.jsx      Galeria interativa
        ├── TelasGaleria.jsx Telas ilustrativas da galeria
        ├── Equipe.jsx
        ├── Contato.jsx      Formulário com validação
        ├── Footer.jsx
        ├── Container.jsx
        └── SectionHead.jsx
```

## Integrantes

| Nome | RM |
| --- | --- |
| Michel Tatsuya Hanada | 571987 |
| Felipe Ilek Felice | 571322 |
| Marcos Vinícius Serafim Tudisco Mendes | 569366 |

Turma 1ESPF · Engenharia de Software · FIAP 2026
