import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../doughdata";

const Recipes = () => {
  const [doughInfo] = useState(data);
  const [selector, setSelector] = useState("");

  const selectHandler = (e) => {
    setSelector(e.target.value);
  };

  useEffect(() => {
    setSelector("بيتزا");
  }, []);
  return (
    <RecipesContainer>
      <select onChange={selectHandler}>
        {doughInfo.map((dough) => {
          const { id, name } = dough;
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <Recipe>
        {doughInfo.map((dough) => {
          if (dough.name === selector) {
            return (
              <>
                <img src={dough.img} alt="" />
                <ol>
                  {dough.recipe.map((info, index) => {
                    return <li key={index}>{info}</li>;
                  })}
                </ol>
              </>
            );
          }
          return null;
        })}
      </Recipe>
    </RecipesContainer>
  );
};

const RecipesContainer = styled.div`
  min-height: 60vh;
  margin: 3rem 2rem 0 2rem;
  select {
    font-family: inherit;
    margin: 1.5rem;
    font-size: 1.4rem;
    padding: 0.2rem;
  }
`;

const Recipe = styled.div`
  padding: 1.5rem;
  ol {
    padding: 1.5rem;
  }

  li {
    font-size: 1.6rem;
    margin: 1rem 0;
    line-height: 1.5;
  }
  img {
    border-radius: 50%;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;

export default Recipes;
