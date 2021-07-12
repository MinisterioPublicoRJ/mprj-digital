/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent } from '../../components';
import Pagination from '../../components/pagination/Pagination';

import { PARTNERS_CONST } from './partnersData';

export default function PartnerPage() {
  const { partnerId, subpageId } = useParams();
  const [partners, setPartners] = useState(PARTNERS_CONST);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPorPage, setCardsPorPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [formType, setFormType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === partnerId);
      const subpageIdToLoad = subpageId || partnerFiltered[0].subpages[0].id;
      const subpageData = (partnerFiltered[0].subpages || []).filter(
        (subpages) => subpages.id === subpageIdToLoad,
      );
      const featuredCards = partnerFiltered[0].subpages[0].cards;
      setCards(featuredCards);
      setPartners(partners);
      setTotalPages(Math.ceil(featuredCards.length / 2));
      setPage(1);
    };
    fetchData();
  }, []);
  console.log(cards);

  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  }

  return (
    <>
      <section className="partner-page-section">
        <div
          className="partner-page-header"
          style={{ backgroundImage: `url(${partners[0].imgBg})` }}
        >
          <div className="partner-page-title">
            <h1>{partners[0].name}</h1>
            <p>{partners[0].desc}</p>
          </div>
          <navbar className="partner-page-navigation">
            {partners[0].subpages.map((subpage) => (
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
              style={{ backgroundImage: `url(${partners[0].img})` }}
            />
            <div className="partner-page-featured">
              {partners[0].subpages[0].topics.map((featured) => (
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
              {partners[0].subpages[0].topics.map((featured) => (
                <div key={featured.id}>
                  <h3>{featured.title2}</h3>
                  <p>{featured.smalltext2}</p>
                </div>
              ))}
            </div>
            <div className="partner-page-cards">
              {partners[0].subpages[0].cards.map((card) => (
                <div key={card.id} className={`partner-page-card ${card.type}`}>
                  <a target="new" href={card.link}>
                    {card.img ? <img src={card.img} alt={card.alt} /> : null}
                  </a>
                  <h4>{card.title}</h4>
                  {card.smalltext ? <p>{card.smalltext}</p> : null}
                </div>
              ))}
            </div>
            {partners[0].subpages[0].id === 'solucoes' ? (
              <Pagination
                handlePageClick={(page) => handlePageClick(page)}
                totalPages={totalPages}
                currentPage={page}
              />
            ) : null}
            {partners[0] === 'podemos-ajudar' && (
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
