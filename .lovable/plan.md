# Plano: Melhorar visual da seção "Antes e Depois" com rótulos dinâmicos

## Objetivo
Deixar a seção "Antes e Depois" mais elegante e profissional, com rótulos que aparecem de acordo com o movimento do slider: quando o usuário arrasta para a esquerda, aparece apenas "Antes"; quando arrasta para a direita, aparece apenas "Depois".

## O que será alterado

1. **Comportamento dos rótulos**
   - Remover a exibição simultânea dos textos "Antes" e "Depois".
   - Mostrar **"Antes"** quando o slider estiver posicionado à esquerda (por exemplo, abaixo de 50%).
   - Mostrar **"Depois"** quando o slider estiver posicionado à direita (por exemplo, acima de 50%).
   - Aplicar transição suave de opacidade para não piscar abruptamente ao arrastar.

2. **Posicionamento inteligente dos rótulos**
   - "Antes" deve aparecer do lado esquerdo da imagem, dentro da área revelada do "antes".
   - "Depois" deve aparecer do lado direito da imagem, dentro da área revelada do "depois".
   - Garantir que o rótulo ativo nunca fique cortado pelo divisor central.

3. **Slider handle redesenhado**
   - Manter o círculo com borda branca, fundo azul (`--cta`) e sombra suave.
   - Adicionar feedback visual no hover/active (leve aumento de escala).
   - Garantir que a linha divisória central tenha boa visibilidade sem roubar a atenção das fotos.

4. **Cartões de comparação mais limpos**
   - Manter bordas arredondadas e sombra suave existente.
   - Ajustar espaçamentos para que o título e o slider fiquem harmoniosos.

5. **Responsividade e acessibilidade**
   - Garantir que os rótulos não fiquem cortados em telas pequenas.
   - Manter a usabilidade por toque (touch) e mouse.
   - Preservar atributos ARIA (`role="slider"`, `aria-valuenow`, etc.).

## Etapas de implementação

1. **Ajustar o componente `BeforeAfterSlider`** em `src/routes/index.tsx`:
   - Adicionar estado lógico para decidir qual rótulo exibir com base em `position`.
   - Posicionar "Antes" e "Depois" dentro das respectivas metades reveladas.
   - Aplicar transição de opacidade para troca suave entre os rótulos.
   - Opcional: manter ambos os rótulos sutilmente visíveis com opacidade reduzida em vez de sumir totalmente, caso o usuário prefira — mas a regra padrão será um rótulo principal por vez.

2. **Ajustar o `BeforeAfterSection`** — revisar espaçamentos e títulos dos cartões, se necessário.

3. **Verificar build** — rodar `bun run build` para garantir que não haja erros de tipo ou estilo.

4. **Verificar visual** — abrir preview para confirmar que o rótulo correto aparece ao arrastar o slider para cada lado.

## Decisões técnicas

- Nenhuma biblioteca externa será adicionada; ajustes serão feitos com Tailwind CSS e estilos inline para a posição dinâmica do slider.
- A lógica de exibição será baseada na porcentagem atual do slider (`position`).
- Tokens de cor do design system serão usados (`bg-primary`, `text-primary-foreground`, `bg-cta`, `text-cta-foreground`) para manter consistência com o tema atual.
