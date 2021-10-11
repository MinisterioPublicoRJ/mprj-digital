import {
  PRODUCT_COMPONENT_DATA,
  PARTNER_PAGE_DATA,
  PARTNER_COMPONENT_DATA,
  PRODUCT_PAGE_DATA,
  PRODUCT_NAVBAR_DATA,
  PARTNER_NAVBAR_DATA,
} from './endpoints';

import {
  productMiniatureTransform,
  partnerstPageTransform,
  productPageTransform,
  partnersMiniatureTransform,
} from './transforms';

export async function getPartnerPageData(partner) {
  const response = await fetch(PARTNER_PAGE_DATA(partner));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return partnerstPageTransform(result);
}
export async function getPartnertComponentData(partner) {
  const response = await fetch(PARTNER_COMPONENT_DATA(partner));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return partnersMiniatureTransform(result);
}

export async function getProductPageData(productName) {
  const response = await fetch(PRODUCT_PAGE_DATA(productName));

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return productPageTransform(result);
}

export async function getProductNavbarData() {
  const response = await fetch(PRODUCT_NAVBAR_DATA);

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return result.results;
}

export async function getPartnerNavbarData() {
  const response = await fetch(PARTNER_NAVBAR_DATA);

  // with async/await + fetch, failed 400 status don't throw errors
  if (!response.ok) {
    throw new Error(`A chamada falhou com status ${response.status}`);
  }

  const { result } = await response.json();
  return result.results;
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
