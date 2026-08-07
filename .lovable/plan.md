# Plano: Melhorar visual da seção "Antes e Depois"

## Objetivo
Deixar a seção "Antes e Depois" mais elegante e profissional, garantindo que os rótulos "Antes" e "Depois" permaneçam sempre visíveis — independentemente da posição do slider.

## O que será alterado

1. **Rótulos fixos e elegantes**
   - Manter os textos "Antes" e "Depois" sempre visíveis em ambos os lados do slider.
   - Posicionar os rótulos fora da área de recorte (`clip-path`) para que nunca sumam ao arrastar.
   - Aplicar estilo com fundo semitransparente, bordas arredondadas e tipografia consistente com o resto do site (tokens `--primary`, `--cta`, `--foreground`).

2. **Slider handle redesenhado**
   - Trocar o ícone simples por um controle mais visível: círculo com borda branca, fundo azul (`--cta`) e sombra suave.
   - Adicionar feedback visual no hover/active (leve aumento de escala).
   - Garantir que a linha divisória central tenha boa visibilidade sem roubar a atenção das fotos.

3. **Cartões de comparação mais limpos**
   - Manter bordas arredondadas e sombra suave existente.
   - Ajustar espaçamentos para que o título e o slider fiquem harmoniosos.
   - Opcional: adicionar uma legenda sutil embaixo de cada imagem (ex: "Antes" e "Depois") caso os rótulos superiores não fiquem claros o suficiente.

4. **Responsividade e acessibilidade**
   - Garantir que os rótulos não fiquem cortados em telas pequenas.
   - Manter a usabilidade por toque (touch) e mouse.
   - Preservar atributos ARIA (`role="slider"`, `aria-valuenow`, etc.).

## Etapas de implementação

1. **Capturar o estado atual** — já lido; o componente `BeforeAfterSlider` está em `src/routes/index.tsx` (linhas ~634-746).
2. **Ajustar o componente `BeforeAfterSlider`** — reposicionar rótulos para fora da área recortada, estilizar com tokens do design system, melhorar o handle.
3. **Ajustar o `BeforeAfterSection`** — revisar espaçamentos e títulos dos cartões, se necessário.
4. **Verificar build** — rodar `bun run build` para garantir que não haja erros de tipo ou estilo.
5. **Verificar visual** — abrir preview para confirmar que "Antes" e "Depois" permanecem visíveis em qualquer posição do slider.

## Decisões técnicas

- Nenhuma biblioteca externa será adicionada; ajustes serão feitos com Tailwind CSS e estilos inline para a posição dinâmica do slider.
- Os rótulos serão renderizados fora do `clip-path` para garantir visibilidade permanente.
- Tokens de cor do design system serão usados (`bg-primary`, `text-primary-foreground`, `bg-cta`, `text-cta-foreground`) para manter consistência com o tema atual.
