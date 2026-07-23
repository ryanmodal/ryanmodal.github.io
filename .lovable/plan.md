Remover o primeiro item do FAQ "Vocês fazem medição gratuita?" de `src/routes/index.tsx`.

A seção FAQ é renderizada a partir de um array de objetos dentro da função `FAQ`. O item selecionado é o primeiro elemento desse array (índice 0). O plano é apagar esse objeto do array, mantendo os demais itens e a estrutura do componente intactos.

Arquivo afetado: `src/routes/index.tsx` (linhas ~642-645).