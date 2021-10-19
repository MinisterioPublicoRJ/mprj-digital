/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink, useLocation } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { PARTNERS_CONST } from './partnersData';
import ArrowIcon from '../../utils/ArrowIcon';
import { getPartnerPageData, getProductComponentData } from '../../api/api';

export default function PartnerPage() {
  const location = useLocation();
  const cardsPorPage = 8;
  const { partnerName, subpageId } = useParams();
  const [partnersList, setPartnersList] = useState([]);
  const [loading, setLoading] = useState(true);
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

  function handlePageClick() {
    const nextPage = currentPage + 1;
    if (nextPage < 1 || nextPage > totalPages) return;
    setCurrentPage(nextPage);
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
    default:
      titleSubpage = '';
  }

  return loading ? (
    'Carregando...'
  ) : (
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
                <NavLink
                  activeClassName="productPage-navButtons-active"
                  className={` ${
                    partnerFiltered[0].subpages.id
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
              <>
                <div
                  className={`${
                    subpageId === 'solucoes' ? 'partner-page-cards-solucoes ' : 'partner-page-cards'
                  }`}
                >
                  {products.map((card) => (
                    <div
                      key={card.id}
                      className={`${
                        subpageId === 'solucoes'
                          ? 'partner-page-cards-next'
                          : 'partner-page-card'`${card.type}`
                      }`}
                    >
                      <a target="new" rel="noreferrer" href={card.link}>
                        <img src={card.imageSrc} alt={card.alt} />
                      </a>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  ))}
                </div>
                <Pagination
                  handlePageClick={() => handlePageClick()}
                  totalPages={totalPages}
                  currentPage={currentPage}
                />
              </>
            ) : null}
            {subpageId === 'sobre' && (
              <div className="partner-page-cards">
                {partnersList.sectionPilaresArray.map((partner) => (
                  <div key={partner.id} className="partner-page-cards-first">
                    <div>
                      <img src={partner.imgLogoPilar} alt={partner.name} />
                    </div>
                    <h4>{partner.subtitlePilar}</h4>
                    <p>{partner.titlePilar}</p>
                  </div>
                ))}
              </div>
            )}
            {subpageId === 'podemos-ajudar' && (
              <div className="partner-page-title">
                <h5>Quer entrar em contato direto conosco? Escreva aqui.</h5>
                <div className="partner-dynamic-content">
                  <navbar className="partner-page-navigation">
                    <div>
                      <Link
                        style={{ marginLeft: 22 }}
                        to="#cidadao"
                        className={` ${
                          location.hash === '#cidadao' || location.hash === ''
                            ? 'help-navButtons-active'
                            : ''
                        }`}
                      >
                        Cidadão
                        <div />
                      </Link>
                    </div>
                    <div>
                      <Link
                        style={{ marginLeft: -13 }}
                        to="#membro"
                        className={` ${
                          location.hash === '#membro' ? 'help-navButtons-active' : ''
                        }`}
                      >
                        Membro/Servidor
                        <div />
                      </Link>
                    </div>
                  </navbar>
                  <form className="partner-contact-form" onSubmit={handleSubmit}>
                    <div className="inputs-box">
                      <label htmlFor="nome">
                        Nome
                        <input type="text" id="nome" name="nome" />
                      </label>
                      <label htmlFor="email">
                        E-mail
                        <input type="text" id="email" name="email" />
                      </label>
                    </div>
                    <div className="inputs-box">
                      <label htmlFor="dataNascimento">
                        Data de nascimento
                        <input type="text" id="dataNascimento" name="dataNascimento" />
                      </label>
                      <label htmlFor="sexo">
                        Sexo
                        <input type="text" id="sexo" name="sexo" />
                      </label>
                      <label htmlFor="profissao">
                        Profissão / Ocupação
                        <input type="text" id="profissao" name="profissao" />
                      </label>
                    </div>
                    {location.hash === '#membro' && (
                      <>
                        <label htmlFor="profissao">
                          Cargo / Setor de atuação
                          <input type="text" id="profissao" name="profissao" />
                        </label>
                        <label htmlFor="profissao">
                          Matrícula ativa
                          <input type="text" id="profissao" name="profissao" />
                        </label>
                      </>
                    )}
                    <div className="inputs-box">
                      <textarea placeholder="No que podemos melhorar?" />
                    </div>
                  </form>
                  <button type="button" className="partner-contact-button">
                    Enviar mensagem
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <PartnersPageComponent />
    </>
  );
}

PartnerPage.propTypes = {};

PartnerPage.defaultProps = {};
