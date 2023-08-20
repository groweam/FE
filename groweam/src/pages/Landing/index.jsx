import React, { useState } from "react";
import styled from 'styled-components';
import { ReactComponent as LandingBg } from '../../assets/imgs/landing_bg.svg'
import StyledButton from "../../components/common/StyledButton";
import AddProjectModal from "../../components/Landing/AddProjectModal";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = ((e) => {
    setIsOpen(true)
  })

    return (
      <>
        <Container>
          <ContentWrapper>
            <MainText>성공적인 협업을 위한 <br/> 프로젝트 관리 서비스</MainText>
            <SubText>할 일 관리부터 회의일정 정하기까지 <br/> 팀 프로젝트에서 필요한 것들을 팀원들과 공유해보세요.</SubText>
            <StyledButton text={`새 프로젝트 생성`} padding={'0.75rem 1.25rem'} width="16rem" fontSize='1.5rem' handleOnClick={handleOnClick} />
          </ContentWrapper>
          <LandingBg/>
        </Container>
        {isOpen && <AddProjectModal setIsOpen={setIsOpen}/>}
      </>
    );
}

export default Landing;

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

`

const MainText = styled.p`
  font-size: 3rem;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.06rem;
`

const SubText = styled.p`
  color: #808080;
  font-weight: 400;
  line-height: 160%; /* 2.4rem */
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

`