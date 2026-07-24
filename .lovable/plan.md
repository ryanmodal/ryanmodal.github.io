# Plano: Seção de vídeos na página Projetos Entregues

## Objetivo
Adicionar um carrossel horizontal de 3 vídeos MP4 dentro da seção "Projetos Entregues" (galeria), logo abaixo das fotos, com controles padrão visíveis do navegador.

## Como vai funcionar
- Manter o título, subtítulo e grid de fotos atuais da seção `Gallery`.
- Inserir, abaixo das fotos, uma nova subseção com título "Vídeos dos projetos" e um carrossel horizontal scrollable.
- Cada vídeo será um `<video>` nativo com `controls`, `preload="metadata"`, responsivo e com cantos arredondados.
- Os vídeos serão hospedados no CDN da Lovable via `lovable-assets` (arquivos `.asset.json`), mantendo o repositório leve.

## Passos

1. **Receber os vídeos**
   - Aguardar o usuário anexar 3 arquivos MP4 no chat.

2. **Fazer upload dos vídeos para o CDN**
   - Para cada arquivo, rodar `lovable-assets create --file <caminho> > src/assets/video-<N>.mp4.asset.json`.
   - Remover os arquivos MP4 originais do projeto após o upload.

3. **Criar componente `VideoCarousel` em `src/routes/index.tsx`**
   - Importar os 3 assets no topo do arquivo.
   - Criar um componente interno `VideoCarousel` contendo:
     - um título de subseção;
     - um container com `overflow-x-auto`, `snap-x`, `snap-mandatory` e `scroll-smooth` para o carrossel horizontal;
     - 3 cards de vídeo, cada um ocupando ~85% da largura no mobile e ~480px no desktop;
     - tag `<video>` com `controls`, `muted`, `playsInline`, `preload="metadata"`, `className="w-full rounded-xl"`;
     - descrição breve abaixo de cada vídeo (opcional, se o usuário fornecer).

4. **Inserir o carrossel na seção `Gallery`**
   - Renderizar `<VideoCarousel />` após o fechamento do grid de fotos e ainda dentro do `<section id="galeria">`.

5. **Ajustes de responsividade e acessibilidade**
   - Garantir que o carrossel funcione com toque no mobile e teclado no desktop.
   - Adicionar `aria-label` nos vídeos e descrição textual.

6. **Build e verificação**
   - Rodar `bun run build` para garantir que não haja erros de importação ou tipos.
   - Verificar no preview se o carrossel aparece abaixo das fotos e se os vídeos carregam corretamente.

## Decisões já confirmadas com você
- **Origem**: arquivos MP4 anexados por você (3 vídeos).
- **Localização**: dentro da seção "Projetos Entregues", após as fotos.
- **Layout**: carrossel horizontal scrollable.
- **Comportamento**: controles padrão visíveis (play, pause, volume, progresso).

## Próximo passo
Assim que você anexar os 3 vídeos MP4, implementamos a seção.