# Plano: Seção "Antes e Depois" com Slider Arrastável

## Objetivo
Adicionar uma nova seção ao site da Modal Esquadrias onde o visitante pode comparar fotos de "antes" e "depois" de projetos, arrastando uma seta/divisor no meio da imagem. A seção será inserida **depois da galeria de fotos** e mostrará **2 a 4 comparações**.

## O que será construído

1. **Componente reutilizável `BeforeAfterSlider`**
   - Recebe duas imagens: `before` e `after`.
   - Exibe as duas imagens sobrepostas com a mesma dimensão.
   - Uma linha vertical central com uma seta/botão circular serve de controle.
   - O usuário arrasta o controle para a direita (revela o "depois") ou para a esquerda (revela o "antes").
   - Funciona com mouse (desktop) e touch (mobile).
   - Inclui rótulos "Antes" e "Depois" sobre as respectivas metades.

2. **Seção `BeforeAfterSection` na landing page**
   - Inserida entre `<Gallery />` e `<Reviews />`.
   - Título e subtítulo explicativos, mantendo a linguagem do site.
   - Grid responsivo: 1 coluna no mobile, 2 colunas no desktop (acomoda 2–4 comparações de forma clara).
   - Cada comparação usa o componente `BeforeAfterSlider`.

3. **Integração de imagens**
   - O plano considera que o usuário irá anexar as fotos "antes" e "depois" na próxima etapa.
   - As imagens serão enviadas para o CDN via `lovable-assets` e referenciadas em `src/assets/*.asset.json`.
   - O plano prevê espaço para 4 pares: o usuário pode enviar 2, 3 ou 4 pares; os não enviados inicialmente ficam com placeholders ou são removidos no momento da implementação.

4. **Navegação**
   - Adicionar link "Antes e Depois" no menu de navegação do header, entre "Galeria" e "Avaliações".
   - A seção terá `id="antes-depois"` para âncora interna.

5. **Estilo e acessibilidade**
   - Usar as cores e tokens do design atual (azul confiança, bordas arredondadas, sombras sutis).
   - Cursor de resize no controle.
   - Labels semânticos e texto alternativo nas imagens.
   - Manter a responsividade mobile-first.

## Etapas de implementação

1. **Upload das imagens** — após aprovação do plano, o usuário anexa os pares "antes/depois" e o agente os envia para o CDN, criando os arquivos `.asset.json`.
2. **Criar componente** — adicionar `BeforeAfterSlider` em `src/routes/index.tsx` (ou em um novo arquivo auxiliar, se o projeto já tiver um padrão de componentes locais).
3. **Criar seção** — adicionar `BeforeAfterSection` renderizando os 2–4 sliders.
4. **Atualizar menu** — incluir o link "Antes e Depois" no `Header`.
5. **Verificar build** — rodar `bun run build` e, se necessário, ajustar tipos ou responsividade.

## Decisões técnicas

- **Sem bibliotecas externas**: a interação de arrastar é simples o suficiente para ser implementada com eventos nativos de mouse/touch em React, mantendo o bundle leve.
- **Tamanho uniforme**: todas as imagens de comparação serão exibidas com `aspect-ratio` fixo (ex: 4/3) para o slider funcionar corretamente; recomenda-se que o usuário envie pares com aproximadamente a mesma proporção.
- **Estado controlado local**: cada slider controla sua própria posição internamente; não requer backend.

## Pergunta pós-aprovção

Após aprovar este plano, anexe aqui as imagens que deseja usar:
- foto 1 "antes" + foto 1 "depois"
- foto 2 "antes" + foto 2 "depois"
- (opcional) foto 3 e foto 4

Se já tiver nomes ou legendas específicas para cada comparação (ex: "Janela da sala", "Porta da cozinha"), informe para que eu possa usar nos títulos.
