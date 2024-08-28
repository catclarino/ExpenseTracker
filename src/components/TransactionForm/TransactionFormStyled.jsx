import styled from 'styled-components';
import { Icon } from '../../components/Icon/Icon';
import DatePicker from 'react-datepicker';

export const FormWrapper = styled.div`
  width: fit-content;
  background-color: var(--box-background-color);
  border-radius: 30px;
  padding: 28px 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 40px 109px;
  }

  @media screen and (min-width: 1440px) {
    width: 566px;
    padding: 40px;
  }
`;

export const TransactionFormStyled1 = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--main-text-color);
  width: 100%;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 375px) {
    width: 295px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
  }

  input {
    border: 1px solid var(--border-field-color);
    border-radius: 12px;
    padding: 11px 14px;
    background-color: transparent;
    font-size: 14px;
    line-height: 18px;
    color: var(--main-text-color);

    @media screen and (min-width: 768px) {
      padding: 11px 18px;
      font-size: 16px;
      line-height: 24px;
    }

    &::placeholder {
      color: var(--regular-text-color);
    }

    &:hover,
    &:focus {
      border-color: var(--button-color);
    }

    &:focus {
      outline: none;
    }

    &[type='time']::-webkit-calendar-picker-indicator {
      display: none;
    }

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  label {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.28px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.32px;
    }
  }

  .errorField,
  .errorField:hover,
  .errorField:focus {
    border-color: var(--errors-color);
  }
`;

export const TypeLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const TransactionTypes = styled.div`
  display: flex;
  gap: 20px;
  height: 24px;
`;

export const CustomRadioBtn = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 10px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid var(--border-field-color);
  vertical-align: text-top;

  &::before {
    content: '';
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color: var(--hover-color);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in;
  }
`;

export const RadioBtn = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + ${CustomRadioBtn} {
    border-color: var(--hover-color);
  }

  &:checked + ${CustomRadioBtn}::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const CustomFields = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const CustomField = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const DatePickerStyled = styled(DatePicker)`
  font-family: 'SuisseIntl-Regular', sans-serif;
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    height: 48px;
  }
`;

export const DatepickerContainer = styled.div`
  position: relative;
`;

export const IconStyled = styled(Icon)`
  stroke: var(--main-text-color);
  fill: none;
  position: absolute;
  right: 5%;
  top: 66%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media screen and (max-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    right: 4%;
    top: 68%;
  }
`;

export const SumLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const Currency = styled.span`
  width: 50px;
  text-align: end;
  position: absolute;
  right: -1%;
  top: 68%;
  transform: translate(-50%, -50%);
  color: var(--regular-text-color);

  .sumInput:not(:placeholder-shown) + & {
    color: white;
  }
`;

export const CommentField = styled.textarea`
  resize: none;
  background-color: transparent;
  padding: 12px 14px;
  color: var(--main-text-color);
  border-radius: 12px;
  border: 1px solid var(--border-field-color);
  height: 91px;
  font-family: 'SuisseIntl-Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    height: 97px;
    padding: 12px 14px;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    color: var(--regular-text-color);
  }
`;

export const SubmitBtn = styled.button`
  width: fit-content;
  border-radius: 40px;
  padding: 14px 44px;
  text-align: center;
  font-size: 14px;
  letter-spacing: -0.28px;
  line-height: 16px;
  color: var(--background-color);
  transition: all var(--transition-delay) var(--transition);

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 44px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.32px;
  }

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const MessageError = styled.p`
  font-weight: 400;
  font-size: 10px;
  padding: 4px 0 0 18px;
  left: 0%;
  top: 94%;
  position: absolute;
  color: var(--errors-color);

  .categoryField + & {
    padding-top: 2px;
  }
`;
