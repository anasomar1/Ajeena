import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DoughCalculator = () => {
  const [water, setWater] = useState(0);
  const [salt, setSalt] = useState(0);
  const [yeast, setYeast] = useState(0);
  const [flour, setFlour] = useState(0);

  const [doughBalls, setDoughBalls] = useState("");
  const [doughWeight, setDoughWeight] = useState("");
  const [waterPercentage, setWaterPercentage] = useState("");

  const inputHandler = (e) => {
    if (e.target.name === "doughBalls") {
      setDoughBalls(parseInt(e.target.value));
    }
    if (e.target.name === "doughWeight") {
      setDoughWeight(parseInt(e.target.value));
    }
    if (e.target.name === "waterPercentage") {
      setWaterPercentage(parseInt(e.target.value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (doughBalls && doughWeight && waterPercentage) {
      setFlour(
        (doughBalls * doughWeight) / (1 + waterPercentage / 100 + 0.02 + 0.008)
      );
    } else {
      alert("رجاءً قم بإدخال كافة المعلومات");
    }
  };

  useEffect(() => {
    setWater((flour * waterPercentage) / 100);
    setSalt(0.02 * flour);
    setYeast(0.008 * flour);
  }, [setFlour, flour, waterPercentage]);

  return (
    <StyledDoughCalculator>
      <CalculatorContent>
        <h2>الكمية</h2>
        <p>اختر الكمية التي ترغب بإعدادها</p>
        <Form onSubmit={submitHandler}>
          <StyledInput>
            <input
              placeholder="1"
              type="number"
              id="dough-ball"
              name="doughBalls"
              onChange={inputHandler}
              value={doughBalls}
            />

            <label htmlFor="dough-ball">
              <p>عجائن</p>
              <small>(عدد العجائن)</small>
            </label>
          </StyledInput>
          <StyledInput>
            <input
              placeholder="200"
              min="100"
              step="10"
              type="number"
              id="dough-weight"
              name="doughWeight"
              onChange={inputHandler}
              value={doughWeight}
            />
            <label htmlFor="dough-weight">
              <p>غرام</p> <small> (وزن العجينة الواحدة بالغرام) </small>
            </label>
          </StyledInput>
          <p className="extra-info">
            حيث أنّ 200 غرام هو حجم البيتزا الصغيرة و300 غرام هو حجم البيتزا
            الكبيرة
          </p>
          <StyledInput>
            <input
              placeholder="55"
              min="40"
              type="number"
              id="water-percentage"
              name="waterPercentage"
              onChange={inputHandler}
              value={waterPercentage}
            />
            <label htmlFor="water-percentage">
              <p>نسبة الماء في العجينة</p>
            </label>
          </StyledInput>
          <p class="extra-info">
            (تتراوح نسبة المياه في العجينة ما بين 50% و 75%، كلما زادت نسبة
            المياه تزداد صعوبة التعامل مع العجينة لكنها تصبح أكثر هشاشة)
          </p>
          <Button type="submit">حفظ المعلومات</Button>
        </Form>
        <Information>
          <li>
            طحين : {flour.toFixed(1)} غرام{" "}
            <small>(كأس الطحين يعادل 125 غرام)</small>
          </li>
          <li>
            ماء : {water.toFixed(1)} مل <small>(كأس الماء يعادل 235 مل)</small>
          </li>
          <li>ملح : {salt.toFixed(1)} غرام</li>
          <li>خميرة : {yeast.toFixed(1)} غرام</li>
        </Information>
      </CalculatorContent>
    </StyledDoughCalculator>
  );
};

const StyledDoughCalculator = styled.div`
  margin-top: 3rem;
  display: flex;
  padding: 0 2.5rem;

  justify-content: space-between;
  align-items: center;
  min-height: 30vh;
`;

const CalculatorContent = styled.div`
  @media (min-width: 700px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    background: #e0e0e0;
    margin: 1rem 0 2rem 1rem;
  }

  label {
    font-size: 1.4rem;
    margin: 1rem 0 2rem 1rem;
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  cursor: pointer;
  background: #176130;
  color: #e3e3e3;
  padding: 0.5rem 2.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  margin: 2rem 0 1rem 0;

  &:hover {
    background: #19552d;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .extra-info {
    font-size: 1.2rem;
  }
`;

const Information = styled.ul`
  padding: 1rem;
  list-style: none;

  width: 100%;
  li {
    font-weight: bold;
    line-height: 1.5;
    font-size: 1.6rem;
  }
  small {
    font-weight: normal;
  }
`;

export default DoughCalculator;
