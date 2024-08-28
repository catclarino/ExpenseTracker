import { GrPowerReset } from 'react-icons/gr';
import { MdAddCard } from 'react-icons/md';
import { Button } from './UniversalButtonStyled';

export const UniversalButton = ({ action, type }) => {
  return (
    <Button onClick={action} type="button">
      {type === 'reset' ? (
        <GrPowerReset className="btnIcon" />
      ) : (
        <MdAddCard className="btnIcon" />
      )}
    </Button>
  );
};
