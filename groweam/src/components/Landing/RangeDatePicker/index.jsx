import React, { useState } from 'react'
import StyledDatePicker from '../../common/StyledDatePicker';
import {BsDashLg} from 'react-icons/bs'
import { styled } from 'styled-components';

export default function RangeDatePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  return (
    <>
      <RangeDateInput>
        <StyledDatePicker isInline={false} placeholder={'시작일'} selected={startDate} handleOnChange={(date)=> setStartDate(date)}/>
        <BsDashLg/>
        <StyledDatePicker isInline={false} placeholder={'마감일'} selected={endDate} handleOnChange={(date)=> setEndDate(date)}/>
      </RangeDateInput>
      
    </>
  )
}

const RangeDateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`