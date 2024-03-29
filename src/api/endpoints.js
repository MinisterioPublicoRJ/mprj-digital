const BASE_URL = 'https://d-ckan.mprj.mp.br/api/3/action/package_search';
export const FORM_API = process.env.REACT_APP_FORM_API;

// gadg
export const PARTNER_PAGE_DATA = (partnerName) => `${BASE_URL}?q=type:paginaparceiro&fq=name:${partnerName}`;

export const PARTNER_COMPONENT_DATA = `${BASE_URL}?q=type:paginaparceiro`;
// export const PARTNER_COMPONENT_DATA = `${BASE_URL}
// ?q=type:paginaparceiro&fl=name,id,extras_quem_somos,extras_org_logo,resources`;

// parquet-digital
// https://d-ckan.mprj.mp.br/api/3/action/package_search?q=type:produtos&rows=1&start=1&fl=id,name,extras_product_thumbnail_description
export const PRODUCT_PAGE_DATA = (productName) => `${BASE_URL}?q=type:produtos&fq=name:${productName}`;
//

// https://d-ckan.mprj.mp.br/api/3/action/package_search?q=type:produtos&fl=id,name,res_name,res_url,res_format,extras_product_thumbnail_description

export const PRODUCT_COMPONENT_DATA = (nextPos, extraFilters) => `${BASE_URL}?q=type:produtos&start=${nextPos}&fq=${extraFilters}&fl=title,name,res_name,res_url,res_format,extras_product_thumbnail_description,extras_ordem_aparecimento&facet.limit=8&rows=8&sort=extras_ordem_aparecimento asc`;

export const PRODUCT_NAVBAR_DATA = `${BASE_URL}?q=type:produtos&fl=name,title&sort=extras_ordem_aparecimento asc&facet.limit=10&rows=10`;

// export const PARTNER_NAVBAR_DATA = `${BASE_URL}?q=type:paginaparceiro&fl=name,title`;
