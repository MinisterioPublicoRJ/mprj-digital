export default function productPageTransform(rawData) {
  /*  console.log('data.results[0]', rawData.results[0]); */
  const result = rawData.results[0];
  /*   const { count, results } = rawData;
  const productMiniatureArray = results.map((product) => {
    const thumbnailImgIndex = product.res_name.indexOf('thumbnail');
    return {
      title: product.title,
      name: product.name,
      description: product.product_thumbnail_description,
      imageSrc: product.res_url[thumbnailImgIndex],
    };
  }); */
  return {
    subtitle: result.product_page_subtitle,
    description: result.product_page_description,
    title: result.title,
    service: result.service,
    organ: result.organization.title,
    subsection1Title: result.subsection1_title,
    subsection2Title: result.subsection2_title,
    subsection3Title: result.subsection3_title,
    subsection1_description: result.subsection1_description,
    subsection2_description: result.subsection2_description,
    subsection3_description: result.subsection3_description,
  };
}
