type Props = {
  message: string;
  modifier?: string;
};

export const Typography = ({ message, modifier }: Props) => {
  return <p className={`typography--${modifier}`}>{message}</p>;
};
