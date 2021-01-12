import farolBg from '../../assets/ImgsHeader/bg-farol.png';
import mpBg from '../../assets/ImgsHeader/bg-mp.png';
import CLOCK from '../../assets/arrow';
import REPOSITORIO from '../../assets/repositorio';
import SEARCH from '../../assets/search';
import ARROW from '../../assets/clock';
import FAROL from '../../assets/farol';

export const MOCKPRODUTOSHEADER = [
  {
    id: 'farolBg',
    imgBg: farolBg,
    img: REPOSITORIO,
    title1: 'Repositório',
    imgIcon2: SEARCH,
    title2: 'Nome da Base',
    imgIcon3: ARROW,
    title3: 'Qualidade da Base',
    imgIcon4: CLOCK,
    title4: 'Última Atualização',
    color: '#F3A04C',
    background: '#F3A04C',
  },
  {
    id: 'mpBg',
    img: mpBg,
    imgIcon1: FAROL,
    title1: 'Conheça o Farol',
    imgIcon2: SEARCH,
    title2: 'Planilhas',
    imgIcon3: ARROW,
    title3: 'Documentos',
    imgIcon4: CLOCK,
    title4: 'Notas Técnicas',
    color: '#6792FF',
    background: '#6792FF',
  },
];
export default MOCKPRODUTOSHEADER;
