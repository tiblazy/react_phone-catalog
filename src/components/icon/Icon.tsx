import { ElementType } from 'react';

type Props = {
  IconElement: ElementType;
};

export const Icon = ({ IconElement }: Props) => {
  return <IconElement />;
};
