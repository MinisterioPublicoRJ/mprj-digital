export default function partnersMiniatureTransform(rawData) {
  const { count, results } = rawData;
  const partnersMiniatureArray = results
    .filter(({ name }) => name !== 'gadg') // removes our own organization from partners list
    .sort((a, b) => +a.ordem_aparecimento - +b.ordem_aparecimento)
    .map((partner) => {
      let imageSrc;
      if (partner.resources) {
        imageSrc = partner.resources.filter(({ name }) => name.includes('org_logo'))[0].url;
      }
      return {
        id: partner.id,
        name: partner.name,
        hasPage: partner.pilar_3,
        imageSrc,
      };
    });
  return {
    total: count,
    partnersMiniatureArray,
  };
}
