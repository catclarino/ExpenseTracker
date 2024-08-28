import { useRef, useState } from 'react';
import { UserSetsFormSelectList } from './UserSetsFormSelectList/UserSetsFormSelectList';
import { Icon } from '../../../../components/Icon/Icon';
import { choseLabel, options } from '../../../../helpers';
import {
  Container,
  Text,
  IconWrapper,
  HiddenInput,
} from './UserSetsFormSelectStyled';

export const UserSetsFormSelect = ({
  register,
  setValue,
  setCurrency,
  currency,
}) => {
  const box = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChose = element => {
    setCurrency(element.value);
    setValue('currency', element.value);
  };

  return (
    <Container ref={box} onClick={handleToggle}>
      <Text>{choseLabel(currency)}</Text>
      <IconWrapper>
        <Icon
          className="Icon"
          name={`${isOpen ? 'chevron-up' : 'chevron-down'}`}
          size={16}
        />
      </IconWrapper>
      {isOpen && (
        <UserSetsFormSelectList
          options={options}
          handleChose={handleChose}
          boxRef={box}
          handleToggle={handleToggle}
        />
      )}
      <HiddenInput {...register('currency')} value={currency} />
    </Container>
  );
};
