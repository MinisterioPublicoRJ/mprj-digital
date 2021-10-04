export default function partnersMiniatureTransform(rawData) {
  console.log('data', rawData);
  const { count, results } = rawData;
  return {
    total: count,
    resultado: results,
  };
}
