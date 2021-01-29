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
    img: CADG,
    desc: 'Coordenadoria de Análise, Diagnósticos e Geografia',
    subpages: [
      {
        id: 'sobre',
        call: 'Sobre nós',
        topics: [
          {
            id: 'quemSomos',
            title: 'Quem somos?',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            featured: true,
          },
          {
            id: 'pilares',
            title: 'Nossos pilares',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            link: '',
            call: '',
            featured: false,
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
            img: CADG,
            alt: 'Img alt',
          },
          {
            id: 'equipe2',
            type: 'first',
            background: 'transparent',
            title: 'Equipe Multidisciplinar',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: '',
            call: '',
            img: CADG,
            alt: 'Img alt',
          },
          {
            id: 'equipe3',
            type: 'first',
            background: 'transparent',
            title: 'Equipe Multidisciplinar',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            link: '',
            call: '',
            img: CADG,
            alt: 'Img alt',
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
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            featured: true,
          },
          {
            id: 'introSolucoes',
            title: 'Soluções',
            smalltext:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
            link: '',
            call: '',
            featured: false,
          },
        ],
        cards: [
          {
            id: 'parquetDigital',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
          {
            id: 'parquetDigital2',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
          {
            id: 'parquetDigital3',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
          {
            id: 'parquetDigital4',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
          {
            id: 'parquetDigital5',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
          {
            id: 'parquetDigital6',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
        ],
      },
      {
        id: 'podemos-ajudar',
        call: 'Podemos te ajudar?',
        topics: [
          {
            id: 'oQueFazemos',
            title: 'O que fazemos para melhorar nossos serviços?',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            featured: true,
          },
          {
            id: 'nosDiga',
            title: 'Nos diga, qual sua...?',
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            link: '',
            call: '',
            featured: false,
          },
        ],
        cards: [
          {
            id: 'sugestao',
            type: 'third',
            background: 'white',
            title: 'Sugestão',
            smalltext: 'No que podemos melhorar pra te ajudar?',
            link: 'openForm()',
            call: '',
            img: CADG,
            alt: 'Img alt',
          },
          {
            id: 'reclamacao',
            type: 'third',
            background: 'white',
            title: 'Reclamação',
            smalltext: 'O que está te deixando insatisfeito ?',
            link: 'openForm()',
            call: '',
            img: CADG,
            alt: 'Img alt',
          },
          {
            id: 'elogios',
            type: 'third',
            background: 'white',
            title: 'Elogios',
            smalltext: 'No que podemos melhorar pra te ajudar?',
            link: 'openForm()',
            call: '',
            img: CADG,
            alt: 'Img alt',
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
            smalltext:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            featured: true,
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
