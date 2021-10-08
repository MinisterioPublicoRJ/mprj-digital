import { PRODUCT_COMPONENT_DATA, PARTNER_PAGE_DATA, PRODUCT_PAGE_DATA } from './endpoints';

import { productMiniatureTransform, productPageTransform } from './transforms';

// export async function getPartnerPageData(partner) {
//   const res = fetch(PARTNER_PAGE_DATA(partner));
// }

export async function getProductPageData(productName) {
  const response = await fetch(PRODUCT_PAGE_DATA(productName));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return productPageTransform(result);
}

export async function getProductComponentData() {
  const response = await fetch(PRODUCT_COMPONENT_DATA);

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return productMiniatureTransform(result);
}
