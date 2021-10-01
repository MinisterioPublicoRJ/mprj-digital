import { PARTNER_PAGE_DATA, PRODUCT_PAGE_DATA } from './endpoints';

const fetchConfig = { mode: 'no-cors' };

export async function getPartnerPageData(partner) {
  const res = fetch(PARTNER_PAGE_DATA(partner), fetchConfig);
  console.log(res);
}

export async function getProductPageData(product) {
  const res = await fetch(PRODUCT_PAGE_DATA(product), fetchConfig);
  // const teste = res.blob();
  // console.log('hi', teste);
  // fetch(PRODUCT_PAGE_DATA(product), fetchConfig)
  //   .then((res) => {
  //     const teste = res.json();
  //     console.log('teste', teste);
  //   })
  //   .catch((err) => console.log(err));
  console.log('oi', res);
}
