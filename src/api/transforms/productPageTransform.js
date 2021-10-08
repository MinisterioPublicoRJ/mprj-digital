export default function productPageTransform(rawData) {
  const result = rawData.results[0];
  const answer = result ? {
    subtitle: result.product_page_subtitle,
    description: result.product_page_description,
    title: result.title,
    service: result.service,
    organ: result.organization.title,
    url: result.product_url,
    bannerUrl: result.resources?.find(
      (image) => image.name === 'product_banner',
    )?.url,
    icon: result.resources?.find(
      (image) => image.name === 'product_icon',
    )?.url,
    subsectionsArray: [
      {
        subsectionTitle: result.subsection1_title,
        subsectionDescription: result.subsection1_description,
        imgUrl: result.resources?.find(
          (image) => image.name === 'subsection_1',
        )?.url,
      },
      {
        subsectionTitle: result.subsection2_title,
        subsectionDescription: result.subsection2_description,
        imgUrl: result.resources?.find(
          (image) => image.name === 'subsection_2',
        )?.url,
      },
      {
        subsectionTitle: result.subsection3_title,
        subsectionDescription: result.subsection3_description,
        imgUrl: result.resources?.find(
          (image) => image.name === 'subsection_2',
        )?.url,
      },
    ],
  } : null;
  return answer;
}
