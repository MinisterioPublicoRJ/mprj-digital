import React from 'react';
import './Mprj.css';

export default function Mprj() {
  return (
    <div className="mprjDigital-outer">
      <h1 className="title"> MPRJ Digital </h1>
      <p>
        Solução colaborativa do MPRJ para centralizar a exibição e disponibilização de suas soluções
        digitais e promover a Transparência Efetiva, visando, ao mesmo tempo, subsidiar a atividade
        de membros e servidores do MPRJ em suas atividades e estabelecer relações virtuosas com
        outras organizações e o empoderamento da sociedade civil em uma plataforma unificada de
        conhecimento.
      </p>
      <div className="mprjDigital-moreInfo">
        <div className="mprjDigital-itemOuter">
          <h6> Por quê? </h6>
          <p>
            Porque ainda que já existam iniciativas de transparência ativa (portal da transparência)
            e passiva (requisições via Lei de Acesso à Informação), há espaço para um terceiro
            espaço, que promova não só a transparência a nível de disponibilizar informações, mas
            também de auxiliar a entendê-las, especialmente com relação à filosofia de construir o
            Ministério Público do futuro, pautado por atuação científica e estratégica, auxiliada
            pelos recursos tecnológicos desenvolvidos nos últimos anos.
          </p>
        </div>
        <div className="mprjDigital-itemOuter">
          <h6> Como? </h6>
          <p>
            Por meio da disponibilização de acesso a produtos que servem de subsídio à atuação
            ministerial em um espaço centralizado, facilitando o acesso. Além disso, são fornecidas
            explicações sobre sua construção, funcionamento e funções, de modo a tornar o menu de
            ferramentas acessível a todos e todas. Por último, mas não menos importantes, são
            fornecidas as bases de dados (que não têm algum nível de proteção legal ou sigilo) e
            componentes de código que deram forma aos recursos tecnológicos, permitindo que sejam
            auditados, replicados, questionados e melhorados por agentes externos, criando ambiente
            de transparência e cooperação com quem desejar o mesmo.
          </p>
        </div>
        <div className="mprjDigital-itemOuter">
          <h6> Baseado em quê? </h6>
          <p>
            Nos valores de governos abertos: transparência, integridade, participação popular e
            tecnologias e inovação, além de avançar com a ideia de transparência ao nível de
            transparência efetiva, capaz de não só mostrar, mas também auxiliar a entender o que os
            dados e informações querem dizer. A plataforma se baseia totalmente no valor dos dados,
            essenciais para se falar em governos abertos, além de foco no usuário para promover a
            necessária efetividade.
          </p>
        </div>
      </div>
      {/*

        <div className="why">
          <img width={68} height={68} alt="Porque?" src="/." />
          <div className="text">
            <p className="title"> Porque? </p>
            <p> Transparência, participação popular, ACCOUNTABILITY e tecnologia e inovações</p>
          </div>
        </div>

        <div className="how">
          <img width={68} height={68} alt="Como?" src="/." />
          <div className="text">
            <p className="title"> Como? </p>
            <p>
              O produto não é o mais importante. É a ponte do valor dos Dados e a materialização da
              nossa função pública
            </p>
          </div>
        </div>

        <div className="based">
          <img width={68} height={68} alt="Baseado em que?" src="/." />
          <div className="text">
            <p className="title"> Baseado no que? </p>
            <p> O valor dos dados! Não há governos abertos sem dados. Não há produto sem dados e</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
