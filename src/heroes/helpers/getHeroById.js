import { heroes } from "../data/Heroes"

export const getHeroById = (id) => {

    return heroes.find( hero => hero.id === id );

    // si no existe, find regresa undefined

}