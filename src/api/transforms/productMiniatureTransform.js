/* eslint-disable camelcase */

export default function productMiniatureTransform(rawData) {
  const { count, results } = rawData;

  const productsArray = results
    .map(
      ({ title, name, product_thumbnail_description, res_name, res_url, ordem_aparecimento }) => {
        let imageSrc = '';
        if (res_url) {
          const thumbnailImgIndex = res_name.indexOf('thumbnail');
          imageSrc = res_url[thumbnailImgIndex];
        }
        return {
          title,
          name,
          imageSrc,
          description: product_thumbnail_description,
          position: ordem_aparecimento,
        };
      },
    )
    .sort((a, b) => a.position - b.position);
  return {
    total: count,
    productsArray,
  };
}
