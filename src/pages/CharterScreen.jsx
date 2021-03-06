import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Characters } from "../models/Characters";

const CharterScreen = () => {
  const { id } = useParams();
  const c = Characters.find((ch) => {
    return ch.id === id;
  });

  const src = `/assets/${c.type}-${c.id}.png`;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="container row mt-3">
      <div className="col-8">
        <img
          loading="lazy"
          src={src}
          className="card-img-top"
          style={{
            width: "60%",
            height: "400px",
          }}
          alt=""
        />
      </div>
      <div className="col-4">
        <h2>Nombre: {c.name}</h2>
        <p className="card-text">
          Descripción: {c.description} <br />
        </p>
        <button className="btn btn-outline-warning" onClick={handleBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default CharterScreen;
