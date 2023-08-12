import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/imgs/logo.svg'
import { ReactComponent as TeamManageIcon } from '../assets/icons/team_manage_icon.svg'

import styled from 'styled-components';

export default function Navbar() {
  return (
    <Header>
      <Link to='/dashboard'>
        <Logo/>
      </Link>
      <Menu>
        <NavLink to='/dashboard' activeClassName="active">
          대시보드
        </NavLink>
        <NavLink to='/todo' activeClassName="active">
          할일 목록
        </NavLink>
        <NavLink to='/meeting' activeClassName="active">
          회의 일정
        </NavLink>
      </Menu>
      <NavLink to='/teamManage' activeClassName="active">
        <TeamButton>
          <TeamManageIcon/>
          <p>팀 관리</p>
        </TeamButton>
      </NavLink>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 0 10rem;
  align-items: center;
  box-shadow: 0px 4px 16px 0px rgba(196, 196, 196, 0.25);

  a, p{
    text-decoration: none;
    color: var(--font-gray);
    font-size: 1.125rem;
  }

  a:nth-child(1).active {
    backgroun-color: red;
  }
`

const Menu = styled.nav`
  display: flex;
  gap: 3.5rem;

  a{
    padding: 0.25rem 0;
  }



  a.active{
    font-weight: 600;
    border-bottom: 4px solid var(--main-color);
    color: black;
  }
`

const TeamButton = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0 1.2rem;
  border-radius: 1.25rem;
`
