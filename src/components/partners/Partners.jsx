import React, { useState, useEffect } from 'react';
import './partners.css';
import { Link } from 'react-router-dom';
import { getPartnertComponentData } from '../../api/api';
import PARTNERS_DATA_CONST from './partnersDataComponent';

export default function Partners() {
  const [partnersList, setPartnersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPagePartners = async () => {
      setLoading(true);
      try {
        const response = await getPartnertComponentData();
        setPartnersList(response);
      } catch (e) {
        setPartnersList(false);
      } finally {
        setLoading(false);
      }
    };
    loadPagePartners();
  }, []);

  return (
    <section className="partners-outer" id="parceiros">
      <div className="partners-header">
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
        <>
          {loading ? (
            'Carregando...'
          ) : (
            <div className="partners-itemList">
              {/* {partnersList.map((partner) => (
                <Link
                  key={partner.name}
                  target="new"
                  rel="noreferrer"
                  to={`/parceiro/${partner.name}/sobre`}
                >
                  <img src={partner.resources[0].url} alt={partner.title} />
                </Link>
              ))} */}
              {PARTNERS_DATA_CONST.map((cards) => (
                <div key={cards.id}>
                  <a
                    className={`${cards.actionLink === '' ? 'cards-action-link-active' : ''}`}
                    target="new"
                    rel="noreferrer"
                    href={cards.actionLink}
                  >
                    <img src={cards.img} alt={cards.img} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </section>
  );
}
