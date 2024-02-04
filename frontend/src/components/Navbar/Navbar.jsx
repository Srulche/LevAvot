import React, { useEffect, useState } from "react";
import levAvotLogo from "../../assets/Lev-Avot-Logo.jpg";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuSubTrigger } from "@radix-ui/react-dropdown-menu";
import { PhoneRounded, WhatshotRounded } from "@mui/icons-material";
import ContactLinks from "../ContactLinks/ContactLinks";

const NavLinkStyled = styled(Link)`
  color: black;
  transition: color 0.5s linear;
  &:hover {
    color: var(--color-primary-green);
  }
`;
const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  column-gap: 1rem;

  .right {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
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
      color: var(--color-primary-red);
    }
  }
`;

const Navbar = () => {

  const {pathname: pathName} = useLocation()
  return (
    <NavStyled>
      <div className="right">
      <div className="logo">
        <img src={levAvotLogo} />
      </div>
      <div className="links">
        <NavLinkStyled className={pathName === '/' ? "selected" : ""} to="/"> בית </NavLinkStyled>
        <NavLinkStyled className={pathName === '/about' ? "selected" : ""} to="/about"> אודות </NavLinkStyled>
      <DropdownMenu>
      <DropdownMenuTrigger>קבוצות ומפגשים</DropdownMenuTrigger>
        <DropdownMenuContent>
          <NavLinkStyled className={pathName === '/groups/a' ? "selected" : ""} to="/groups/a">
            <DropdownMenuItem>
                Group A
            </DropdownMenuItem>
          </NavLinkStyled>
          
          <NavLinkStyled className={pathName === '/groups/b' ? "selected" : ""} to="/groups/b">
            <DropdownMenuItem>
                Group B
            </DropdownMenuItem>
          </NavLinkStyled>
          <NavLinkStyled className={pathName === '/groups/c' ? "selected" : ""} to="/groups/c">
            <DropdownMenuItem>
                Group C
            </DropdownMenuItem>
          </NavLinkStyled>
          <NavLinkStyled className={pathName === '/groups/d' ? "selected" : ""} to="/groups/d">
            <DropdownMenuItem>
                Group D
            </DropdownMenuItem>
          </NavLinkStyled>
        </DropdownMenuContent>
    </DropdownMenu>
        <NavLinkStyled className={pathName === '/contact' ? "selected" : ""}  to="/contact"> צור קשר </NavLinkStyled>
      </div>
      </div>
     
      <div className="left">
       <ContactLinks/>
      </div>

    </NavStyled>
  );
};

export default Navbar;
