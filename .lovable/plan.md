## Problema

O emoji 👋 (mão acenando) está codificado corretamente no arquivo (UTF-8 `F0 9F 91 8B`) e passa por `encodeURIComponent` antes de ir para `wa.me`. Ainda assim, em alguns dispositivos (principalmente WhatsApp Web e versões antigas do Android) esse emoji específico, quando recebido via URL pré-preenchida do `wa.me`, é renderizado como um caractere inválido (quadrado/�).

A correção mais confiável é trocar 👋 por um emoji mais compatível com o pré-preenchimento do WhatsApp, ou simplesmente removê-lo.

## Opções

1. **Remover o emoji** — mensagem fica: `Olá! Encontrei o site da Modal Esquadrias e gostaria de solicitar um orçamento. Poderiam me ajudar?`
2. **Trocar por 😊** (rosto sorridente) — bem suportado em todas as plataformas.
3. **Trocar por ✨** ou outro emoji simples e amplamente compatível.

## Alterações previstas (após você escolher)

Aplicar a mesma troca em duas ocorrências no `src/routes/index.tsx`:

- Linha 39 — constante `WHATSAPP_MESSAGE` (usada no botão "Falar no WhatsApp", rodapé e CTA fixo mobile).
- Linha 394 — primeira linha da mensagem gerada pelo formulário no `onSubmit` do `QuoteCard`.

Depois: rodar o build para garantir que nada quebrou.

Qual das opções acima você prefere? (Se não responder, sigo com a opção 2 — 😊.)