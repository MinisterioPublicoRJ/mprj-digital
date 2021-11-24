export default function partnersMiniatureTransform(rawData) {
  const { count, results } = rawData;
  const partnersMiniatureArray = results
    .map((partner) => {
      let imageSrc;
      if (partner.resources) {
        imageSrc = partner.resources.filter(({ name }) => name.includes('org_logo'))[0].url;
      }
      return {
        id: partner.id,
        name: partner.name,
        hasPage: partner.quem_somos, // MUDAR CHECAGEM PRA USAR PILAR3
        imageSrc,
      };
    })
    .filter(({ name }) => name !== 'gadg'); // removes our own team from partners list
  return {
    total: count,
    partnersMiniatureArray,
  };
}
