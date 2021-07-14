/* eslint-disable import/no-cycle */
/* eslint-disable no-shadow */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent } from '../../components';
import Pagination from '../../components/pagination/Pagination';
import { PARTNERS_CONST } from './partnersData';

export default function PartnerPage() {
  const { partnerId, subpageId } = useParams();
  const [formType, setFormType] = useState('');
  const [cards, setCards] = useState(PARTNERS_CONST[0].subpages[0].cards);
  const [page, setPage] = useState(1);
  const [cardsPorPage, setCardsPorPage] = useState(4);
  const [totalCards, setTotalCards] = useState(0);

  const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === partnerId);
  const subpageIdToLoad = subpageId || partnerFiltered[0].subpages[0].id;
  const subpageData = (partnerFiltered[0].subpages || []).filter(
    (subpages) => subpages.id === subpageIdToLoad,
  );
  const featuredTopics = subpageData[0].topics;

  useEffect(() => {
    const fetchData = async () => {
      const featuredCards = subpageData[0].cards;
      console.log(featuredCards);
      setCards(featuredCards);
      setTotalCards(Math.ceil(featuredCards.length / 4));
      setPage(1);
    };
    fetchData();
  }, []);

  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalCards) return;
    setPage(nextPage);
  }
  const lastCard = page * cardsPorPage;
  const firstCard = lastCard - cardsPorPage;
  const currentCards = cards.slice(firstCard, lastCard);

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
          <navbar className="partner-page-navigation">
            {partnerFiltered[0].subpages.map((subpage) => (
              <div key={subpage.id}>
                <NavLink
                  className="partner-page-link"
                  activeClassName="active"
                  to={`/parceiro/${partnerId}/${subpage.id}`}
                >
                  {subpage.call}
                </NavLink>
              </div>
            ))}
          </navbar>
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
            <div className="partner-page-topics">
              {featuredTopics.map((featured) => (
                <div key={featured.id}>
                  <h3>{featured.title2}</h3>
                  <p>{featured.smalltext2}</p>
                </div>
              ))}
            </div>
            {subpageData[0].call === 'Soluções' ? (
              <>
                <div className="partner-page-cards">
                  {currentCards.map((card) => (
                    <div
                      key={card.id}
                      className={`partner-page-card ${card.type}`}
                      onClick={() => setFormType(card.id)}
                      onKeyDown={() => setFormType(card.id)}
                      aria-hidden="true"
                    >
                      <a target="new" href={card.link}>
                        {card.img ? <img src={card.img} alt={card.alt} /> : null}
                      </a>
                      <h4>{card.title}</h4>
                      {card.smalltext ? <p>{card.smalltext}</p> : null}
                    </div>
                  ))}
                </div>
                <Pagination
                  handlePageClick={(page) => handlePageClick(page)}
                  totalPages={totalCards}
                  currentPage={page}
                />
              </>
            ) : (
              <div className="partner-page-cards">
                {(subpageData[0].cards ||  []).map((card) => (
                  <div
                    key={card.id}
                    className={`partner-page-card ${card.type}`}
                    onClick={() => setFormType(card.id)}
                    onKeyDown={() => setFormType(card.id)}
                    aria-hidden="true"
                  >
                    <a target="new" href={card.link}>
                      {card.img ? <img src={card.img} alt={card.alt} /> : null}
                    </a>
                    <h4>{card.title}</h4>
                    {card.smalltext ? <p>{card.smalltext}</p> : null}
                  </div>
                ))}
              </div>
            )}
            {subpageIdToLoad === 'podemos-ajudar' && formType !== '' ? (
              <div className="partner-dynamic-content">
                <h5>No que podemos melhorar</h5>
                <div className="rounded-border-box">
                  <navbar className="partner-page-navigation">
                    <div>
                      <NavLink to="#cidadao">Cidadão</NavLink>
                    </div>
                    <div>
                      <NavLink to="#membro">Membro/Servidor</NavLink>
                    </div>
                  </navbar>
                  <form className="partner-contact-form">
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
                </div>
                <div className="partner-contact-form-action">
                  <button type="button" className="partner-contact-button">
                    enviar
                    {formType}
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
