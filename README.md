# BarberHub

Sistema web para barbearia, com página de apresentação, autenticação de clientes e, na visão completa do projeto, agendamento de horários e área administrativa da barbearia.

É um projeto de portfólio: o foco está em organização de código, componentes reutilizáveis, acessibilidade e boas práticas de frontend e backend.

## Funcionalidades

**Home**
- Header responsivo, com menu lateral no celular
- Seções de apresentação, como funciona, serviços, equipe e contato (com WhatsApp e mapa)
- Rodapé com os dados da barbearia

**Autenticação**
- Login com email, senha, "Lembrar de mim" e links para cadastro e recuperação de senha
- Cadastro com nome completo, CPF, data de nascimento, telefone/WhatsApp, email, senha, confirmação de senha e aceite dos termos
- Validação de senhas iguais no cadastro, com mensagem de erro no campo
- Botão de mostrar e ocultar senha
- Telas de autenticação centralizadas por um layout compartilhado

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React (JavaScript), Vite, Tailwind CSS v4, shadcn/ui (Base UI, preset Nova, ícones Lucide, fonte Geist), React Router no modo de dados |
| Backend | Node, com Express; rate limiting, fila e cache |
| Versionamento | Git e GitHub, com mensagens no padrão Conventional Commits |

## Como rodar

Pré-requisito: Node.js instalado.

```bash
# clonar o repositório
git clone https://github.com/alberijunior30/barberhub.git
cd barberhub

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev

# expor na rede local (para testar no celular)
npm run dev -- --host
```

## Estrutura de pastas

```
src/
├── components/
│   ├── ui/          # componentes do shadcn
│   ├── layouts/     # Header, Container, Footer
│   └── form/        # FormField (campo genérico)
├── features/
│   ├── auth/        # AuthLayout, LoginForm, RegisterForm, EmailField, PasswordField
│   └── home/        # HeroSection, HowItWorksSection, ServicesSection, TeamSection, ContactSection
├── config/
│   └── business.js  # nome, endereço, horário, WhatsApp, Instagram e mapa da barbearia
├── pages/           # Home, LoginPage, RegisterPage, RecoverPassPage
├── routes/
│   └── index.jsx    # rotas (createBrowserRouter)
├── lib/
│   └── utils.js     # função cn
├── assets/
└── index.css        # tema e regras globais
```

- `components/`: peças genéricas e de estrutura, reaproveitáveis em qualquer tela.
- `features/`: tudo que pertence a uma funcionalidade específica.
- `pages/`: só monta as peças; não tem lógica própria.

## Como o projeto está sendo feito

### Desenvolvimento em fatias verticais
Cada funcionalidade é feita de ponta a ponta antes de começar a próxima: autenticação no front, backend de autenticação, dados da home, agendamento e área da barbearia.

### Tema centralizado
- As cores ficam nas variáveis do `:root`, no `index.css`: fundo `#141b20`, superfícies `#19212b` e primary em `green-500`.
- Os componentes usam os nomes do tema (`bg-card`, `text-primary`, `text-muted-foreground`), nunca valores fixos.
- O `color-scheme: dark` faz o navegador desenhar os elementos nativos, como o calendário do campo de data, no tema escuro.

### Dados da barbearia num arquivo só
Ficam em `config/business.js`, usado pelo header, pela seção de contato e pelo rodapé.

### Layouts
- O `Container` (`max-w-7xl mx-auto px-6`) alinha header, seções e rodapé da home.
- O `AuthLayout` usa o `Outlet` do React Router para envolver login, cadastro e recuperação de senha com o mesmo invólucro centralizado.

### Header por composição
- Recebe `links` (lista de dados) e `actions` (JSX).
- No celular, os links vão para um menu lateral com o `Sheet`, controlado por estado (`open` + `onOpenChange`).

### Campos de formulário reutilizáveis
- `FormField` é o campo genérico: label ligado ao input, classes de foco do tema, `required` por padrão e as demais props repassadas ao `Input`.
- `EmailField` e `PasswordField` já vêm configurados para seus casos (`type`, `placeholder`, `autoComplete`), e o `PasswordField` tem o botão de mostrar e ocultar a senha.
- Em todos, o `name` segue o `id` por padrão.

### Formulários
- O envio é controlado pelo React (`onSubmit` com `preventDefault`), sem recarregar a página.
- Os valores são lidos com `FormData`, pelo `name` de cada campo.
- A validação nativa do navegador (`required`, `type="email"`) é combinada com validações próprias, como a confirmação de senha.

### Navegação
- `Link` para outras páginas
- `<a href="#secao">` para seções da mesma página
- `<a target="_blank" rel="noopener noreferrer">` para sites externos

## Convenções de código

- Componentes em PascalCase e propriedades em camelCase
- Arrays de dados fixos ficam fora dos componentes
- `key` sempre com `id`
- Tags semânticas (`main`, `section`, `ul`/`ol`, `h1`/`h2`/`h3`)
- Acessibilidade com `alt`, `aria-label`, `aria-hidden`, `title` e labels ligados aos campos
- `autoComplete` e `inputMode` adequados em cada campo

## Commits

As mensagens seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/), com escopo quando fizer sentido:

| Tipo | Uso |
| --- | --- |
| `feat` | nova funcionalidade |
| `fix` | correção de bug |
| `refactor` | mudança de código sem nova funcionalidade |
| `style` | ajustes visuais ou de formatação |
| `docs` | documentação |
| `wip` | trabalho em andamento |

Exemplo: `feat(auth): valida confirmação de senha no cadastro`

## Autor

Alberi Júnior: [@alberijunior30](https://github.com/alberijunior30)