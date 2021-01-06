import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import bgDesktop from "./images/background-desktop.jpg";
import bgMobile from "./images/background-mobile.jpg";
import { BsArrow90DegDown } from "react-icons/bs";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <HeroSection>
        <HeroContent>
          <h1>مدخلك إلى عالم العجين</h1>
          <h3>تعرف على مكونات عجينتك ونسبها</h3>
          <Button>
            <BsArrow90DegDown className="icon" />
            إختر نوع العجينة
          </Button>
        </HeroContent>
      </HeroSection>
    </Container>
  );
}

const Container = styled.div``;

const HeroSection = styled.div`
  min-height: 40vh;
  background: linear-gradient(rgba(46, 46, 46, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgMobile}) no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  justify-content: center;

  h1 {
    color: #e3e3e3;
    margin-bottom: 1rem;
  }
  h3 {
    color: #d1cfcf;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  cursor: pointer;
  background: #176130;
  color: #e3e3e3;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 1rem;
  }
`;
export default App;
