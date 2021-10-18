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
      arrayImgs: partners.resources,
      imageSrc,
      logoUrl: partners.resources?.find((image) => image.name === 'org_logo')?.url,
      bannerUrl: partners.resources?.find((image) => image.name === 'org_banner')?.url,
      subsectionsArray: [
        {
          titlePilar: partners.pilar_1,
          subtitlePilar: partners.pilar_1_titulo,
          imgLogoPilar: imageSrc?.find((image) => image.name === 'img_pilar_1')?.url,
        },
        {
          titlePilar: partners.pilar_2,
          subtitlePilar: partners.pilar_2_titulo,
          imgLogoPilar: imageSrc?.find((image) => image.name === 'img_pilar_2')?.url,
        },
        {
          titlePilar: partners.pilar_3,
          subtitlePilar: partners.pilar_3_titulo,
          imgLogoPilar: imageSrc?.find((image) => image.name === 'img_pilar_3')?.url,
        },
        {
          titlePilar: partners.pilar_4,
          subtitlePilar: partners.pilar_4_titulo,
          imgLogoPilar: imageSrc?.find((image) => image.name === 'img_pilar_4')?.url,
        },
      ],
    };
  });
  return {
    total: count,
    partnersMiniatureArray,
  };
}
