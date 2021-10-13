import CSI from '../../assets/logos/csi.png';
import GATE from '../../assets/logos/gate.png';
import INOVA from '../../assets/logos/inova.png';
import SGMP from '../../assets/logos/sgmp.png';
import STIC from '../../assets/logos/stic.png';
import SUBADM from '../../assets/logos/subadm.png';
import SUBPLAN from '../../assets/logos/subplan.png';
import IEP from '../../assets/logos/iep.png';

export const PARTNERS_CONST = [
  {
    id: 'gadg',
    name: 'GADG',
    subpages: [
      {
        id: 'sobre',
        call: 'Sobre nós',
        topics: [
          {
            id: 'quemSomos',
          },
        ],
      },
      {
        id: 'solucoes',
        call: 'Soluções',
        topics: [
          {
            id: 'comoAjudar',
            title: 'Como elas podem te ajudar?',
          },
        ],
      },

      {
        id: 'podemos-ajudar',
        call: 'Podemos te ajudar?',
        topics: [
          {
            id: 'oQueFazemos',
            title: 'Podemos te ajudar?',
          },
        ],
      },

      {
        id: 'nosso-time',
        call: 'Nosso time',
        topics: [
          {
            id: 'nosso-time',
            title: 'Nosso time',
          },
        ],
      },
    ],
  },
  {
    id: 'csi',
    name: 'CSI',
    img: CSI,
  },
  {
    id: 'gate',
    name: 'GATE',
    img: GATE,
  },
  {
    id: 'inova',
    name: 'INOVA',
    img: INOVA,
  },
  {
    id: 'sgmp',
    name: 'SGMP',
    img: SGMP,
  },
  {
    id: 'stic',
    name: 'STIC',
    img: STIC,
  },
  {
    id: 'subadm',
    name: 'SUBADM',
    img: SUBADM,
  },
  {
    id: 'subplan',
    name: 'SUBPLAN',
    img: SUBPLAN,
  },
  {
    id: 'iep',
    name: 'IEP',
    img: IEP,
  },
];
export { PARTNERS_CONST as default };
