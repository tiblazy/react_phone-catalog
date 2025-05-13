import { useSearchParams } from 'react-router-dom';

type Props = {
  pages: number[];
  currPage: number;
};

export const Pagination = ({ pages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnPageChange = (data: number) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('page', String(data));
    setSearchParams(newParams);
  };

  return (
    <ul className="pagination">
      {pages.map((page: number) => (
        <li key={page}>
          <button onClick={() => handleOnPageChange(page)}>{page}</button>
        </li>
      ))}
    </ul>
  );
};
