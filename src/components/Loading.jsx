import React from "react";

const Loading = () => {
  return (
    <div className="container w-100 text-center mt-5">
      <h1 className="text-center mt-5">Cargando....</h1>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
