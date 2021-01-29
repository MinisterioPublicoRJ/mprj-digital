import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PartnerPage.css';
import { Partners } from '../../components';

import { PARTNERS_CONST } from './partnersData';

export default function PartnerPage() {
  const { partnerId, subpageId } = useParams();
  const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === partnerId);
  const subpageData = (partnerFiltered[0].subpages || []).filter(
    (subpages) => subpages.id === subpageId,
  );
  const featuredTopics = (subpageData[0].topics || []).filter((topics) => topics.featured === true);
  const defaultTopics = (subpageData[0].topics || []).filter((topics) => topics.featured === false);

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
        <div className="partner-page-header">
          <div className="partner-page-title">
            <h1>{partnerFiltered[0].name}</h1>
            <p>{partnerFiltered[0].desc}</p>
          </div>
          <navbar className="partner-page-navigation">
            {partnerFiltered[0].subpages.map((subpage) => (
              <div key={subpage.id}>
                <a className="partner-page-navigation-link" href={subpage.id}>
                  {subpage.call}
                </a>
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
                  <p className="">{featured.smalltext}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="partner-page-right">
            <div className="partner-page-topics">
              {defaultTopics.map((topic, i) => (
                <div key={topic.id}>
                  <h3>{topic.title}</h3>
                  <p>{topic.smalltext}</p>
                </div>
              ))}
            </div>
            <div className="partner-page-cards">
              {(subpageData[0].cards || []).map((card) => (
                <div key={card.id} className={`partner-page-card ${card.type}`}>
                  {card.img ? <img src={card.img} alt={card.alt} /> : null}
                  <h4>{card.title}</h4>
                  {card.smalltext ? <p>{card.smalltext}</p> : null}
                  {card.link ? (
                    <div>
                      <a href={card.link}>{card.call}</a>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}

PartnerPage.propTypes = {};

PartnerPage.defaultProps = {};
