/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent, Loading, Error } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { PARTNERS_CONST } from './partnersData';
import ArrowIcon from '../../utils/ArrowIcon';
import { getPartnerPageData, getProductComponentData } from '../../api/api';
import ProductPartnerItem from './productsPartnerItem/ProductPartnerItem';
import FormPartner from './formPartner/FormPartner';
import { ImgAjuda, ImgSolucoes, ImgSobreNos } from '../../assets/verticalText';

export default function PartnerPage() {
  const cardsPorPage = 8;
  const { partnerName, subpageId } = useParams();
  const [partnersList, setPartnersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [cardstTitle, setCardstTitle] = useState('');

  const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === partnerName);

  useEffect(() => {
    const loadPagePartners = async () => {
      setLoading(true);
      try {
        const response = await getPartnerPageData(partnerName);
        setPartnersList(response.partnersMiniatureArray[0]);
      } catch (e) {
        setFailed(true);
        setPartnersList(false);
      } finally {
        setLoading(false);
      }
    };
    loadPagePartners();
  }, [partnerName]);

  async function loadProducts() {
    try {
      const nextPos = (currentPage - 1) * cardsPorPage;
      const orgFilter = `owner_org:${partnersList.id}`;
      const searchFilter = cardstTitle ? `+title:/${cardstTitle}.*/` : '';
      const productFilter = orgFilter + searchFilter;
      const { total, productsArray } = await getProductComponentData(nextPos, productFilter);
      setProducts(productsArray);
      setTotalPages(Math.ceil(total / cardsPorPage));
    } catch (e) {
      setFailed(true);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (partnersList.id) {
      loadProducts();
    }
  }, [currentPage, cardstTitle, partnersList]);

  function handlePageClick(nextPage) {
    setCurrentPage(nextPage);
  }

  let titleSubpage;
  let subtitleSubpage;

  switch (subpageId) {
    case 'sobre':
      titleSubpage = 'Nossos Pilares';
      subtitleSubpage =
        ' Nossos pilares são aqueles elementos que, ao mesmo tempo, identificam e diferenciam o setor dos demais e são fatores críticos de sucesso, sem os quais seria impossível realizar os trabalhos.';
      break;
    case 'solucoes':
      titleSubpage = 'Soluções';
      subtitleSubpage =
        ' Soluções que exigem análise e visualização de dados, principalmente para problemas próprios do MPRJ, mas também para fortalecer a relação de transparência entre poder público (MPRJ e outros órgãos, quando possível) e a sociedade.';
      break;
    case 'equipe':
      titleSubpage = 'Equipe';
      subtitleSubpage =
        'Painéis, estudos, relatórios, sistemas, aplicações e os mais variados formatos de soluções gerados pelos nossos parceiros. Fique à vontade para explorar cada um deles! Se puder nos enviar seu feedback, ficaremos muito felizes em recebê-lo.';
      break;
    default:
      titleSubpage = '';
  }
  return (
    <>
      {loading && !failed && <Loading />}
      {failed && <Error />}
      {!loading && !failed && (
        <>
          <section className="partner-page-section">
            <div
              className="partner-page-header"
              style={{
                backgroundImage: `url(${partnersList.bannerUrl}`,
              }}
            >
              <div className="partner-page-title">
                <h1>{partnersList.title}</h1>
                <p>{partnersList.description}</p>
              </div>
              <div className="partner-page-navigation">
                {partnerFiltered[0].subpages.map((subpage) => (
                  <div key={subpage.id}>
                    {/* In React Router v6, activeClassName will be removed and you should use the
                    function className to apply classnames to either active or
                    inactive NavLink components. */}
                    <NavLink
                      exact
                      activeClassName="productPage-navButtons-active"
                      className={` ${
                        subpage.id === subpageId
                          ? 'productPage-navButtons-active'
                          : 'partner-page-link '
                      }`}
                      to={`/parceiro/${partnerName}/${subpage.id}`}
                    >
                      {subpage.call}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
            <div className="partner-page-content">
              <div className="partner-page-left">
                <div
                  className="partner-page-logo"
                  style={{
                    backgroundImage: `url(${partnersList.logoUrl})`,
                  }}
                />
                <div className="partner-page-featured">
                  <h3>Quem Somos ?</h3>
                  <p>{partnersList.whoWeAre}</p>
                </div>
              </div>
              <div className="partner-page-right">
                <div className="partner-page-topics-button">
                  <div className="partner-page-topics">
                    <h3>{titleSubpage}</h3>
                    <p>{subtitleSubpage}</p>
                  </div>
                  {subpageId === 'solucoes' ? (
                    <div className="input-openData-Icon">
                      <input
                        type="text"
                        placeholder="Pesquise sua solução..."
                        onChange={(event) => setCardstTitle(event.target.value)}
                      />
                      <ArrowIcon />
                    </div>
                  ) : null}
                </div>
                {subpageId === 'solucoes' ? (
                  <div className="partner-page-subpage-Wrapper">
                    <div className="partner-SVG-Solucoes-styling">
                      <ImgSolucoes />
                    </div>
                    <div className="partner-products-wrapper">
                      <ProductPartnerItem products={products} />
                      <Pagination
                        handlePageClick={(page) => handlePageClick(page)}
                        totalPages={totalPages}
                        currentPage={currentPage}
                      />
                    </div>
                  </div>
                ) : null}
                {subpageId === 'sobre' && (
                  <div className="partner-page-subpage-Wrapper">
                    <div className="partner-SVG-sobre-nos-styling">
                      <ImgSobreNos />
                    </div>
                    <div className="partner-page-cards-solucoes">
                      {partnersList.sectionPilaresArray.map((partner) => (
                        <div key={partner.id} className="partner-page-cards-solucoes-first">
                          <div>
                            <img src={partner.imgLogoPilar} alt={partner.name} />
                          </div>
                          <h4>{partner.subtitlePilar}</h4>
                          <p>{partner.titlePilar}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {subpageId === 'equipe' && (
                  <div className="partner-page-subpage-Wrapper">
                    <div className="partner-SVG-sobre-nos-styling">
                      <ImgSobreNos />
                    </div>
                    <div className="partner-page-cards-solucoes">
                      {partnersList.sectionPilaresArray.map((partner) => (
                        <div key={partner.id} className="partner-page-cards-solucoes-first">
                          <div>
                            <img src={partner.imgLogoPilar} alt={partner.name} />
                          </div>
                          <h4>{partner.subtitlePilar}</h4>
                          <p>{partner.titlePilar}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <PartnersPageComponent />
        </>
      )}
    </>
  );
}

PartnerPage.propTypes = {};

PartnerPage.defaultProps = {};
