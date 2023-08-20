import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import { styled } from 'styled-components';

export default function StyledDatePicker({isInline, placeholder, selected, handleOnChange}) {

  return (
    <CustomDatePicker
      locale={ko}
      dateFormat="yyyy / MM / dd"
      selected={selected}
      closeOnScroll={true}
      placeholderText={placeholder}
      onChange={handleOnChange}
      inline={isInline}
    />
  )
}


const CustomDatePicker = styled(DatePicker)`
  color: black;
  height: 2.75rem;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid var(--input-border);
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 0.6rem 0.8rem;
`;
