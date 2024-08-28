import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const ContainerTitle = styled.div`
  width: 335px;

  @media only screen and (min-width: 768px) {
    width: 399px;
  }

  @media only screen and (min-width: 1440px) {
    width: 533px;
  }

  @media (max-width: 374.99px) {
    width: 280px;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: var(--font-size-title-mob);
  letter-spacing: -0.02em;
  color: var(--main-text-color);
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-main-title);
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: -0.02em;
  color: var(--regular-text-color);
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-smaller);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  div:not(:last-child):not(:nth-last-child(2)) {
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const Input = styled.input`
  border: 1px solid var(--border-color);
  outline: none;
  border-radius: 12px;
  background-color: transparent;
  color: var(--main-text-color);
  font-weight: 400;
  font-size: var(--font-size-small);
  line-height: 1.3;
  letter-spacing: 0.01em;
  padding: 12px 40px 12px 18px;
  width: 335px;
  height: 42px;
  transition: border var(--transition) var(--transition-delay);

  &::placeholder {
    color: var(--regular-text-color);
  }

  &:hover {
    border: 1px solid var(--button-color);
  }

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-smaller);
    line-height: 1.5;
    width: 399px;
    height: 48px;
  }

  @media (max-width: 374.99px) {
    width: 280px;
  }
`;

export const ContainerIcon = styled.div`
  position: relative;
  align-items: center;
  min-width: 335px;

  @media (max-width: 374.99px) {
    min-width: 280px;
  }
`;

export const StyledIcon = styled(Icon)`
  stroke: var(--main-text-color);
  fill: none;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Button = styled.button`
  border-radius: 40px;
  padding: 14px 44px;
  margin-top: 80px;
  width: 138px;
  height: 44px;
  font-weight: 400;
  font-size: var(--font-size-small);
  letter-spacing: -0.02em;
  color: var(--background-color);
  background-color: var(--button-color);

  &:hover {
    background-color: var(--hover-color);
  }

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-smaller);
    width: 146px;
    height: 47px;
    margin-top: 60px;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-link-color);
`;

export const Span = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main-text-color);
`;

export const SuccessInput = styled(Input)`
  border: 1px solid var(--success-color);

  &:hover {
    border: 1px solid var(--success-color);
  }
`;

export const ErrorInput = styled(Input)`
  border: 1px solid var(--errors-color);

  &:hover {
    border: 1px solid var(--errors-color);
  }
`;

export const SuccessIcon = styled(StyledIcon)`
  stroke: none;
  fill: var(--success-color);
`;

export const ErrorIcon = styled(StyledIcon)`
  stroke: none;
  fill: var(--errors-color);
`;

export const MessageErr = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: var(--errors-color);
  padding: 4px 0 0 18px;
  width: 320px;
  position: absolute;

  @media only screen and (min-width: 768px) {
    width: 381px;
  }
`;

export const MessageSec = styled(MessageErr)`
  color: var(--success-color);
`;

export const ContainerForm = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
  }
`;
