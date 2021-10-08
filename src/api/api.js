import { PRODUCT_COMPONENT_DATA, PARTNER_PAGE_DATA, PRODUCT_PAGE_DATA } from './endpoints';

import { productMiniatureTransform, partnerstMiniatureTransform } from './transforms';

export async function getPartnerPageData(partner) {
  const response = await fetch(PARTNER_PAGE_DATA(partner));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return partnerstMiniatureTransform(result);
}

export async function getProductPageData(product) {
  const response = await fetch(PRODUCT_PAGE_DATA(product));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return result;
}

export async function getProductComponentData(nextPos, extraFilter) {
  const response = await fetch(PRODUCT_COMPONENT_DATA(nextPos, extraFilter));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return productMiniatureTransform(result);
}
