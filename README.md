# Magazord Frontend Test

[Projeto em produção](https://magazord-frontend-test-murex.vercel.app)

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Desafios e Soluções](#desafios-e-soluções)
- [Arquitetura](#arquitetura)

---

## 🚀 Tecnologias

### Core
- **React 19.1.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.9.3** - Superset tipado do JavaScript
- **Vite 7.1.7** - Build tool e dev server

### Estado e Data Fetching
- **React Query (TanStack Query) 5.90.2** - Gerenciamento de server state
- **Zustand 5.0.8** - Gerenciamento de client state (filtros)
- **Axios 1.12.2** - Cliente HTTP para API requests

### UI/Styling
- **TailwindCSS 4.1.14** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis (Accordion, Select, Tabs)
- **Lucide React** - Ícones SVG otimizados

### Code Quality
- **Biome 2.2.5** - Linter e formatter moderno
- **TypeScript** - Type checking

---

## 📦 Instalação

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (ou **pnpm**/**yarn**)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/joaovictor09/magazord-frontend-test.git
   cd magazord-frontend-test
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn
   ```

3. **(Opcional) Configure o GitHub Token**
   
   Para evitar rate limiting da API do GitHub, crie um arquivo `.env` na raiz do projeto:
   
   ```env
   VITE_GITHUB_TOKEN=seu_github_token_aqui
   ```
   
   **Como gerar o token:**
   - Acesse: https://github.com/settings/tokens
   - Clique em "Generate new token (classic)"
   - Selecione scopes: `public_repo`, `read:user`
   - Copie o token gerado
   
   ⚠️ **Sem token:** 60 requisições/hora  
   ✅ **Com token:** 5000 requisições/hora

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   
   A aplicação estará disponível em `http://localhost:5173`

---

## 🎮 Uso

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Compila para produção (pasta dist/)
npm run preview      # Preview da build de produção

# Code Quality
npm run lint      # Verifica linting e formatação
npm run lint:fix  # Fix linting e formatação
npm run format    # Formata o código
```

### Estrutura de Pastas

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI reutilizáveis
│   ├── profile.tsx     # Componente de perfil
│   └── repositories.tsx
├── hooks/              # Custom hooks
│   ├── use-repositories.ts
│   └── use-filtered-repositories.ts
├── queries/            # React Query hooks
│   └── github/
│       ├── use-get-user.ts
│       ├── use-get-repositories.ts
│       └── use-get-starred-repositories.ts
├── services/           # Camada de serviços (API)
│   └── github-service.ts
├── storage/            # Gerenciamento de estado (Zustand)
│   └── filters-storage.ts
├── types/              # TypeScript types/interfaces
│   └── github-service-types.ts
├── errors/             # Classes de erro customizadas
│   └── github-api-error.ts
├── lib/                # Configurações de bibliotecas
│   ├── axios.ts        # Configuração do Axios
│   └── react-query.ts  # Configuração do React Query
├── app.tsx             # Componente principal
└── main.tsx            # Entry point
```

---

## 🛠️ Desafios e Soluções

### 1. **Paginação da API do GitHub**

**Desafio:** A API do GitHub retorna apenas 30 itens por página, e usuários podem ter centenas de repositórios.

**Solução Implementada:**
- Sistema de paginação automática que segue o header `Link` da resposta
- Busca até 100 itens por página (`per_page=100`)
- Loop que continua até não haver mais páginas (`rel="next"`)
- Tratamento de URLs relativas e absolutas do link header

**Motivação:**
- Minha ideia inicial era implementar um infinite scroll, mas a API do GitHub não fornece diretamente o total de repositórios nem o total de repositórios curtidos (starred), o que dificultaria essa abordagem. Por isso, optei por carregar todos os repositórios de uma vez, garantindo que os filtros funcionem instantaneamente no client.

```typescript
// Exemplo simplificado
while (pagesRemaining) {
  const response = await api.get(url, { params: { per_page: 100 } });
  data.push(...response.data);
  
  const linkHeader = response.headers.link;
  pagesRemaining = linkHeader?.includes(`rel="next"`);
  // ... extrai próxima URL
}
```

**Resultado:** Aplicação busca TODOS os repositórios de uma vez, permitindo filtros client-side instantâneos.

---

### 2. **Rate Limiting do GitHub API**

**Desafio:** 
- Sem autenticação: 60 requisições/hora
- Com token: 5000 requisições/hora
- Usuários podem atingir o limite facilmente (atingi em poucos minutos 😂)

**Solução Implementada:**
- Suporte a GitHub token via variável de ambiente
- Tratamento específico para erro 403 (rate limit)
- Mensagem clara ao usuário quando limite é atingido
- Cache do React Query (5 minutos) para evitar requisições desnecessárias

```typescript
if (status === 403 && remaining === "0") {
  const resetDate = new Date(resetTime * 1000);
  throw new GithubApiError(
    `Rate limit exceeded. Resets at ${resetDate.toLocaleTimeString()}`
  );
}
```

---

### 3. **Error Handling Robusto**

**Desafio:** Múltiplos pontos de falha (network, API, dados inválidos)

**Solução Implementada:**
- Classe de erro customizada (`GithubApiError`)
- Tratamento específico por status code (404, 403, 500+, timeout)
- Estados de UI para cada tipo de erro
- Botão de retry em todos os erros
- Timeout de 15 segundos em todas as requisições

```typescript
export class GithubApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
  }
}
```

---

### 4. **UX em Estados Diversos**

**Desafio:** Usuário precisa de feedback claro em todos os estados da aplicação.

**Solução Implementada:**
- **Loading:** Skeleton screens com animação
- **Error:** Mensagem clara + botão de retry
- **Empty:** Estado vazio com mensagem amigável
- **Success:** Dados renderizados normalmente

**Componentes criados:**
- `<RepositoryCardLoading />` - Skeleton do card
- `<ErrorMessage />` - Erro com retry
- `<EmptyState />` - Estado vazio genérico
- `<ProfileLoading />` - Skeleton do perfil

---

## 🏗️ Arquitetura

### Padrões Utilizados

1. **Separation of Concerns**
   - Camada de apresentação (components)
   - Camada de lógica de negócio (hooks)
   - Camada de dados (services)

2. **Custom Hooks**
   - Lógica reutilizável encapsulada
   - Testável independentemente
   - Single Responsibility Principle

3. **Singleton Pattern**
   - Instância única do `GithubService`
   - Evita múltiplas instâncias desnecessárias

4. **Error First Design**
   - Todos os fluxos consideram erros
   - Errors são first-class citizens
   - UX preparado para falhas

---

## 👤 Autor

**João Victor da Silva**

- GitHub: [@joaovictor09](https://github.com/joaovictor09)

---

## 🙏 Agradecimentos

- [Magazord](https://magazord.com.br) pela oportunidade do desafio técnico

---

<div align="center">
  
**Feito com ❤️ e ☕ por João Victor**

</div>

