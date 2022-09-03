import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string' // paquete que instalamos para leer y extraer querys de la url mas comodo

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const Search = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q='' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);



  const {searchText, onInputChange} = useForm({
    searchText: q
  });
  // reutilizamos el hook de manejo de formulario de clases anteriores

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    
    navigate(`?q=${ searchText }`)
    // toLowerCase pone minusculas y trim borra espacios en blanco antes y despues
    // podemos hacerlo aca al enviar o al momento de recibir el dato y leerlo

  }


  return (
    <>
      <h1>Search</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            ( q === '' )
            ? <div className="alert alert-primary">Search a hero</div> // si q es vacio muestra el mensaje de buscar
            : ( heroes.length === 0 ) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
            // si el array heores es de longitud cero (vacio) muestra el mensaje de que no hay heroes
          }

        

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
}
