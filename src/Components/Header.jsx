import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-right: 16px;
  text-decoration: none;
  color: #333;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderTitle>Menu</HeaderTitle>
      <HeaderNav>
        <NavLink to="/cooks" $isActive={location.pathname === "/cooks"}>
          Cooks
        </NavLink>
        <NavLink to="/waiters" $isActive={location.pathname === "/waiters"}>
          Waiters
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;