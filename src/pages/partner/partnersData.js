import CADG from '../../assets/logos/cadg.png';
import CENPE from '../../assets/logos/cenpe.png';
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
    id: 'cadg',
    name: 'CADG',
    desc: 'Coordenadoria de Análise, Diagnósticos e Geografia',
    subpages: [
      {
        id: 'sobre',
        call: 'Sobre nós',
        title: 'Quem somos?',
        topics: [
          {
            id: 'pilares',
            title: 'Nossos pilares',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            link: '',
            call: '',
          },
        ],
        cards: [
          {
            id: 'equipe1',
            type: 'first',
            background: 'transparent',
            title: 'Equipe Multidisciplinar',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: '',
            call: '',
            image: 'people-gear',
          },
        ],
      },
    ],
  },
  {
    id: 'cenpe',
    name: 'CENPE',
    img: CENPE,
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
