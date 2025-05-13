import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/breadcrumb';
import { Card } from '../components/card';
import { Pagination } from '../components/pagination';
import { Select } from '../components/select';
import { Typography } from '../components/typography';
import { ProductDto } from '../dtos/ProductDto';
import { useProductsContext } from '../hooks/useProductsContext';
import { capitalize } from '../utils/capitalize';

export const CategoryPage = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useProductsContext();

  const [perPage, setPerPage] = useState<string>(
    () => searchParams.get('perPage') || 'all',
  );

  const [sortBy, setSortBy] = useState<string>(
    () => searchParams.get('sortBy') || 'newest',
  );

  const [categoryProducts, setCategoryProducts] = useState<ProductDto[]>(() =>
    products
      .filter(product => product.category === category)
      .sort((a, b) => {
        if (sortBy === 'cheapest') {
          return a.fullPrice - b.fullPrice;
        }

        if (sortBy === 'alphabetically') {
          return a.name.localeCompare(b.name);
        }

        return b.year - a.year;
      }),
  );

  const [page, setPage] = useState<string>(
    () => searchParams.get('page') || '1',
  );

  const totalPages = Math.ceil(categoryProducts.length / +perPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const start = (+page || 1 - 1) * +perPage;
  const end = start + +perPage;

  useEffect(() => {
    setPerPage('all');
    setSortBy('newest');
    setPage('1');

    const newParams = new URLSearchParams();

    newParams.set('perPage', 'all');
    newParams.set('sortBy', 'newest');
    newParams.set('page', '1');
    setSearchParams(newParams);
  }, [category]);

  useEffect(() => {
    setCategoryProducts(
      products
        .filter(product => product.category === category)
        .sort((a, b) => {
          if (sortBy === 'cheapest') {
            return a.fullPrice - b.fullPrice;
          }

          if (sortBy === 'alphabetically') {
            return a.name.localeCompare(b.name);
          }

          return b.year - a.year;
        }),
    );
  }, [category, sortBy, perPage]);

  useEffect(() => {
    const handleOnSortByChange = () => {
      const sortedProducts = [...categoryProducts];

      if (sortBy === 'newest') {
        sortedProducts.sort((a, b) => b.year - a.year);
      }

      if (sortBy === 'alphabetically') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sortBy === 'cheapest') {
        sortedProducts.sort((a, b) => a.fullPrice - b.fullPrice);
      }

      setCategoryProducts(sortedProducts);
    };

    handleOnSortByChange();
  }, [sortBy]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (perPage === 'all') {
      newParams.set('page', '1');
      setSearchParams(searchParams.get('page') || '1');
    }

    setPage(searchParams.get('page')!);
  }, [perPage]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('page', page);
    setSearchParams(newParams);
  }, [page]);

  useEffect(() => {
    const currentPage = searchParams.get('page') || '1';

    setPage(currentPage);
  }, [searchParams.get('page')]);

  return (
    <div className="page-wrapper">
      <Breadcrumb params={[category!]} />

      <Typography
        modifier="h1"
        message={
          category === 'phones' ? 'Mobile phones' : capitalize(category!)
        }
      />

      <div className="category__filters">
        <Select
          modifier="sort-by"
          param="sortBy"
          defaultValue={sortBy || 'newest'}
          label="Sort by"
          options={['newest', 'alphabetically', 'cheapest']}
          setState={setSortBy}
        />

        <Select
          modifier="items-on-page"
          param="perPage"
          defaultValue={perPage || 'all'}
          label="Items on page"
          options={['4', '8', '16', 'all']}
          setState={setPerPage}
        />
      </div>

      <ul className="outlet">
        {perPage === 'all'
          ? categoryProducts.map(product => (
              <li className="outlet__card" key={product.id}>
                <Card item={product} showFullPrice={true} />
              </li>
            ))
          : categoryProducts.slice(start, end).map(product => (
              <li className="outlet__card" key={product.id}>
                <Card item={product} showFullPrice={true} />
              </li>
            ))}
      </ul>

      {perPage !== 'all' && <Pagination pages={pages} currPage={+page} />}
    </div>
  );
};
