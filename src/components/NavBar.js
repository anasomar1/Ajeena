import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DoughBar = () => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">حساب المكونات</Link>
        </li>
        <li>
          <Link to="/recipes">طريقة التحضير</Link>
        </li>
        <li>
          <Link to="/contact">تواصل معنا</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  min-height: 6vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 1.5rem;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    list-style-type: none;

    a {
      text-decoration: none;
      display: block;
      color: #262626;
      background: #e0e0e0;
      padding: 0.5rem 1rem;
      border-radius: 1rem;

      &:hover {
        background: #b6b6b6;
      }
    }
  }
`;

export default DoughBar;
