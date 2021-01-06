import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import bgMobile from "./images/background-mobile.jpg";
import bgDesktop from "./images/background-desktop.jpg";
import NavBar from "./components/NavBar";
import DoughCalculator from "./components/DoughCalculator";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Container>
      <GlobalStyle />

      <HeroSection>
        <HeroContent>
          <h1>مدخلك إلى عالم العجين</h1>
          <h3> تعرف على مكونات عجينتك ونسبها وطريقة تحضيرها</h3>
          <NavBar />
        </HeroContent>
      </HeroSection>
      <Switch>
        <Route exact path="/">
          <DoughCalculator />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  background: #e0d3d3;
`;

const HeroSection = styled.div`
  min-height: 40vh;
  background: linear-gradient(rgba(46, 46, 46, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgMobile}) no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 700px) {
    background: linear-gradient(rgba(46, 46, 46, 0.7), rgba(0, 0, 0, 0.7)),
      url(${bgDesktop}) no-repeat center left;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  text-align: center;
  align-items: center;
  justify-content: center;

  h1 {
    color: #e3e3e3;
    margin-bottom: 1.2rem;
  }
  h3 {
    color: #d1cfcf;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 700px) {
    align-items: flex-start;
    margin: 0 2.5rem;

    h1 {
      font-size: 5rem;
    }
    h3 {
      font-size: 2.4rem;
    }
  }
`;
export default App;
