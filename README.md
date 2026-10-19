# GTech

Sistema web para barbearia: página de apresentação, autenticação de clientes e, nas próximas etapas, agendamento de horários e área administrativa da barbearia.

> Projeto em desenvolvimento. Hoje o frontend da home e do login está pronto; o backend ainda está planejado.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React (JavaScript), Vite, Tailwind CSS v4, shadcn/ui (Base UI, preset Nova, ícones Lucide, fonte Geist), React Router no modo de dados |
| Backend (planejado) | Node, provavelmente com Express; rate limiting, fila e cache |
| Versionamento | Git e GitHub, com mensagens no padrão Conventional Commits |

## Como rodar

```bash
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
│   ├── ui/          # componentes do shadcn (button, card, input, field, checkbox, badge, avatar, sheet)
│   └── layouts/     # Header, Container, Footer
├── features/
│   ├── auth/        # LoginForm
│   └── home/        # HeroSection, HowItWorksSection, ServicesSection, TeamSection, ContactSection
├── config/
│   └── business.js  # nome, endereço, horário, WhatsApp, Instagram e mapa da barbearia
├── Pages/           # Home, LoginPages, RegisterPage, RecoverPassPage
├── Routes/
│   └── index.jsx    # rotas (createBrowserRouter)
├── lib/
│   └── utils.js     # função cn
├── assets/
└── index.css        # tema e regras globais
```

- `components/`: peças genéricas e de estrutura, reaproveitáveis em qualquer tela.
- `features/`: tudo que pertence a uma funcionalidade específica.
- `Pages/`: só monta as peças; não tem lógica própria.

## O que já está pronto

**Home**
- Header responsivo, com menu lateral no celular
- Hero
- Como funciona
- Serviços
- Equipe
- Contato, com link para o WhatsApp e mapa
- Rodapé

**Login**
- Formulário com email, senha, "Lembrar de mim" e links para cadastro e recuperação de senha
- Envio controlado pelo React (`handleSubmit` com `preventDefault`), sem recarregar a página
- Campos com `autoComplete` e validação nativa (`type="email"` e `required`)
- Cores e tamanhos alinhados ao tema

## Decisões de projeto

**Tema centralizado**
- As cores ficam nas variáveis do `:root`, no `index.css`: fundo `#141b20`, superfícies `#19212b` e primary em `green-500`.
- Os componentes usam os nomes do tema (`bg-card`, `text-primary`, `text-muted-foreground`), nunca valores fixos.

**Dados da barbearia num arquivo só**
- Ficam em `config/business.js`, usado pelo header, pela seção de contato e pelo rodapé.

**Alinhamento**
- O `Container` (`max-w-7xl mx-auto px-6`) alinha header, seções e rodapé.

**Header por composição**
- Recebe `links` (lista de dados) e `actions` (JSX).
- No celular, os links vão para um menu lateral com o `Sheet`, controlado por estado (`open` + `onOpenChange`).

**Navegação**
- `Link` para outras páginas
- `<a href="#secao">` para seções da mesma página
- `<a target="_blank" rel="noopener noreferrer">` para sites externos

**Desenvolvimento em fatias verticais**
- Cada funcionalidade é feita de ponta a ponta antes de começar a próxima.

## Convenções de código

- Componentes em PascalCase e propriedades em camelCase
- Arrays de dados fixos ficam fora dos componentes
- `key` sempre com `id`
- Tags semânticas (`section`, `ul`/`ol`, `h2`/`h3`)
- Acessibilidade com `alt`, `aria-label`, `aria-hidden` e `title`

## Commits

As mensagens seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/), com escopo quando fizer sentido:

| Tipo | Uso |
| --- | --- |
| `feat` | nova funcionalidade |
| `fix` | correção de bug |
| `refactor` | mudança de código sem nova funcionalidade |
| `style` | ajustes visuais ou de formatação |
| `wip` | trabalho em andamento |

Exemplo: `refactor(auth): ajusta envio e campos do LoginForm`

## Roadmap

1. **Autenticação no front** (em andamento)
   - [x] Ajustes do `LoginForm`
   - [ ] `AuthLayout` com `Outlet`, envolvendo login, cadastro, recuperar e redefinir senha
   - [ ] `EmailField` e `PasswordField` reutilizáveis, com botão de mostrar e ocultar senha
   - [ ] Formulário de cadastro (nome, email, senha e confirmação)
   - [ ] Formulário de recuperar senha
   - [ ] Tela de redefinir senha
   - [ ] Página 404 e `errorElement`
2. **Backend de autenticação**: cadastro, login, logout, solicitar recuperação e redefinir senha
3. **Dados da home** vindos do backend
4. **Agendamento**
5. **Área da barbearia**

## Pendências menores

- [ ] Padronizar as pastas `Pages` e `Routes` em minúsculo
- [ ] Renomear `LoginPages` para `LoginPage`
- [ ] Trocar os valores entre colchetes pelos dados reais da barbearia

## Autor

Alberi Júnior: [@alberijunior30](https://github.com/alberijunior30)