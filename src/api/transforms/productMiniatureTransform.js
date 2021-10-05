export default function productMiniatureTransform(rawData) {
  const { count, results } = rawData;
  const productMiniatureArray = results.map((product) => {
    const thumbnailImgIndex = product.res_name.indexOf('thumbnail');
    return {
      title: product.title,
      name: product.name,
      description: product.product_thumbnail_description,
      imageSrc: product.res_url[thumbnailImgIndex],
    };
  });
  return {
    total: count,
    productMiniatureArray,
  };
}
