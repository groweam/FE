import React from 'react'
import { styled } from 'styled-components';
import {IoCloseOutline} from 'react-icons/io5'
import Input from '../../common/Input';
import { useState } from 'react';
import StyledButton from '../../common/StyledButton';
import RangeDatePicker from '../RangeDatePicker';

export default function AddProjectModal({setIsOpen}) {
  const [project, setProject] = useState({})

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setProject((project) => ({...project, [name]: value}))
    console.log(project)
  }


  const handleOnSubmit = () => {
    // 프로젝트 생성 api 연결
  }

  return (
    <>
      <ModalBackdrop>
        <ModalContainer>
          <CloseBtn onClick={()=> setIsOpen(false)}>
            <IoCloseOutline color={`var(--font-gray)`} fontSize="1.75rem"/>
          </CloseBtn> 
          <ModalTitle>새 프로젝트 생성하기</ModalTitle>
          <FormContainer>
            <Input label={'프로젝트 이름'} value={project.project_name} name={'project_name'} placeholder={'프로젝트 이름을 입력해주세요'} handleOnChange={handleOnChange} />
            <Input label={'프로젝트 목표'} value={project.project_goal} name={'project_goal'} placeholder={'프로젝트 목표를 입력해주세요'} handleOnChange={handleOnChange}/>
            <Input label={'팀명'} value={project.team_name} name={'team_name'} placeholder={'팀명을 입력해주세요'} handleOnChange={handleOnChange}/>
            <DateInput>
              <label>프로젝트 기간</label>
              <RangeDatePicker />
            </DateInput>
            <AddBtn>
              <StyledButton text={'생성하기'} padding={'0.5rem 1rem'} fontSize='1rem' handleOnClick={handleOnSubmit}/>
            </AddBtn>
          </FormContainer>
        </ModalContainer>
      </ModalBackdrop>

    </>
  )
}


const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.50);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 40rem;
  background-color: white;
  border-radius: 1rem;

`

const ModalTitle = styled.p`
  padding: 2rem;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`


const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 0 2rem 2rem 2rem;
`

const DateInput = styled.div`
  label{
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    font-weight: 500;
  }

`

const AddBtn = styled.div`
  width: 100%;
  text-align: right;

`