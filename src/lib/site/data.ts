import hero from '@/assets/modal-site.webp.asset.json';
import windowPhoto from '@/assets/janela-modal.webp.asset.json';
import doorPhoto from '@/assets/porta-modal.webp.asset.json';
import boxPhoto from '@/assets/box-modal.webp.asset.json';
import project1 from '@/assets/modal-header.webp.asset.json';
import project2 from '@/assets/modal-header-2.webp.asset.json';
import project3 from '@/assets/modal-header-3.webp.asset.json';
import project4 from '@/assets/modal-header-4.webp.asset.json';
import project5 from '@/assets/foto-modal-5.webp.asset.json';

export const business = {
  name: 'Modal Esquadrias', legalName: 'Modal Esquadrias Ltda.', cnpj: '35.508.486/0001-58',
  phone: '(11) 93705-3816', tel: '+5511937053816', reviews: 74, rating: 5,
  address: 'Av. Alfredo de Paula, 456 — Jardim Luíza, Franco da Rocha/SP',
  hours: 'Seg a sex · 08:30–17:30 | Sáb · 09:00–12:00',
  instagram: 'https://www.instagram.com/modal.esquadrias/',
  google: 'https://www.google.com/maps/search/?api=1&query=Modal+Esquadrias+Franco+da+Rocha',
  domain: 'https://modalesquadrias.com.br', image: hero.url,
  areas: ['Franco da Rocha', 'Francisco Morato', 'Caieiras', 'Mairiporã', 'Cajamar', 'Várzea Paulista', 'Região Metropolitana de São Paulo'],
};
export const whatsappUrl = (subject?: string) => `https://wa.me/5511937053816?text=${encodeURIComponent(subject ? `Olá! Vim pelo site da Modal Esquadrias e quero um orçamento de ${subject}.` : 'Olá! Encontrei o site da Modal Esquadrias e gostaria de solicitar um orçamento. Poderiam me ajudar?')}`;
export type FAQItem = { q: string; a: string };
export const homeFaq: FAQItem[] = [
  { q: 'Qual o prazo de fabricação e instalação?', a: 'O prazo depende da complexidade do seu projeto e será informado na proposta. Buscamos realizar a fabricação e a instalação no menor tempo possível.' },
  { q: 'Qual é o preço médio de uma esquadria?', a: 'Medidas, modelo, linha de alumínio, vidro e instalação alteram o investimento. Peça um orçamento sob medida, sem compromisso. Faixas de preço: [PREENCHER].' },
  { q: 'A medição na residência é gratuita?', a: 'Sim. A Modal oferece medição gratuita na residência. Entre em contato para combinar a visita e confirmar o atendimento ao seu endereço.' },
  { q: 'Quais são as formas de pagamento?', a: 'Condições e formas de pagamento: [PREENCHER]. Consulte nossa equipe antes de aprovar a proposta.' },
  { q: 'Qual a diferença entre vidro temperado e laminado?', a: 'O temperado recebe tratamento para aumentar sua resistência. O laminado tem camadas unidas por uma película, que ajuda a manter os fragmentos presos quando ocorre uma quebra. A indicação depende do local e dos requisitos de segurança.' },
  { q: 'Qual a diferença entre Suprema, Gold e Reforçada?', a: 'São opções de perfis e sistemas de alumínio. A escolha deve considerar o tamanho do vão, a abertura, o vidro e a exposição ao tempo. Nossa equipe compara as opções na proposta. Especificações de cada linha: [PREENCHER].' },
  { q: 'Como cuidar das esquadrias de alumínio?', a: 'Use pano macio, água e sabão neutro. Evite abrasivos, mantenha os trilhos limpos e siga as orientações de manutenção entregues com o produto.' },
  { q: 'Vocês atendem obras em andamento?', a: 'Atendemos residências, comércios e obras. Informe a etapa da construção para alinharmos a medição e a instalação com o andamento do seu projeto.' },
  { q: 'É possível trocar uma janela antiga na reforma?', a: 'A troca precisa de avaliação do vão e das condições do local. Envie as medidas aproximadas e uma foto para nossa equipe analisar o seu caso.' },
  { q: 'O que cobre a garantia de 3 anos?', a: 'A garantia é de 3 anos por escrito. Coberturas, exclusões e orientações de uso: [PREENCHER]. Solicite os termos completos junto à proposta.' },
];
export const lines = [
  { name: 'Suprema', description: 'Uma das opções para seu projeto sob medida. A indicação depende das medidas e da configuração do vão.' },
  { name: 'Gold', description: 'Outra opção de sistema de alumínio. Compare a abertura, o acabamento e as necessidades do ambiente com nossa equipe.' },
  { name: 'Reforçada', description: 'Consulte a configuração adequada para o seu projeto; o nome da linha não substitui uma avaliação técnica.' },
];
const commonServiceFaq: FAQItem[] = [homeFaq[0], homeFaq[2], homeFaq[3], homeFaq[9]];
export const services = [
  { slug: 'janelas-de-aluminio', title: 'Janelas de alumínio', intro: 'Luz, ventilação e o acabamento certo para cada ambiente. Fabricamos a janela nas medidas do seu vão e instalamos com equipe própria.', image: windowPhoto.url, category: 'Janelas', models: [
    { title: 'De correr', text: 'As folhas deslizam para os lados. Uma alternativa para quem quer abrir a janela sem ocupar espaço para dentro ou para fora.' },
    { title: 'Maxim-ar', text: 'A folha se projeta para fora na abertura. A escolha depende da ventilação desejada e do espaço disponível do lado externo.' },
    { title: 'Camarão', text: 'As folhas se dobram ao abrir. Nossa equipe avalia o vão para definir a configuração adequada.' },
    { title: 'Basculante', text: 'Abre por inclinação, permitindo controlar a ventilação. Consulte as medidas e opções para seu ambiente.' },
  ], faq: [{ q: 'Qual janela funciona melhor para meu ambiente?', a: 'Depende do espaço, da ventilação desejada e do tamanho do vão. Na medição, comparamos os modelos e as linhas disponíveis.' }, ...commonServiceFaq] },
  { slug: 'portas-de-aluminio', title: 'Portas de alumínio', intro: 'Da entrada da casa à integração dos ambientes, portas sob medida com acabamento alinhado ao seu projeto.', image: doorPhoto.url, category: 'Portas', models: [
    { title: 'De correr', text: 'As folhas deslizam em trilhos. Uma opção para passagens e integração de ambientes sem ocupar a área de abertura de uma porta convencional.' },
    { title: 'Pivotante', text: 'A folha gira em um eixo. As dimensões e a instalação precisam ser avaliadas para garantir uma abertura adequada.' },
    { title: 'Social', text: 'Para entradas e acessos do dia a dia. Combinamos medidas, acabamento e configuração conforme o local.' },
  ], faq: [{ q: 'Posso substituir minha porta atual?', a: 'Enviando uma foto e as medidas aproximadas, nossa equipe avalia o vão e combina a visita para verificar a instalação.' }, ...commonServiceFaq] },
  { slug: 'box-para-banheiro', title: 'Box para banheiro', intro: 'Um box feito para as medidas do seu banheiro, com atenção ao espaço de entrada, ao acabamento e à segurança.', image: boxPhoto.url, category: 'Box', models: [
    { title: 'De correr', text: 'O vidro desliza lateralmente, sem precisar de espaço para uma folha abrir para fora.' },
    { title: 'Articulado', text: 'A abertura articulada é avaliada conforme a área do banheiro e o espaço disponível para entrada.' },
    { title: 'Vidros e acabamentos', text: 'Consulte vidro incolor ou fumê e opções de vidro temperado de 8 mm. A configuração final será indicada para seu banheiro.' },
  ], faq: [{ q: 'Qual box escolher para um banheiro pequeno?', a: 'O espaço de entrada e a posição das peças do banheiro são importantes. Envie uma foto para avaliarmos a opção de correr ou articulada.' }, ...commonServiceFaq] },
  { slug: 'guarda-corpo', title: 'Guarda-corpo', intro: 'Soluções sob medida para varandas, escadas e áreas elevadas. A segurança e as condições de fixação orientam cada projeto.', image: project3.url, category: 'Guarda-corpo', models: [
    { title: 'Varandas e sacadas', text: 'A altura, a fixação e a configuração precisam atender aos requisitos do local. Nossa equipe avalia o projeto antes da proposta.' },
    { title: 'Escadas e desníveis', text: 'Fabricamos conforme as medidas e as condições de instalação. Modelos e especificações disponíveis: [PREENCHER].' },
  ], faq: [{ q: 'Como é definida a segurança do guarda-corpo?', a: 'As condições de instalação e os requisitos aplicáveis devem ser avaliados para o projeto. Não basta escolher pelo acabamento ou por uma foto.' }, ...commonServiceFaq] },
  { slug: 'portoes-e-gradis', title: 'Portões e gradis', intro: 'Fechamentos em alumínio para o acesso e a fachada, dimensionados conforme seu espaço e seu uso cotidiano.', image: project2.url, category: 'Portões', models: [
    { title: 'Portões sob medida', text: 'O espaço de abertura, a largura de passagem e o desenho desejado entram na avaliação. Modelos e opções de automação: [PREENCHER].' },
    { title: 'Gradis', text: 'Componha o fechamento com um desenho alinhado ao portão e à fachada. Definimos as medidas após avaliar o local.' },
  ], faq: [{ q: 'Vocês oferecem automação de portões?', a: 'Disponibilidade e condições de automação: [PREENCHER]. Consulte nossa equipe para confirmar o escopo da proposta.' }, ...commonServiceFaq] },
  { slug: 'fachadas-e-coberturas', title: 'Fachadas e coberturas', intro: 'Alumínio sob medida para compor áreas externas e fechamentos. Cada solução começa pela avaliação do espaço e das condições da obra.', image: project1.url, category: 'Fachadas', models: [
    { title: 'Fachadas', text: 'Alinhamos a configuração do fechamento à proposta arquitetônica. Materiais e sistemas disponíveis: [PREENCHER].' },
    { title: 'Coberturas', text: 'O vão, o apoio e o escoamento de água precisam ser considerados. Consulte a equipe para confirmar a solução adequada.' },
  ], faq: [{ q: 'Quais materiais podem ser usados na cobertura?', a: 'Materiais, dimensões e condições de instalação disponíveis: [PREENCHER]. A proposta será definida após a avaliação do projeto.' }, ...commonServiceFaq] },
] as const;
export const cities = [
  { slug: 'franco-da-rocha', name: 'Franco da Rocha', intro: 'A Modal está no Jardim Luíza, em Franco da Rocha. Você pode conversar com nossa equipe na Av. Alfredo de Paula, 456, ou solicitar uma medição na sua residência.', focus: 'Perto de você, do primeiro contato à instalação', detail: 'Para quem está construindo ou reformando na cidade onde fica nossa loja, o atendimento começa com uma conversa sobre os ambientes e as medidas. A fabricação e a instalação são feitas por nossa própria equipe.' },
  { slug: 'caieiras', name: 'Caieiras', intro: 'Atendemos projetos de esquadrias em Caieiras com fabricação sob medida em Franco da Rocha e medição combinada no endereço da obra.', focus: 'Planeje a troca de janelas durante a reforma', detail: 'Se o seu projeto em Caieiras envolve substituir esquadrias antigas, envie fotos dos vãos e informe quais ambientes serão reformados. Assim, podemos avaliar a retirada, a configuração das novas peças e a etapa certa para instalar.' },
  { slug: 'francisco-morato', name: 'Francisco Morato', intro: 'Janelas, portas e box sob medida para seu projeto em Francisco Morato. Nossa equipe combina a visita de medição e apresenta uma proposta para as necessidades de cada ambiente.', focus: 'Cada ambiente pede uma abertura diferente', detail: 'Para a casa em Francisco Morato, compare o espaço ocupado por uma folha de abrir com as opções de correr ou dobrar. Na visita, avaliamos o tamanho do vão e a circulação para ajudar você a escolher.' },
  { slug: 'mairipora', name: 'Mairiporã', intro: 'A Modal atende Mairiporã com esquadrias de alumínio sob medida. Informe o endereço e as condições de acesso para combinarmos a medição e a instalação.', focus: 'A exposição ao tempo faz parte da escolha', detail: 'No seu projeto em Mairiporã, conte se o vão está protegido ou exposto à chuva e ao vento. Essas condições, junto com o tamanho da abertura, precisam entrar na avaliação da linha e do vidro.' },
  { slug: 'cajamar', name: 'Cajamar', intro: 'Atendemos residências, comércios e obras em Cajamar. A proposta considera as medidas, os modelos e a sequência de instalação do seu projeto.', focus: 'Alinhe a instalação ao andamento da obra', detail: 'Para uma construção em Cajamar, informe quais vãos já estão definidos e a previsão das próximas etapas. Nossa equipe combina a medição e registra o prazo na proposta, conforme a complexidade do serviço.' },
] as const;
export const gallery = [
  { src: windowPhoto.url, alt: 'Janela de alumínio instalada pela Modal Esquadrias', category: 'Janelas', width: 1200, height: 1200 },
  { src: doorPhoto.url, alt: 'Porta de alumínio sob medida da Modal Esquadrias', category: 'Portas', width: 1440, height: 1440 },
  { src: boxPhoto.url, alt: 'Box de vidro para banheiro instalado pela Modal Esquadrias', category: 'Box', width: 1200, height: 1600 },
  { src: hero.url, alt: 'Esquadrias pretas em área de piscina, projeto da Modal Esquadrias', category: 'Portas', width: 1600, height: 1200 },
  { src: project5.url, alt: 'Fechamento de fachada com alumínio e vidro da Modal Esquadrias', category: 'Fachadas', width: 809, height: 607 },
  { src: project1.url, alt: 'Fachada com esquadrias sob medida da Modal Esquadrias', category: 'Fachadas', width: 1600, height: 900 },
  { src: project2.url, alt: 'Portão e gradil de alumínio, trabalho da Modal Esquadrias', category: 'Portões', width: 1600, height: 900 },
  { src: project3.url, alt: 'Varanda com guarda-corpo instalado pela Modal Esquadrias', category: 'Guarda-corpo', width: 1200, height: 1600 },
  { src: project4.url, alt: 'Portão de alumínio e guarda-corpo de vidro da Modal Esquadrias', category: 'Portões', width: 1200, height: 1600 },
];
export const allPaths = ['/', ...services.map(s => `/${s.slug}`), ...cities.map(c => `/esquadrias-de-aluminio-${c.slug}`), '/sobre', '/orcamento'];