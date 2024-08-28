import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const FormContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #171719;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 32px 32px 16px 32px;
  }

  @media only screen and (min-width: 1440px) {
    height: 90px;
    padding: 20px 40px 16px 40px;
  }
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  border-radius: 30px;
  padding: 15px 30px;
  width: 100%;
  height: 50px;
  border: 1px solid var(--background-color);
  background: var(--background-color);

  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: rgba(250, 250, 250, 0.4);
  outline: none;

  &:hover,
  &:focus {
    border: 1px solid var(--button-color);
  }

  @media only screen and (min-width: 768px) {
    width: 254px;
    background: #0c0d0d;
  }
`;

export const DatePickerContainer = styled.div`
  position: relative;
`;

export const FormCalendar = styled(DatePicker)`
  border: 1px solid rgba(250, 250, 250, 0.2);
  border-radius: 30px;
  padding: 15px 30px;
  width: 100%;
  height: 50px;
  background: #171719;
  color: rgba(250, 250, 250, 0.4);

  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
  outline: none;
  transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    border-color: var(--button-color);
  }

  @media only screen and (min-width: 768px) {
    width: 183px;
  }
`;

export const IconSearch = styled.div`
  stroke: var(--button-color);
  fill: none;
  position: absolute;
  right: 10%;
  top: 25%;
  transform: translate(-40%, 10%);
`;

export const IconDate = styled.div`
  stroke: var(--button-color);
  fill: none;
  position: absolute;
  right: 10%;
  top: 25%;
  transform: translate(-40%, 10%);
`;
