import { FaAngleRight } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/capitalize';

type Props = {
  params: string[];
};

export const Breadcrumb = ({ params }: Props) => {
  return (
    <ul className="breadcrumb">
      <li key="home">
        <Link to="/">
          <FiHome className="breadcrumb__icon" />
        </Link>
      </li>

      {params.map((param, index) => {
        const path = '/' + params.slice(0, index + 1).join('/');
        const isCurr = index === params.length - 1;

        return (
          <li className="breadcrumb__item" key={param}>
            <FaAngleRight className="breadcrumb__divider" />
            {isCurr ? (
              <p className="breadcrumb__param--curr">{capitalize(param)}</p>
            ) : (
              <Link to={path}>
                <p className="breadcrumb__param">{capitalize(param)}</p>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};
