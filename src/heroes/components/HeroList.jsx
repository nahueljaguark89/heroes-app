import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";


export const HeroList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]);
    // cuando el publisher cambie vuelve a disparar y redibujar el componente, sino guarda lo anterior para ahorrar recursos
    // la dependencia es el [publisher]
    // para eso se usa el useMemo. podriamos haber hecho la funcion sin esto porque es una app sencilla en este caso
    // pero es una buena practica para apps mas grosas

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
                heroes.map( hero => (
                    <HeroCard 
                      key={hero.id}
                      {...hero}
                    />
                ))
        }
    </div>
  )
}
