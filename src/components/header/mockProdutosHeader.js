import farolBg from '../../assets/ImgsHeader/bg-farol.png';
import mpBg from '../../assets/ImgsHeader/bg-mp.png';
import parquet from '../../assets/ImgsHeader/bg-parquet.png';
import ARROW from '../../assets/ImgsHeader/arrow.png';
import REPOSITORIO from '../../assets/ImgsHeader/grupo.png';
import SEARCH from '../../assets/ImgsHeader/search.png';
import CLOCK from '../../assets/ImgsHeader/clock.png';
import FAROL from '../../assets/ImgsHeader/farol.png';
import PLANILHA from '../../assets/ImgsHeader/planilhas.png';
import DOCS from '../../assets/ImgsHeader/docs.png';
import ROBOT from '../../assets/ImgsHeader/robot.png';

export const MOCKPRODUTOSHEADER = [
  {
    id: 'MPRJDigital',
    imgBg: mpBg,
    colorBtn: '#6792FF',
    corTitleBtn: '#FFF',
    titleBtn: 'Procurar',
    icon1: REPOSITORIO,
    title1: 'Repositório',
    icon2: SEARCH,
    title2: 'Nome da Base',
    icon3: ARROW,
    title3: 'Qualidade da Base',
    icon4: CLOCK,
    title4: 'Última Atualização',
  },
  {
    id: 'Farol',
    imgBg: farolBg,
    colorBtn: '#F3A04C',
    corTitleBtn: '#FFF',
    titleBtn: 'Procurar',
    icon1: FAROL,
    title1: 'Conheça o Farol',
    icon2: PLANILHA,
    title2: 'Planilhas',
    icon3: DOCS,
    title3: 'Documentos',
    icon4: DOCS,
    title4: 'Notas Técnicas',
  },
  {
    id: 'ParquetDigital',
    imgBg: parquet,
    colorBtn: '#82D4FF',
    corTitleBtn: '#FFF',
    titleBtn: 'Procurar',
    icon1: ROBOT,
    title1: 'Um Robô em cada Promotoria',
    icon2: PLANILHA,
    title2: 'Perfil de Atuação',
    icon3: DOCS,
    title3: 'Documentos',
    icon4: DOCS,
    title4: 'Documentação',
  },
];
export default MOCKPRODUTOSHEADER;
