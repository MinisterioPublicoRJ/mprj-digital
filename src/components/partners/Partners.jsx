import React from 'react';
import bg from '../../assets/bg-parceiros.png';
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
  return (
    <section className="partners-outer" id="parceiros">
      <img className="" src={bg} alt="CADG" />
      <div className="partners-header">
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
        <div className="partners-itemList">
          <div>
            <a href="/parceiro/cadg">
              <img className="" src={GADG} alt="CADG" />
            </a>
          </div>
          <div>
            <img className="" src={INOVA} alt="INOVA" />
          </div>
          <div>
            <img className="" src={CSI} alt="CSI" />
          </div>
          <div>
            <img className="" src={GATE} alt="GATE" />
          </div>
          <div>
            <img className="" src={SGMP} alt="SGMP" />
          </div>
          <div>
            <img className="" src={STIC} alt="STIC" />
          </div>
          <div>
            <img className="" src={SUBADM} alt="GADG" />
          </div>
          <div>
            <img className="" src={SUBPLAN} alt="CSI" />
          </div>
          <div>
            <img className="" src={IEP} alt="GATE" />
          </div>
        </div>
      </div>
    </section>
  );
}
