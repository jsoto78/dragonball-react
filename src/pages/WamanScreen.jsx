import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";
const WamanScreen = () => {
  const wamans = Characters.filter((c) => {
    if (c.type === "m") {
      return c;
    }
  });
  return (
    <div className="container mt-3">
      <h1>Woman Screen</h1>
      <hr />
      <div className="row">
        {wamans.map((m) => {
          return <Card m={m} key={m.id} />;
        })}
      </div>
    </div>
  );
};

export default WamanScreen;
