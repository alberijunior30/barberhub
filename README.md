# BarberHub

Sistema web para barbearia, com página de apresentação, autenticação de clientes e, na visão completa do projeto, agendamento de horários e área administrativa da barbearia.

É um projeto de portfólio: o foco está em organização de código, componentes reutilizáveis, acessibilidade e boas práticas de frontend e backend.

## Funcionalidades

**Home**

- Header responsivo, com menu lateral no celular
- Seções de apresentação, como funciona, serviços, equipe e contato (com WhatsApp e mapa)
- Rodapé com os dados da barbearia

**Autenticação (front)**

- Login com email, senha, "Lembrar de mim" e links para cadastro e recuperação de senha
- Cadastro com nome completo, CPF, data de nascimento, telefone internacional, email, senha, confirmação de senha e aceite dos termos
- CPF com máscara e validação dos dígitos verificadores; data de nascimento com máscara e validação; telefone com seletor de países, enviado no formato E.164
- Todos os erros do formulário aparecem de uma vez, cada um embaixo do seu campo
- Recuperação de senha que não revela se o email está cadastrado
- Redefinição de senha pelo token do link, com tela de link inválido
- Botão de mostrar e ocultar senha
- Telas de autenticação centralizadas por um layout compartilhado

**Página de erro**

- 404 com mascote animado, que respeita a preferência por menos movimento
- Tela simples para erros inesperados

**API**

- Rota de verificação de saúde da API e do banco
- Documentação interativa com Swagger

**Próximos passos:** autenticação no backend, agendamento de horários e área da barbearia.

## Tecnologias

| Camada        | Tecnologias                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend      | React (JavaScript), Vite, Tailwind CSS v4, shadcn/ui (Base UI, preset Nova, ícones Lucide, fonte Geist), React Router no modo de dados |
| Backend       | Node com Express 5 e PostgreSQL; Redis para rate limiting e cache e BullMQ para fila (planejados)                                     |
| Documentação  | OpenAPI com Swagger UI                                                                                                                 |
| Ambiente      | Docker Compose                                                                                                                         |
| Versionamento | Git e GitHub, com mensagens no padrão Conventional Commits                                                                             |

## Como rodar

