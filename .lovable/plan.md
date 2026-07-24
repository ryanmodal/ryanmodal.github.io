Atualizar as mensagens padrão enviadas pelo WhatsApp no site da Modal Esquadrias, conforme texto fornecido.

### Alterações previstas

1. **Mensagem do botão de ação do WhatsApp**  
   Atualizar a constante `WHATSAPP` em `src/routes/index.tsx` (linhas 38-40) para usar o novo texto:  
   `Olá! 👋 Encontrei o site da Modal Esquadrias e gostaria de solicitar um orçamento. Poderiam me ajudar?`  
   Como os botões de WhatsApp em "Falar no WhatsApp", rodapé e CTA fixo mobile reutilizam essa constante, todos serão atualizados automaticamente.

2. **Mensagem gerada pelo formulário**  
   Substituir a frase inicial `Olá! Gostaria de solicitar um orçamento.` dentro da função `onSubmit` do componente `QuoteCard` (linhas 393-401) pela mesma mensagem do usuário. Os dados preenchidos no formulário (nome, telefone, endereço, serviço e detalhes) continuam sendo anexados logo em seguida.

3. **Verificação**  
   Rodar o build para garantir que não haja erros de sintaxe ou importação após as alterações.

### Texto final que será aplicado

`Olá! 👋 Encontrei o site da Modal Esquadrias e gostaria de solicitar um orçamento. Poderiam me ajudar?`