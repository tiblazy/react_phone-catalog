/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ProductDto } from '../../dtos/ProductDto';
import { useShoppingContext } from '../../hooks/useShoppingContext';
import { Typography } from '../typography';

type Props = {
  item: ProductDto;
  showFullPrice?: boolean;
};

export const Card = ({ item, showFullPrice = false }: Props) => {
  const { favorites, itemsOnCart, handleAddToCart, handleToggleOnFavs } =
    useShoppingContext();

  return (
    <Link to={`/${item.category}/${item.name}`} className="card">
      <div className="card__image-container">
        <img className="card__image" src={item.image} alt={item.name} />
      </div>

      <div className="card__header">
        <div className="card__title">
          <Typography modifier="card-title" message={item.name} />
        </div>

        <div className="card__prices">
          <p className="card__price">{`$${item.price}`}</p>
          {showFullPrice && (
            <p className="card__price card__price--line-through">
              {`$${item.fullPrice}`}
            </p>
          )}
          {/* <Typography modifier="h3" message={`$${item.fullPrice}`} /> */}
          {/* {showPrices && (
            <Typography modifier="h3" message={`$${item.price}`} />
          )} */}
        </div>
      </div>

      <div>
        <hr className="card__divider" />
      </div>

      <div className="card__specs">
        <div className="card__spec">
          <p className="card__spec--field">Screen</p>
          <p className="card__spec--data">{item.screen}</p>
        </div>

        <div className="card__spec">
          <p className="card__spec--field">Screen</p>
          <p className="card__spec--data">{item.screen}</p>
        </div>

        <div className="card__spec">
          <p className="card__spec--field">Screen</p>
          <p className="card__spec--data">{item.screen}</p>
        </div>
      </div>

      <div className="card__buttons">
        <button
          className={`card__button ${itemsOnCart.find(cart => cart.id === item.id) ? 'card__button--added' : 'card__button--add'}`}
          onClick={() => handleAddToCart(item)}
        >
          {itemsOnCart.find(cart => cart.id === item.id)
            ? 'Added'
            : 'Add to cart'}
        </button>
        <button
          className={`card__button ${favorites.find(favorite => favorite.id === item.id) ? 'card__button--faved' : 'card__button--fav'}`}
          onClick={() => handleToggleOnFavs(item)}
        >
          {favorites.find(favorite => favorite.id === item.id) ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </button>
      </div>
    </Link>
  );
};