Pré-requisito: [Docker](https://docs.docker.com/get-docker/) com o Docker Compose.

```bash
# clonar o repositório
git clone https://github.com/alberijunior30/barberhub.git
cd barberhub

# criar o arquivo de variáveis de ambiente
cp .env.example .env

# subir front, API e banco
docker compose up --build
```

| Serviço             | Endereço                   |
| ------------------- | -------------------------- |
| Frontend            | http://localhost:5173      |
| API                 | http://localhost:3000      |
| Documentação da API | http://localhost:3000/docs |
| PostgreSQL          | localhost:5432             |

O código de `web/` e `api/` é montado dentro dos contêineres, então as alterações aparecem sem reiniciar nada.

Para testar no celular, abra `http://<IP do computador>:5173` com o celular no mesmo Wi-Fi.

| Comando                        | O que faz                                                  |
| ------------------------------ | ---------------------------------------------------------- |
| `docker compose up`            | Sobe os serviços                                           |
| `docker compose up --build -V` | Reconstrói as imagens; use depois de instalar dependências |
| `docker compose down`          | Derruba os serviços, mantendo os dados do banco            |
| `docker compose down -v`       | Derruba os serviços e apaga os dados do banco              |

## Estrutura de pastas

```
barberhub/
├── web/                 # frontend
│   └── src/
│       ├── components/
│       │   ├── ui/      # componentes do shadcn
│       │   ├── layouts/ # Header, Container, Footer
│       │   └── form/    # FormField (campo genérico), PhoneField
│       ├── features/
│       │   ├── auth/    # AuthLayout, AuthHeader, formulários e campos de email e senha
│       │   └── home/    # seções da página inicial
│       ├── config/
│       │   └── business.js  # dados da barbearia
│       ├── lib/         # funções puras: cn, máscaras e validações
│       ├── pages/       # Home, páginas de autenticação e páginas de erro
│       ├── routes/
│       │   └── index.jsx    # rotas (createBrowserRouter)
│       ├── assets/
│       └── index.css    # tema e regras globais
├── api/                 # API REST
│   ├── src/
│   │   ├── app.js       # configuração do Express e rotas
│   │   ├── server.js    # inicia o servidor
│   │   └── db.js        # conexão com o PostgreSQL
│   └── openapi.yaml     # documentação da API
├── compose.yaml         # front, API e banco
└── .env.example         # variáveis de ambiente necessárias
```

- `components/`: peças genéricas e de estrutura, reaproveitáveis em qualquer tela.
- `features/`: tudo que pertence a uma funcionalidade específica.
- `pages/`: só monta as peças; não tem lógica própria.
- `lib/`: lógica sem React, em funções puras.

## Como o projeto está sendo feito

### Desenvolvimento em fatias verticais

Cada funcionalidade é feita de ponta a ponta antes de começar a próxima: autenticação no front, backend de autenticação, dados da home, agendamento e área da barbearia.

### Tema centralizado

- As cores ficam nas variáveis do `:root`, no `index.css`: fundo `#141b20`, superfícies `#19212b` e primary em `green-500`.
- Os componentes usam os nomes do tema (`bg-card`, `text-primary`, `text-muted-foreground`), nunca valores fixos.
- O `color-scheme: dark` faz o navegador desenhar os elementos nativos no tema escuro.

### Dados da barbearia num arquivo só

Ficam em `config/business.js`, usado pelo header, pela seção de contato e pelo rodapé.

### Layouts

- O `Container` (`max-w-7xl mx-auto px-6`) alinha header, seções e rodapé da home.
- O `AuthLayout` usa o `Outlet` do React Router para envolver as telas de autenticação com o mesmo invólucro centralizado.

### Header por composição

- Recebe `links` (lista de dados) e `actions` (JSX).
- No celular, os links vão para um menu lateral com o `Sheet`, controlado por estado (`open` + `onOpenChange`).

### Campos de formulário reutilizáveis

- `FormField` é o campo genérico: label ligado ao input, classes de foco do tema, `required` por padrão e as demais props repassadas ao `Input`.
- `EmailField`, `PasswordField` e `PhoneField` já vêm configurados para seus casos, e o `PasswordField` tem o botão de mostrar e ocultar a senha.
- Todos recebem `error` e mostram a mensagem embaixo do campo, com `aria-invalid` no input.
- Em todos, o `name` segue o `id` por padrão.

### Formulários

- O envio é controlado pelo React (`onSubmit` com `preventDefault`), sem recarregar a página.
- Os valores são lidos com `FormData`, pelo `name` de cada campo.
- Os erros ficam num único estado `errors`, com a chave igual ao `name` do campo. No envio, todas as validações rodam de uma vez, e os dados só são convertidos e enviados se não houver erro.
- Toda validação do front é repetida no backend.

### API

- O `app.js` monta o Express e o `server.js` só inicia o servidor, para que os testes possam usar o `app` sem abrir uma porta.
- Uma única pool de conexões com o PostgreSQL, reaproveitada por toda a API.
- A documentação fica num arquivo OpenAPI separado, mantendo o código das rotas limpo.

### Navegação

- `Link` para outras páginas
- `<a href="#secao">` para seções da mesma página
- `<a target="_blank" rel="noopener noreferrer">` para sites externos

## Convenções de código

- Componentes em PascalCase e propriedades em camelCase
- Arrays de dados fixos ficam fora dos componentes
- `key` sempre com `id`
- Tags semânticas (`main`, `section`, `ul`/`ol`, `h1`/`h2`/`h3`)
- Acessibilidade com `alt`, `aria-label`, `aria-hidden`, `aria-invalid`, `role="status"` e labels ligados aos campos
- `autoComplete` e `inputMode` adequados em cada campo

## Commits

As mensagens seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/), com escopo quando fizer sentido:

| Tipo       | Uso                                       |
| ---------- | ----------------------------------------- |
| `feat`     | nova funcionalidade                       |
| `fix`      | correção de bug                           |
| `refactor` | mudança de código sem nova funcionalidade |
| `style`    | ajustes visuais ou de formatação          |
| `docs`     | documentação                              |
| `chore`    | configuração, dependências e ambiente     |
| `wip`      | trabalho em andamento                     |

Exemplo: `feat(auth): valida confirmação de senha no cadastro`

## Autor

Alberi Júnior: [@alberijunior30](https://github.com/alberijunior30)