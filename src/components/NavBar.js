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
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  min-height: 6vh;
  background: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    a {
      text-decoration: none;
      display: block;
      cursor: pointer;
      background: #176130;
      color: #e3e3e3;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      margin: 0 1rem;
      font-size: 1.4rem;

      &:hover {
        background: #055523;
      }
    }
  }
  @media (min-width: 700px) {
    justify-content: center;

    ul a {
      font-size: 2rem;
      margin: 0 0 0 3rem;
    }
  }
`;

export default DoughBar;
