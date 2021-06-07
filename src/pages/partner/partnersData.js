/* eslint-disable max-len */
import GADG from '../../assets/logos/gadg.png';
import CENPE from '../../assets/logos/cenpe.png';
import CSI from '../../assets/logos/csi.png';
import GATE from '../../assets/logos/gate.png';
import INOVA from '../../assets/logos/inova.png';
import SGMP from '../../assets/logos/sgmp.png';
import STIC from '../../assets/logos/stic.png';
import SUBADM from '../../assets/logos/subadm.png';
import SUBPLAN from '../../assets/logos/subplan.png';
import IEP from '../../assets/logos/iep.png';
import BGHome from '../../assets/bg-home-produto.png';

import GEAR from '../../assets/gearIcon.svg';
import BIGDATA from '../../assets/bigDataIcon.svg';
import DATASCIENCE from '../../assets/dataScienceIcon.svg';
import GEOTAG from '../../assets/geoReferenceIcon.svg';

export const PARTNERS_CONST = [
  {
    id: 'cadg',
    name: 'GADG',
    img: GADG,
    imgBg: BGHome,
    desc: 'Gerência de Análise, Diagnósticos e Geografia',
    subpages: [
      {
        id: 'sobre',
        call: 'Sobre nós',
        topics: [
          {
            id: 'quemSomos',
            title: 'Quem somos?',
            smalltext:
              'A Coordenadoria de Análises, Diagnósticos e Geoprocessamento (CADG) é o setor do MPRJ responsável por trabalhos com ciência de dados. O setor se destaca por ter equipe multidisciplinar e aplicar técnicas de design na compreensão de problemas e desenho de soluções adequadas a eles, além de empreender análises estatísticas e apontar impactos territoriais/geográficos dos dados.',
            subsmalltext:
              'A equipe é responsável pela plataforma MPRJ em Mapas e todas as ferramentas, sistemas e aplicações ali concentradas. O foco de seu trabalho é entregar soluções que exigem análise e visualização de dados, principalmente para problemas próprios do MPRJ, mas também para fortalecer a relação de transparência entre poder público (MPRJ e outros órgãos, quando possível) e a sociedade.',
            title2: 'Nossos pilares',
            smalltext2:
              'Nossos pilares são aqueles elementos que, ao mesmo tempo, identificam e diferenciam o setor dos demais e são fatores críticos de sucesso, sem os quais seria impossível realizar os trabalhos.',
          },
        ],
        cards: [
          {
            id: 'equipe-multidisciplinar',
            type: 'first',
            background: 'transparent',
            title: 'Equipe Multidisciplinar',
            smalltext:
              'Uma equipe com profissionais de vários ramos do conhecimento permite a entrega de soluções de maior valor. A diversidade da equipe auxilia desde a melhor identificação do problema até a elaboração da melhor visualização final.',
            link: '',
            call: '',
            img: GEAR,
            alt: 'Img alt',
          },
          {
            id: 'big-data',
            type: 'first',
            background: 'transparent',
            title: 'Big Data',
            smalltext:
              'Para realizar as análises e chegar às soluções, trabalhamos com grandes quantidades de dados, que vêm tanto de bases internas do MPRJ quanto de parceiros externos e definem o valor das soluções. Para trabalhar isso tudo, utilizamos uma infraestrutura consistente.',
            link: '',
            call: '',
            img: BIGDATA,
            alt: 'Img bigdata',
          },
          {
            id: 'ciencia-de-dados',
            type: 'first',
            background: 'transparent',
            title: 'Ciência de Dados',
            smalltext:
              'Mais do que ter dados, aplicamos análises que extraem inteligência deles. O objetivo é conseguir descrever cenários e hipóteses e entregar visualizações de fácil compreensão.',
            link: '',
            call: '',
            img: DATASCIENCE,
            alt: 'Img datascience',
          },
          {
            id: 'georreferenciamento',
            type: 'first',
            background: 'transparent',
            title: 'Georreferenciamento',
            smalltext:
              'Além de análises de dados que descrevem cenários situados no tempo, um pilar da GADG  é identificá-los no espaço. Por isso, desde os primeiros trabalhos, a CADG é conhecida por se valer de recursos geográficos.',
            link: '',
            call: '',
            img: GEOTAG,
            alt: 'Img geotag',
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
              'Para membros e servidores do MPRJ, aqui estarão soluções que se valem de análises de dados para responder problemas concretos enfrentados pela instituição nas atividades meio e fim, com foco em resolução mais rápida, mais qualificada ou ambos.',
            subsmalltext:
              'Para visitantes externos, aqui podem ser encontradas não só algumas ferramentas de trabalho do MPRJ e uma prestação de contas do setor para a sociedade (o que temos feito com o dinheiro público), mas também recursos digitais e bases de dados que fortalecem a transparência efetiva e podem indicar aos cidadãos quais são os cenários e problemas enfrentados no Estado do Rio de Janeiro.',
            title2: 'Soluções',
            smalltext2:
              'Soluções que exigem análise e visualização de dados, principalmente para problemas próprios do MPRJ, mas também para fortalecer a relação de transparência entre poder público (MPRJ e outros órgãos, quando possível) e a sociedade.',
          },
        ],
        cards: [
          {
            id: 'parquetDigital',
            type: 'second',
            background: 'white',
            title: 'Parquet Digital',
            smalltext:
              'O robô das promotorias, que auxilia na visão, gestão e resolução do acervo.',
            link: 'https://parquetdigital.mprj.mp.br/',
            call: 'Conheça a solução >',
            img: '/Parquet_Digital.png',
            alt: 'Img alt',
          },
          {
            id: 'painel2',
            type: 'second',
            background: 'white',
            title: 'In loco',
            smalltext:
              'Mapa interativo com disponibilidade de várias camadas de dados georreferenciados.',
            link: '#',
            call: 'Conheça a solução >',
            img: '/inLoco.png',
            alt: 'Img alt',
          },
          {
            id: 'painel3',
            type: 'second',
            background: 'white',
            title: 'Diágnostico de Promotorias',
            smalltext: 'Comparativo de feitos entre promotorias',
            link: '#',
            call: 'Conheça a solução >',
            img: '/diagnostico.png',
            alt: 'Img alt',
          },
          {
            id: 'painel4',
            type: 'second',
            background: 'white',
            title: 'Lyra',
            smalltext:
              'Inteligencia artificial de leitura de demandas repetitivas no Judiciário, busca de padroes em decisoes e pesquisas especifícas',
            link: '#',
            call: 'Conheça a solução >',
            img: '/lyra.png',
            alt: 'Img alt',
          },
          {
            id: 'painel5',
            type: 'second',
            background: 'white',
            title: 'Painéis',
            smalltext: 'Painéis temáticos e gerenciais diversos.',
            link: '#',
            call: 'Conheça a solução >',
            img: '/paines.png',
            alt: 'Img alt',
          },
          {
            id: 'painel6',
            type: 'second',
            background: 'white',
            title: 'Mprj+',
            smalltext: 'Dados e indicadores sociais por matéria.',
            link: '#',
            call: 'Conheça a solução >',
            img: '/mprj.png',
            alt: 'Img alt',
          },
          {
            id: 'painel7',
            type: 'second',
            background: 'white',
            title: 'Domínio',
            smalltext: 'Listagem de procedimentos, sua mesa e alguns alertas.',
            link: '#',
            call: 'Conheça a solução >',
            img: '/dominio.png',
            alt: 'Img alt',
          },
          {
            id: 'painel8',
            type: 'second',
            background: 'white',
            title: 'Painel',
            smalltext: 'Listagem de procedimentos, sua mesa e alguns alertas.',
            link: '#',
            call: 'Conheça a solução >',
            img: '/painel.png',
            alt: 'Img alt',
          },
        ],
      },
      /* {
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
            link: '',
            call: '',
            action: 'openForm()',
            img: CADG,
            alt: 'Img alt',
          },
          {
            id: 'reclamacao',
            type: 'third',
            background: 'white',
            title: 'Reclamação',
            smalltext: 'O que está te deixando insatisfeito ?',
            link: '',
            call: '',
            action: 'openForm()',
            img: CADG,
            alt: 'Img alt',
          },
          {
            id: 'elogios',
            type: 'third',
            background: 'white',
            title: 'Elogios',
            smalltext: 'No que podemos melhorar pra te ajudar?',
            link: '',
            call: '',
            action: 'openForm()',
            img: CADG,
            alt: 'Img alt',
          },
        ],
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
            featured: true,
          },
        ],
      }, */
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
