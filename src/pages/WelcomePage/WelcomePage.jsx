import { BgImageWrapper } from '../../components/BgImgWrapper/BgImgWrapper';
import users1x from '../../assets/images/images_users_1x@.png';
import users2x from '../../assets/images/images_users_2x@.png';

import {
  Container,
  ContainerHome,
  ContainerText,
  ContainerImg,
  Img,
  TitleUsers,
  Tx,
  Text,
  Title,
  Span,
  TextDesc,
  ContainerButton,
  ButtonUp,
  ButtonIn,
} from './WelcomePageStyled';

const Home = () => {
  return (
    <Container>
      <BgImageWrapper />
      <ContainerHome>
        <ContainerText>
          <Text>Expense log</Text>
          <Title>
            Manage Your <Span>Finances</Span> Masterfully!
          </Title>
          <TextDesc>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </TextDesc>
          <ContainerButton>
            <ButtonUp to="/register">Sign Up</ButtonUp>
            <ButtonIn to="/login">Sign In</ButtonIn>
          </ContainerButton>
        </ContainerText>
        <ContainerImg>
          <picture>
            <source srcSet={`${users1x}, ${users2x} 2x`} type="image/png" />
            <Img src={users1x} alt="Users photos" />
          </picture>
          <div>
            <TitleUsers>1000 users +</TitleUsers>
            <Tx>Trusted by users for reliable expense tracking!</Tx>
          </div>
        </ContainerImg>
      </ContainerHome>
    </Container>
  );
};

export default Home;
