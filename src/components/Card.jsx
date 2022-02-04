import React from "react";
import { Link } from "react-router-dom";

const Card = ({ m }) => {
  const src = `/assets/${m.type}-${m.id}.png`;
  return (
    <div
      className="card m-3 col col-12 col-md-4"
      style={{
        width: 300,
      }}
    >
      <img
        src={src}
        width="20px"
        loading="lazy"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h2 className="card-title">{m.name}</h2>
        <p className="card-text">
          {" "}
          {m.description} <br />
          <Link className="card-link" to={`/caracter/${m.id}`}>
            Ver más...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
