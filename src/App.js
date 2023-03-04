import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import API from "./Api";

function App() {

  //Animal va a ser mi objeto que va a ir seteando cada vez que clickeo el boton
  const [animal, setAnimal] = useState();

  //utilizando axios realizo la peticion a la API y con lo que me responde, guardo en la variable para poder utilizarla. Lo realizo en una funcion asincrona ya que las peticiones se manejan mediante promesas.

  async function peticion() {
    const res = await axios.get(`${API}`);
    /* console.log(res.data); */
    setAnimal(res.data);
  }

  //Ejecuto la peticion dentro de un useEffect para poder controlar la peticion
  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="App">
      <div className="div-information">
        <img src={animal?.image}></img>
        <h3>{animal?.fact}</h3>
        {/* cada vez que haga click en el boton, voy a volver a realizar la peticion para que se me actualice la informacion */}
        <button
          onClick={() => {
            peticion();
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default App;
