## Plano: Substituir 4 imagens da galeria

As 4 imagens selecionadas correspondem aos slots `fotoModal1`, `fotoModal2`, `fotoModal3` e `fotoModal4` da galeria em `src/routes/index.tsx`. Vou substituí-las pelas 4 fotos anexadas.

### Passos
1. Fazer upload das 4 imagens anexadas para o CDN via `lovable-assets create`, gerando:
   - `src/assets/modal-header.jpg.asset.json` (foto azul com janelas brancas)
   - `src/assets/modal-header-2.jpg.asset.json` (casa branca com telhado e palmeiras)
   - `src/assets/modal-header-3.jpg.asset.json` (casa cinza com guarda-corpo de alumínio)
   - `src/assets/modal-header-4.jpg.asset.json` (casa moderna com portão preto)
2. Em `src/routes/index.tsx`:
   - Trocar os 4 imports `fotoModal1..4` pelos novos assets.
   - Atualizar os `alt` de cada item da galeria para descrever as novas fotos.
3. Rodar `bun run build` para validar.

### Mapeamento
- `fotoModal1` → `modal-header.jpg` (fachada azul com janelas de alumínio branco)
- `fotoModal2` → `modal-header-2.jpg` (residência com portão e gradil de alumínio)
- `fotoModal3` → `modal-header-3.jpg` (guarda-corpo e esquadrias em varanda)
- `fotoModal4` → `modal-header-4.jpg` (portão de alumínio preto + guarda-corpo de vidro)

Confirma que posso prosseguir?