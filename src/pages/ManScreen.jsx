import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";
const ManScreen = () => {
  const mans = Characters.filter((c) => c.type === "h" && c);
  return (
    <div className="container mt-3">
      <h1>Mans Screen</h1>
      <hr />
      <div className="row">
        {mans.map((m) => {
          return <Card m={m} key={m.id} />;
        })}
      </div>
    </div>
  );
};

export default ManScreen;
