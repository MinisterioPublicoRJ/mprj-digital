/* eslint-disable max-len */
import GADG from '../../assets/logos/gadg.png';
import CSI from '../../assets/logos/csi.png';
import GATE from '../../assets/logos/gate.png';
import INOVA from '../../assets/logos/inova.png';
import SGMP from '../../assets/logos/sgmp.png';
import STIC from '../../assets/logos/stic.png';
import SUBADM from '../../assets/logos/subadm.png';
import SUBPLAN from '../../assets/logos/subplan.png';
import IEP from '../../assets/logos/iep.png';
import BGHome from '../../assets/bg-home-produto.png';

export const PARTNERS_CONST = [
  {
    id: 'gadg',
    img: GADG,
    name: 'GADG',
    imgBg: BGHome,
    desc: 'Gerência de Análise, Diagnósticos e Geoprocessamento',
    subpages: [
      {
        id: 'sobre',
        call: 'Sobre nós',
        topics: [
          {
            id: 'quemSomos',
          },
        ],
        cards: [],
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
        cards: [
          {
            id: 'painelParquetDigital',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'O robô das promotorias, que auxilia na visão, gestão e resolução do acervo.',
            link: '/produto/parquet_digital',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Logo parquet Digital',
          },
          {
            id: 'painelInloco',
            type: 'second',
            background: 'white',
            title: 'In loco',
            smalltext:
              'Mapa interativo com disponibilidade de várias camadas de dados georreferenciados.',
            link: 'http://apps.mprj.mp.br/sistema/inloco/',
            call: 'Conheça a solução >',
            img: '/inLoco.png',
            alt: 'Logo In loco',
          },
          {
            id: 'painelDiagnostico',
            type: 'second',
            background: 'white',
            title: 'Diágnostico de Promotorias',
            smalltext: 'Comparativo de feitos entre promotorias',
            link: 'http://apps.mprj.mp.br/sistema/dgpj/#!/promotoriaDeJustica',
            call: 'Conheça a solução >',
            img: '/diagnostico.png',
            alt: 'Logo Diágnostico de Promotorias',
          },
          {
            id: 'painelLyra',
            type: 'second',
            background: 'white',
            title: 'Lyra',
            smalltext:
              'Inteligencia artificial de leitura de demandas repetitivas no Judiciário, busca de padroes em decisoes e pesquisas especifícas',
            link: 'http://apps.mprj.mp.br/sistema/cadg/',
            call: 'Conheça a solução >',
            img: '/lyra.png',
            alt: 'Logo Lyra',
          },
          {
            id: 'painelPaines',
            type: 'second',
            background: 'white',
            title: 'Painéis',
            smalltext: 'Painéis temáticos e gerenciais diversos.',
            link: 'http://apps.mprj.mp.br/sistema/cadg/',
            call: 'Conheça a solução >',
            img: '/paines.png',
            alt: 'Logo Painéis temáticos',
          },
          {
            id: 'painelMprj+',
            type: 'second',
            background: 'white',
            title: 'Mprj+',
            smalltext: 'Dados e indicadores sociais por matéria.',
            link: 'http://apps.mprj.mp.br/sistema/mprjdigital/',
            call: 'Conheça a solução >',
            img: '/mprj.png',
            alt: 'Logo Mprj+',
          },
          {
            id: 'painelDominio',
            type: 'second',
            background: 'white',
            title: 'Domínio',
            smalltext: 'Listagem de procedimentos, sua mesa e alguns alertas.',
            link: 'http://apps.mprj.mp.br/sistema/dominio/#/',
            call: 'Conheça a solução >',
            img: '/dominio.png',
            alt: 'Logo Domínio',
          },
          {
            id: 'painelPainel',
            type: 'second',
            background: 'white',
            title: 'Painel',
            smalltext: 'Listagem de procedimentos, sua mesa e alguns alertas.',
            link: 'http://apps.mprj.mp.br/sistema/dominio/#/',
            call: 'Conheça a solução >',
            img: '/Painel.png',
            alt: 'Logo Painel ',
          },
        ],
      },

      /* {
        id: 'podemos-ajudar',
        call: 'Podemos te ajudar?',
        topics: [
          {
            id: 'oQueFazemos',
            title: 'Podemos te ajudar?',
            smalltext:
              'Espaço para entrar em contato direto com esta equipe, visando estabelecer o diálogo e melhorar nossa atuação. Adoraríamos receber sugestões, elogios e reclamações que possam nos ajudar no constante aprimoramento de nossas ações e produtos.',
          },
        ],
        cards: [],
      },

      /* {
        id: 'nosso-time',
        call: 'Nosso time',
        topics: [
          {
            id: 'nosso-time',
            title: 'Nosso time',
            smalltext:
              "Lorem  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ],
      }, */
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
