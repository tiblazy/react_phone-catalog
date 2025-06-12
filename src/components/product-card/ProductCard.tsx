import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ProductDTO } from '../../dtos/product-dto';
import { useProducts } from '../../hooks/useProducts';
import { Spec } from '../spec';

type Props = {
  product: ProductDTO;
};

export const ProductCard = ({ product }: Props) => {
  const { cart, fav, handleSetCart, handleToggleFav } = useProducts();
  const showFullPrice = true;

  const specs = {
    Screen: product.screen,
    Capacity: product.capacity,
    RAM: product.ram,
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
        />
      </div>

      <p className="product-card__title">{product.name}</p>
      <div className="product-card__price">
        <p>${product.price}</p>
        {showFullPrice && (
          <p className="product-card__price--through">${product.fullPrice}</p>
        )}
      </div>

      <hr className="product-card__divider" />

      <ul className="product-card__details">
        {Object.entries(specs).map(([title, value]) => (
          <Spec key={title} title={title} value={value} />
        ))}
      </ul>

      <div className="product-card__buttons">
        <button
          className={`${
            cart && cart.find((item: ProductDTO) => item.id === product.id)
              ? 'product-card__buttons--cart product-card__buttons--cart-added'
              : 'product-card__buttons--cart product-card__buttons--cart-add'
          }`}
          onClick={() => handleSetCart(product)}
        >
          {cart && cart.find((item: ProductDTO) => item.id === product.id)
            ? 'Added'
            : 'Add to cart'}
        </button>
        <button
          className="product-card__buttons product-card__buttons--fav"
          onClick={() => handleToggleFav(product)}
        >
          {fav && fav.find((item: ProductDTO) => item.id === product.id) ? (
            <FaHeart className="product-card--faved-icon" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
    </div>
  );
};
