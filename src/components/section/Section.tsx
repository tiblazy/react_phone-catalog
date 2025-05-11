/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
  modifier?: string;
};

export const Section = ({ modifier, children }: Props) => {
  return (
    <section className={`section section--${modifier}`}>{children}</section>
  );
};
