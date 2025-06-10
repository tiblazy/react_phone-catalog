type Props = {
  product: {
    image: string;
    name: string;
    price: number;
    fullPrice: number;
  };
};

export const ProductCard = ({ product }: Props) => {
  const showFullPrice = true;

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
        <li className="product-card__specs">
          <p className="product-card__specs--title">Detail</p>
          <p className="product-card__specs--data">detail Info</p>
        </li>

        <li className="product-card__specs">
          <p className="product-card__specs--title">Detail</p>
          <p className="product-card__specs--data">detail Info</p>
        </li>

        <li className="product-card__specs">
          <p className="product-card__specs--title">Detail</p>
          <p className="product-card__specs--data">detail Info</p>
        </li>
      </ul>

      <div className="product-card__buttons">
        <button className="product-card__buttons product-card__buttons--add">
          Add to cart
        </button>
        <button className="product-card__buttons product-card__buttons--fav">
          Fav
        </button>
      </div>
    </div>
  );
};
