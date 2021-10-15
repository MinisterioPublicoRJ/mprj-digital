export default function partnersPageTransform(rawData) {
  const { count, results } = rawData;
  const partnersMiniatureArray = results.map((partners) => {
    let imageSrc;
    if (partners.resources) {
      const sourceslImgs = partners.resources.splice(2, Number.MAX_VALUE);
      imageSrc = sourceslImgs;
    }
    return {
      id: partners.organization?.id,
      name: partners.name,
      title: partners.titulo_pagina,
      description: partners.subtitulo_pagina,
      whoWeAre: partners.quem_somos,
      pilar1: partners.pilar_1,
      pilar2: partners.pilar_2,
      pilar3: partners.pilar_3,
      pilar4: partners.pilar_4,
      pilarTitulo1: partners.pilar_1_titulo,
      pilarTitulo2: partners.pilar_2_titulo,
      pilarTitulo3: partners.pilar_3_titulo,
      pilarTitulo4: partners.pilar_4_titulo,
      arrayImgs: partners.resources,
      imageSrc,
      logoUrl: partners.resources?.find((image) => image.name === 'org_logo')?.url,
      bannerUrl: partners.resources?.find((image) => image.name === 'org_banner')?.url,
    };
  });
  return {
    total: count,
    partnersMiniatureArray,
  };
}
