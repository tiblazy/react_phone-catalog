import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/breadcrumb';

export const ProductPage = () => {
  const { category, name } = useParams();

  return (
    <div>
      <Breadcrumb params={[category!, name!]} />
    </div>
  );
};
