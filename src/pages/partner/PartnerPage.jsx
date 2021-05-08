import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './PartnerPage.css';
import { PartnersPageComponent } from '../../components';

import PARTNERS_CONST2 from './partnersData2';

export default function PartnerPage() {
  const { partnerId, subpageId } = useParams();
  const [formType, setFormType] = useState('');
  const { name, imgBg, desc, subpages, img } = PARTNERS_CONST2[partnerId];

  function openForm() {
    console.log('Opened Form');
  }

  const createLink = ({ url, action }) => {
    if (url) {
      window.open(url);
      return;
    }
    action();
  };

  return (
    <>
      <section className="partner-page-section">
        <div className="partner-page-header" style={{ backgroundImage: `url(${imgBg})` }}>
          <div className="partner-page-title">
            <h1>{name}</h1>
            <p>{desc}</p>
          </div>
          <navbar className="partner-page-navigation">
            {subpages.map((subpage) => (
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
            <div className="partner-page-logo" style={{ backgroundImage: `url(${img})` }} />
            <div className="partner-page-featured">
              {subpages[0].topics.map((topic) => (
                <div key={topic.id}>
                  <h3>{topic.title}</h3>
                  <p>{topic.maintext}</p>
                  <p>{topic.smalltext}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="partner-page-right">
            <div className="partner-page-topics">
              {subpages[0].subtopics.map((subtopic) => (
                <div key={subtopic.id}>
                  <h3>{subtopic.title}</h3>
                  <p>{subtopic.smalltext}</p>
                </div>
              ))}
            </div>
            <div className="partner-page-cards">
              {(subpages[0].cards || []).map((card) => (
                <div
                  key={card.id}
                  className={`partner-page-card ${card.type}`}
                  onClick={() => setFormType(card.id)}
                  onKeyDown={() => setFormType(card.id)}
                  aria-hidden="true"
                >
                  {card.img ? <img src={card.img} alt={card.alt} /> : null}
                  <h4>{card.title}</h4>
                  {card.smalltext ? <p>{card.smalltext}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PartnersPageComponent />
    </>
  );
}

PartnerPage.propTypes = {};

PartnerPage.defaultProps = {};
