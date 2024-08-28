import { UserSetsCard } from './UserSetsCard/UserSetsCard';
import { UserSetsForm } from './UserSetsForm/UserSetsForm';

import { Wrapper, Title } from './UserSetsModalStyled';

export const UserSetsModal = ({ toggleModal }) => {
  return (
    <Wrapper>
      <Title>Profile settings</Title>
      <UserSetsCard />
      <UserSetsForm toggleModal={toggleModal} />
    </Wrapper>
  );
};
