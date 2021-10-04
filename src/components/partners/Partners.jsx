import React from 'react';
import './partners.css';
import GADG from '../../assets/logos/gadg.png';
import CSI from '../../assets/logos/csi.png';
import GATE from '../../assets/logos/gate.png';
import INOVA from '../../assets/logos/inova.png';
import SGMP from '../../assets/logos/sgmp.png';
import STIC from '../../assets/logos/stic.png';
import SUBADM from '../../assets/logos/subadm.png';
import SUBPLAN from '../../assets/logos/subplan.png';
import IEP from '../../assets/logos/iep.png';

export default function Partners() {
  const images = [
    {
      id: 1,
      img: GADG,
      actionLink: '/parceiro/gadg/sobre',
    },
    {
      id: 2,
      img: INOVA,
      actionLink: '',
    },
    {
      id: 3,
      img: CSI,
      actionLink: '',
    },
    {
      id: 4,
      img: GATE,
      actionLink: '',
    },
    {
      id: 5,
      img: SGMP,
      actionLink: '',
    },
    {
      id: 6,
      img: STIC,
      actionLink: '',
    },
    {
      id: 7,
      img: SUBADM,
      actionLink: '',
    },
    {
      id: 8,
      img: SUBPLAN,
      actionLink: '',
    },
    {
      id: 9,
      img: IEP,
      actionLink: '',
    },
  ];
  return (
    <section className="partners-outer" id="parceiros">
      <div className="partners-header">
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
        <div className="partners-itemList">
          {images.map((cards) => (
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
      </div>
    </section>
  );
}
