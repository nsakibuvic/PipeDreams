// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const HeaderNav = styled.nav`
  margin-top: 8px;
`;

const NavLink = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  color: #333;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderNav>
        <NavLink to="/cooks" isActive={title === 'Cooks'}>
          Cooks
        </NavLink>
        <NavLink to="/waiters" isActive={title === 'Waiters'}>
          Waiters
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;