# Vértice Saúde

Landing page em português para uma consultoria de saúde fictícia, construída em React + Vite. Layout responsivo em verde profundo e areia, com navegação acessível, serviços, cases expansíveis e contato comercial demonstrativo.

## Executar

Requer Node.js 22.12+.

```sh
npm ci
npm run dev
```

## Compilar

```sh
npm run build
npm run preview
```

O resultado fica em `dist/`. Os caminhos relativos permitem hospedar em um subdiretório como `/vertice-saude/`.

## GitHub Pages

Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. O workflow `.github/workflows/deploy.yml` compila e publica automaticamente a branch `main`. Também pode ser iniciado manualmente pela aba Actions.

## Conteúdo e personalização

- `src/main.jsx`: textos, serviços, cases e formulário.
- `src/styles.css`: identidade visual e comportamento responsivo.
- `public/hero.png`: imagem de arquitetura gerada por IA para este projeto.
- `public/favicon.svg`: favicon da marca.

O formulário valida os campos no navegador e apenas exibe uma confirmação de simulação. **Não envia nem armazena informações**, não possui backend e não usa localStorage. Antes de usar comercialmente, conecte-o a um serviço real, defina o tratamento de dados e substitua os exemplos por informações verificadas. Não insira dados de pacientes.

A marca, organizações dos cases e métricas são fictícias. O site não oferece atendimento médico. As fontes DM Sans e Manrope são carregadas do Google Fonts, com fontes locais alternativas caso a conexão falhe. Ícones: Lucide.

## Verificação manual

1. Verificar o layout em computador e celular.
2. Usar a navegação e o menu móvel com teclado.
3. Abrir e fechar os detalhes de cada case.
4. Confirmar que campos obrigatórios e e-mail inválido impedem o envio.
5. Preencher dados de teste e confirmar o aviso de simulação sem transmissão.
6. Executar `npm run build` antes de publicar.