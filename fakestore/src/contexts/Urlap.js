import React, { useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

function Urlap() {
  const { postAdat, kategoriaLista } = useContext(ApiContext);

  //saját belső STATEje van az űrlapnak
  const [adat, setAdat] = useState({
    title: "",
    price: 1000,
    category: "",
    description: "",
    image: "...",
  });

  function adatKuld(event) {
    event.preventDefault(); //leszedjük ezzel a beépített eseménykeezlőt
    console.log("küldés", adat);
    //validálás után, ez csak egy formai ellenőrzés
    postAdat("/products", adat);
    //összegyűjtjük az űrlap input mezeiből az adatokat, összeállítunk egy objektumot, és elküldjük a mefelelő végpontra
  }

  function valtozasKezeles(event) {
    //itt FRISSÍTEM a STATE értékét: segédváltozó, másolatot készítek róla {} közé téve mert objektumról csinálom
    const sv = { ...adat };
    sv[event.target.id] = event.target.value;
    setAdat({ ...sv });
  }

  return (
    <div>
      <form onSubmit={adatKuld}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Termék neve
          </label>
          <input
            type="text"
            pattern="^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű ]{2,}$"
            value={adat.title}
            onChange={valtozasKezeles}
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Termék ára
          </label>
          <input
            type="number"
            min="1000"
            max="100000"
            value={adat.price}
            onChange={valtozasKezeles}
            className="form-control"
            id="price"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Kategória
          </label>
          <select className="form-select" aria-label="Default select example" id="category" onChange={valtozasKezeles}>
          {kategoriaLista.map((adat) =>{
                return <option value={adat} >{adat}</option>
          })}

          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Termék leírása
          </label>
          <textarea value={adat.description}
            onChange={valtozasKezeles} className="form-control" id="description" rows="3"></textarea>
        </div>

        <div className="mb-3">
        <label htmlFor="formFile" className="form-label">Termék kép</label>
        <input className="form-control" type="file" 
            onChange={valtozasKezeles} id="image"/>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Urlap;
