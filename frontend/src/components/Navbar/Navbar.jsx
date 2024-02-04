import React, { useEffect, useState } from "react";
import levAvotLogo from "../../assets/Lev-Avot-Logo.jpg";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const NavLinkStyled = styled(Link)`
  color: black;
  transition: color 0.5s linear;
  &:hover {
    color: blue;
  }
`;
const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  column-gap: 1rem;
  .logo {
    img {
      max-width: 100%;
      width: 75px;
      height: 75px;
    }
  }

  .links {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    .selected {
      color: blue;
    }
  }
`;

const Navbar = () => {

  const {pathname: pathName} = useLocation()
  return (
    <NavStyled>
      <div className="logo">
        <img src={levAvotLogo} />
      </div>
      <div className="links">
        <NavLinkStyled className={pathName === '/' ? "selected" : ""} to="/"> בית </NavLinkStyled>
        <NavLinkStyled className={pathName === '/about' ? "selected" : ""} to="/about"> אודות </NavLinkStyled>
        <NavLinkStyled className={pathName === '/groups' ? "selected" : ""}  to="/groups"> קבוצות ומפגשים </NavLinkStyled>
        <NavLinkStyled className={pathName === '/contact' ? "selected" : ""}  to="/contact"> צור קשר </NavLinkStyled>
      </div>
    </NavStyled>
  );
};

export default Navbar;
