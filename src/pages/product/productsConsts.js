import bgFarol from '../../assets/images/bgFarol.png';
import bgParquet from '../../assets/images/bgParquet.png';

const PRODUCTS_CONST = {
  farol: {
    title: 'Farol',
    organ: 'CENPE/MPRJ',
    service: 'Monitoramento das Promotorias de Investigação Penal',
    background: bgFarol,
    header: {
      title: 'Análise da atuação das Promotorias de Justiça do MPRJ à luz da seara criminal',
      subtitle:
        'Ferramenta de gestão construída com o intuito de orientar o processo de tomada de decisão dentro do MPRJ e gerar transparência acerca da atuação ministerial. Nesse painel, são apresentados indicadores estratégicos e análises consistentes da atuação da instituição na área investigativa criminal, com especial ênfase para as Promotorias de Investigação Penal (PIP).',
      icon: '',
    },
    tabs: [
      {
        title: 'Porque?',
        header: 'Motivação da Plataforma',
        text:
          'Essa fase foca em estabelecer um processo de medição das atividades das promotorias da área criminal e tem como produto o desenvolvimento de um relatório de monitoramento, com informações mensais acerca dos trabalhos das promotorias.​',
      },
      {
        title: 'O Farol',
        header: 'Eixo Apoio ao Uso',
        text:
          'Essa fase tem como objetivo incentivar o uso do Relatório de Monitoramento Farol como instrumento de aporte para a tomada de decisão no nível estratégico dentro MRPJ. ​',
      },
      {
        title: 'Dados',
        header: 'Eixo Transparência',
        text:
          'Essa fase tem como intuito aprimorar o diálogo com a sociedade e estruturar um sistema de transparência ativa dos resultados obtidos pelas promotorias.​',
      },
    ],
  },
  parquet_digital: {
    title: 'Parquet Digital',
    organ: 'MP em Mapas',
    service: 'Análise da Atuação das promotorias',
    background: bgParquet,
    header: {
      title: 'Um robô em cada Promotoria, painel dinâmico para subsidiar a atuação dos Promotores',
      subtitle:
        'Afim de subsidiar o máximo desempenho da sua Promotoria e facilitar o seu trabalho, o robô fornece uma ajuda estratégica na observação e gestão do seu acervo e resolução dos seus processos. O robô auxilia o melhor entendimento da rotina de trabalho da Promotoria e otimiza a visualização das demandas com base em alertas, indicativos, metas e acompanhamento funcional.',
      icon: '',
    },
    tabs: [
      {
        title: 'Porque?',
        header: 'Motivação da Plataforma',
        text:
          'O Parquet Digital é uma solução que nasceu do trabalho coletivo de vários profissionais e setores do Ministério Público do Estado do Rio de Janeiro, e propõe uma significativa mudança de paradigma na atuação dos Promotores de Justiça.',
      },
      {
        title: 'O Parquet Digital?',
        header: 'O Painel e o Robô',
        text:
          'Esta ferramenta agrega bastante valor em vários momentos da rotina deste profissional com o propósito de trazer mais inteligência nos processos que podem ser automatizados aumentando assim o poder analítico do operador público da lei.',
      },
      {
        title: 'Os dados',
        header: 'A base das análises',
        text:
          'Esperamos que a forma que a plataforma se expresse reflita diretamente os valores do Ministério Público e toda a grandeza do trabalho realizado pela instituição. Tudo foi pensado e escolhido visando os nosso usuários em primeiro lugar, fornecendo assim um melhor entendimento da sua mesa de trabalho, com um navegação facilitada e entregando o maior valor possível com um produto que agrega informação, estratégia e inteligência baseada em evidências.',
      },
    ],
  },
};

export default PRODUCTS_CONST;
