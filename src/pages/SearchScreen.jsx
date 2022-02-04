import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const queryString = require("query-string");

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${input}`);
  };
  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
  };

  const { q = "" } = queryString.parse(location.search);
  const [input, setInput] = useState(q);
  const [personajes, setPersonajes] = useState([]);
  const getPersonajes = () => {
    if (input !== "") {
      const val = input.toLocaleLowerCase();
      const nuevosPersonajes = Characters.filter((char) => {
        return char.name.toLocaleLowerCase().includes(val);
      });
      setPersonajes(nuevosPersonajes);
      console.log(personajes);
    } else {
      setPersonajes([]);
    }
  };
  useEffect(() => {
    getPersonajes();
  }, [q]);
  return (
    <div className="container ms-3 mt-2">
      <h2 className="text-center">Busca tu personaje</h2>
      <div className="row mt-4">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <label className="label-form w-100">
              {"   "}
              Buscar
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={input}
                placeholder="Busca un personaje"
              />
            </label>
            <button type="submit" className="btn btn-info w-100 mt-3">
              {" "}
              Buscar
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Personajes: {personajes.length}</h2>
          {personajes.length === 0 && (
            <div className="alert alert-warning">
              Por favor busca un personaje
            </div>
          )}

          {personajes.map((p) => {
            return <Card m={p} key={p.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
