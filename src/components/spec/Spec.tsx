type Props = {
  title: string;
  value: string | number;
};

export const Spec = ({ title, value }: Props) => {
  return (
    <li className="product-card__specs">
      <p className="product-card__specs--title">{title}</p>
      <p className="product-card__specs--data">{value}</p>
    </li>
  );
};
