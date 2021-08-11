import bgFarol from '../../assets/images/bgFarol.png';
import bgParquet from '../../assets/images/bgParquet.png';
import imgParquet from '../../assets/images/imgParquet.png';
import ParquetIcon from '../../assets/svg/parquetIcon';
import imgFarol from '../../assets/images/imgFarol.png';
import FarolIcon from '../../assets/svg/farolIcon';
import imgRobo from '../../assets/images/imgRobo.png';
import imgSuaMesa from '../../assets/images/imgSuaMesa.png';
import imgVaras from '../../assets/images/imgVarasCriminais.png';
import imgDiagnostico from '../../assets/images/imgDiagnostico.png';

const PRODUCTS_CONST = {
  farol: {
    title: 'Farol',
    organ: 'GADG/MPRJ',
    background: bgFarol,
    service: 'Monitoramento das Promotorias de Investigação Penal',
    header: {
      title: 'Análise da atuação das Promotorias de Justiça do MPRJ à luz da seara criminal',
      subtitle:
        'Ferramenta de gestão construída com o intuito de orientar o processo de tomada de decisão dentro do MPRJ e gerar transparência acerca da atuação ministerial. Nesse painel, são apresentados indicadores estratégicos e análises consistentes da atuação da instituição na área investigativa criminal, com especial ênfase para as Promotorias de Investigação Penal (PIP).',
      icon: FarolIcon,
    },
    subpages: [
      {
        id: 'MPRJ-Digital',
        titleBtn: 'MPRJ Digital',
      },
      {
        id: 'CEMPE',
        titleBtn: 'GADG',
      },
      {
        id: 'FAROL',
        titleBtn: 'Farol',
      },
    ],
    tabs: [
      {
        id: 'Farol',
        textBtn: 'Acessar Farol',
        url: 'https://j.mp/cadernoierbbfarol',
        imgUrl: imgVaras,
        header: 'Por que?',
        subtitle: 'Por que?',
        text:
          'Fomentar a gestão comparada a partir da construção de indicadores é buscar por maior capacidade de resposta do MPRJ. O Farol permite olhar o mesmo parâmetro em diferentes unidades do MPRJ e sinalizar o que pode ser aprimorado. Estabelecer a medição e o acompanhamento das atividades ministeriais, incentivando uma atuação resolutiva por meio do emprego de evidências científicas nas tomadas de decisão é algo inédito entre os Ministérios Públicos do Brasil. ',
      },
      {
        id: 'Transparencia',
        textBtn: 'Acessar Farol',
        url: 'https://j.mp/cadernoierbbfarol',
        imgUrl: imgFarol,
        header: 'O Farol',
        subtitle: 'O Farol',
        text:
          'O Farol procura lançar luz sobre as Promotorias e preconiza a transparência ativa a fim de aprimorar a comunicação do MPRJ com a sociedade. Dentre seus produtos está o Relatório de Gestão, no qual encontram-se estatísticas como taxas de denúncia e de arquivamento pelo MPRJ, bem como a evolução dos indicadores ao longo do tempo, permitindo compará-los entre comarca, área de atribuição e Promotorias.',
      },
      {
        id: 'Diagnostico',
        textBtn: 'Acessar Farol',
        url: 'https://j.mp/cadernoierbbfarol',
        imgUrl: imgDiagnostico,
        header: 'Dados',
        subtitle: 'Dados',
        text: 'Acesse os dados do Farol.​',
      },
    ],
  },
  parquet_digital: {
    title: 'Parquet Digital',
    subId: 'Farol',
    organ: 'GADG',
    service: 'Análise da Atuação das promotorias',
    background: bgParquet,
    header: {
      title: 'Um robô em cada Promotoria, painel dinâmico para subsidiar a atuação dos Promotores',
      subtitle:
        'Afim de subsidiar o máximo desempenho da sua Promotoria e facilitar o seu trabalho, o robô fornece uma ajuda estratégica na observação e gestão do seu acervo e resolução dos seus processos. O robô auxilia o melhor entendimento da rotina de trabalho da Promotoria e otimiza a visualização das demandas com base em alertas, indicativos, metas e acompanhamento funcional.',
      icon: ParquetIcon,
    },
    subpages: [
      {
        id: 'MPRJ-Digital',
        titleBtn: 'MPRJ Digital',
      },
      {
        id: 'CEMPE',
        titleBtn: 'GADG',
      },
      {
        id: 'FAROL',
        titleBtn: 'Farol',
      },
    ],
    tabs: [
      {
        id: 'ParquetDigital',
        textBtn: 'Acessar o Parquet Digital',
        url: 'https://parquetdigital.mprj.mp.br/#/login',
        imgUrl: imgParquet,
        header: 'Motivação da Plataforma',
        subtitle: 'Por que?',
        text:
          'O Parquet Digital é uma solução que nasceu do trabalho coletivo de vários profissionais e setores do Ministério Público do Estado do Rio de Janeiro, e propõe uma significativa mudança de paradigma na atuação dos Promotores de Justiça.',
      },
      {
        id: 'Robo',
        textBtn: 'Acessar o Parquet Digital',
        url: 'https://parquetdigital.mprj.mp.br/#/login',
        imgUrl: imgRobo,
        header: 'O Painel e o Robô',
        subtitle: 'O Parquet Digital',
        text:
          'Esta ferramenta agrega bastante valor em vários momentos da rotina deste profissional com o propósito de trazer mais inteligência nos processos que podem ser automatizados aumentando assim o poder analítico do operador público da lei.',
      },
      {
        id: 'Dados',
        textBtn: 'Acessar o Parquet Digital',
        url: 'https://parquetdigital.mprj.mp.br/#/login',
        imgUrl: imgSuaMesa,
        header: 'A base das análises',
        subtitle: 'Os Dados',
        text:
          'Esperamos que a forma que a plataforma se expresse reflita diretamente os valores do Ministério Público e toda a grandeza do trabalho realizado pela instituição. Tudo foi pensado e escolhido visando os nosso usuários em primeiro lugar, fornecendo assim um melhor entendimento da sua mesa de trabalho, com um navegação facilitada e entregando o maior valor possível com um produto que agrega informação, estratégia e inteligência baseada em evidências.',
      },
    ],
  },
};
export default PRODUCTS_CONST;
