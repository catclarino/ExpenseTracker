import { useEffect } from 'react';
import { Menu, ListItem, MenuItem } from './UserSetsFormSelectListStyled';

export const UserSetsFormSelectList = ({
  options,
  handleChose,
  boxRef,
  handleToggle,
}) => {
  useEffect(() => {
    const handleCloseList = e => {
      if (e.target.closest('div') !== boxRef.current) {
        handleToggle();
      }
    };
    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, [boxRef, handleToggle]);

  return (
    <Menu>
      {options.map(element => (
        <ListItem key={element.value} onClick={() => handleChose(element)}>
          <MenuItem>{element.label}</MenuItem>
        </ListItem>
      ))}
    </Menu>
  );
};
