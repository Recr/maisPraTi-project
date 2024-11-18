import { useLocation } from 'react-router-dom';
import Item from '../components/Item';
import './RelatoryPage.css';


const Relatory = () => {
  const location = useLocation();
  const items = location.state?.items || [];

  return (
    <div>
      <h1>Relatório</h1>
      {
        items && items.length > 0 ? (
          items.map((item) => <Item key={item.id || Math.random()} item={item} />)
        ) : (
          <p>Nenhuma informação encontrada</p>
        )

      }
    </div>
  );
};

export default Relatory;