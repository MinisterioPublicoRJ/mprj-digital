import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink, useLocation } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { PARTNERS_CONST } from './partnersData';
import ArrowIcon from '../../utils/ArrowIcon';
import { getPartnerPageData } from '../../api/api';

export default function PartnerPage() {
  const { partnerId, subpageId } = useParams();
  const [formType, setFormType] = useState('');
  const [cards, setCards] = useState(PARTNERS_CONST[0].subpages[0].cards);
  const [page, setPage] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const [cardstTitle, setCardstTitle] = useState('');
  const [partnersList, setPartnersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardsPorPage = 8;
  const location = useLocation();

  const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === partnerId);
  const subpageData = partnerFiltered[0].subpages.filter((subpages) => subpages.id === subpageId);

  useEffect(() => {
    const loadPagePartners = async () => {
      setLoading(true);
      try {
        const response = await getPartnerPageData(partnerId);
        setPartnersList(response.partnersMiniatureArray[0]);
        console.log(response, 'Lugar certo');
      } catch (e) {
        setPartnersList(false);
      } finally {
        setLoading(false);
      }
    };
    loadPagePartners();
  }, [subpageId]);

  useEffect(() => {
    const fetchData = async () => {
      const featuredCards = subpageData[0].cards.filter((infoCards) => (
        infoCards.title
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, '')
          .includes(cardstTitle.toLowerCase())));
      setCards(featuredCards);
      setTotalCards(Math.ceil(featuredCards.length / cardsPorPage));
      setPage(1);
    };
    fetchData();
  }, [subpageId, cardstTitle]);

  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalCards) return;
    setPage(nextPage);
  }
  const lastCard = page * cardsPorPage;
  const firstCard = lastCard - cardsPorPage;
  const currentCards = cards.slice(firstCard, lastCard);

  async function handleSubmit(e) {
    e.preventDefault();
  }

  /* if (loading) {
    return <p>Carregando...</p>;
  } */
  return (
    <>
      <section className="partner-page-section">
        <div
          className="partner-page-header"
          style={{ backgroundImage: `url(${partnerFiltered[0].imgBg})` }}
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
                  to={`/parceiro/${partnerId}/${subpage.id}`}
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
              style={{ backgroundImage: `url(${partnersList})` }}
            />
            <div className="partner-page-featured">
              <h3>Quem Somos ?</h3>
              <p>{partnersList.whoWeAre}</p>
            </div>
          </div>
          <div className="partner-page-right">
            <div className="partner-page-topics-button">
              <div className="partner-page-topics">
                <div>
                  <h3>Nossos pilares</h3>
                  <p>
                    Nossos pilares são aqueles elementos que, ao mesmo tempo, identificam e
                    diferenciam o setor dos demais e são fatores críticos de sucesso, sem os quais
                    seria impossível realizar os trabalhos.
                  </p>
                </div>
              </div>
              {subpageData[0].call === 'Soluções' ? (
                <div className="input-openData-Icon">
                  <input
                    type="text"
                    placeholder="Pesquise sua solução..."
                    value={cardstTitle}
                    onChange={(event) => setCardstTitle(event.target.value)}
                    onFocus={() => setCardstTitle('')}
                    onMouseOver={() => setCardstTitle('')}
                  />
                  <ArrowIcon />
                </div>
              ) : null}
            </div>
            {subpageData[0].call === 'Soluções' ? (
              <>
                <div
                  className={`${
                    subpageData[0].call === 'Soluções'
                      ? 'partner-page-cards-solucoes '
                      : 'partner-page-cards'
                  }`}
                >
                  {currentCards.map((card) => (
                    <div
                      key={card.id}
                      className={`${
                        subpageData[0].call === 'Soluções'
                          ? 'partner-page-cards-next'
                          : 'partner-page-card'`${card.type}`
                      }`}
                      onClick={() => setFormType(card.id)}
                      onKeyDown={() => setFormType(card.id)}
                      aria-hidden="true"
                    >
                      <a target="new" rel="noreferrer" href={card.link}>
                        {card.img && <img src={card.img} alt={card.alt} />}
                      </a>
                      <h4>{card.title}</h4>
                      {card.smalltext && <p>{card.smalltext}</p>}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="partner-page-cards">
                {(subpageData[0].cards || []).map((card) => (
                  <div key={card.id} className={`partner-page-card ${card.type}`}>
                    <div>{card.img && <img src={card.img} alt={card.alt} />}</div>
                    <h4>{partnersList.pilarTitulo1}</h4>
                    <p>{partnersList.pilar1}</p>
                  </div>
                ))}
              </div>
            )}
            {subpageData[0].call === 'Podemos te ajudar?' && (
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
