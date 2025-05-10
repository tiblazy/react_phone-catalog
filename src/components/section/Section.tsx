import { ReactNode } from 'react';
import { Typography } from '../typography';

type Props = {
  title: string;
  children: ReactNode;
  modifier?: string;
};

export const Section = ({ title, modifier, children }: Props) => {
  return (
    <section className={`section--${modifier}`}>
      <Typography modifier="h2" message={title} />
      {children}
    </section>
  );
};
