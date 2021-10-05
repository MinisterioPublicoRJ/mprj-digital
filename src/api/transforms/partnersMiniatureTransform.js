export default function partnersMiniatureTransform(rawData) {
  const { count, results } = rawData;

  console.log('data', rawData);
  const partnersMiniatureArray = results.map((partners) => ({
    name: partners.name,
    title: partners.titulo_pagina,
    description: partners.subtitulo_pagina,
    whoWeAre: partners.quem_somos,
    organization: partners.organization,
    pilar1: partners.pilar_1,
    pilar2: partners.pilar_2,
    pilar3: partners.pilar_3,
    pilar4: partners.pilar_3,
    pilarTitulo1: partners.pilar_1_titulo,
    pilarTitulo2: partners.pilar_2_titulo,
    pilarTitulo3: partners.pilar_3_titulo,
    pilarTitulo4: partners.pilar_3_titulo,
  }));
  return {
    total: count,
    partnersMiniatureArray,
  };
}
