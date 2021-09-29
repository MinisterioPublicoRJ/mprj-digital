import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Link, useLocation } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { PARTNERS_CONST } from './partnersData';
import ArrowIcon from '../../utils/ArrowIcon';

export default function PartnerPage() {
  const { partnerId, subpageId } = useParams();
  const [formType, setFormType] = useState('');
  const [cards, setCards] = useState(PARTNERS_CONST[0].subpages[0].cards);
  const [page, setPage] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const [cardstTitle, setCardstTitle] = useState('');
  const cardsPorPage = 8;
  const location = useLocation();
  console.log(location);

  const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === partnerId);
  const subpageIdToLoad = subpageId || partnerFiltered[0].subpages[0].id;
  const subpageData = (partnerFiltered[0].subpages || []).filter(
    (subpages) => subpages.id === subpageIdToLoad,
  );
  const featuredTopics = subpageData[0].topics;

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

  return (
    <>
      <section className="partner-page-section">
        <div
          className="partner-page-header"
          style={{ backgroundImage: `url(${partnerFiltered[0].imgBg})` }}
        >
          <div className="partner-page-title">
            <h1>{partnerFiltered[0].name}</h1>
            <p>{partnerFiltered[0].desc}</p>
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
              style={{ backgroundImage: `url(${partnerFiltered[0].img})` }}
            />
            <div className="partner-page-featured">
              {featuredTopics.map((featured) => (
                <div key={featured.id}>
                  <h3>{featured.title}</h3>
                  <p>{featured.smalltext}</p>
                  <p>{featured.subsmalltext}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="partner-page-right">
            <div className="partner-page-topics-button">
              <div className="partner-page-topics">
                {featuredTopics.map((featured) => (
                  <div key={featured.id}>
                    <h3>{featured.title2}</h3>
                    <p>{featured.smalltext2}</p>
                  </div>
                ))}
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
                        {card.img ? <img src={card.img} alt={card.alt} /> : null}
                      </a>
                      <h4>{card.title}</h4>
                      {card.smalltext ? <p>{card.smalltext}</p> : null}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="partner-page-cards">
                {(subpageData[0].cards || []).map((card) => (
                  <div key={card.id} className={`partner-page-card ${card.type}`}>
                    <div>{card.img ? <img src={card.img} alt={card.alt} /> : null}</div>
                    <h4>{card.title}</h4>
                    {card.smalltext ? <p>{card.smalltext}</p> : null}
                  </div>
                ))}
              </div>
            )}
            {subpageData[0].call === 'Podemos te ajudar?' ? (
              <div className="partner-page-title">
                <h5>Quer entrar em contato direto conosco? Escreva aqui.</h5>
                <div className="partner-dynamic-content">
                  <navbar className="partner-page-navigation">
                    <div>
                      <Link type="button" to="#cidadao">Cidadão</Link>
                    </div>
                    <div>
                      <Link type="button" to="#membro">Membro/Servidor</Link>
                    </div>
                  </navbar>
                  {location.hash === '#cidadao' ? (
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
                      <div className="inputs-box">
                        <textarea placeholder="No que podemos melhorar?" />
                      </div>
                    </form>
                  ) : (
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
                        <label htmlFor="profissao">
                          Cargo / Setor de atuação
                          <input type="text" id="profissao" name="profissao" />
                        </label>
                        <label htmlFor="profissao">
                          Matrícula ativa
                          <input type="text" id="profissao" name="profissao" />
                        </label>
                      </div>
                      <div className="inputs-box">
                        <textarea placeholder="No que podemos melhorar?" />
                      </div>
                    </form>
                  )}
                  <button type="button" className="partner-contact-button">
                    Enviar mensagem
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <PartnersPageComponent />
    </>
  );
}

PartnerPage.propTypes = {};

PartnerPage.defaultProps = {};
