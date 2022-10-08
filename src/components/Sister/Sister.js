import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Sister</h3>
      <p>house {house}</p>
      <p>Money : {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Increase</button>
    </div>
  );
};

export default Sister;
