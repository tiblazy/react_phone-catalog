import { ChangeEvent } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { capitalize } from '../../utils/capitalize';
import { Typography } from '../typography';

type Props = {
  param: string;
  modifier?: string;
  label: string;
  defaultValue: string | number;
  options: string[];
  setState: (param: string) => void;
};

export const Select = ({
  param,
  modifier,
  label,
  defaultValue,
  options,
  setState,
}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    const value = e.target.value;

    newParams.set(param, value);
    setSearchParams(newParams);
    setState(value);
  };

  return (
    <div className="category__filter">
      <Typography modifier="body" message={label} />
      <div className={`select__container select__container--${modifier}`}>
        <select defaultValue={defaultValue} onChange={handleOnChange}>
          {options.map(opt => (
            <option key={opt} value={opt}>
              {capitalize(opt)}
            </option>
          ))}
        </select>
        <div className="select-icon">
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};
