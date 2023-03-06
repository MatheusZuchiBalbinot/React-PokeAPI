import { useEffect, useState } from 'react';
import SearchPokemon from './search_Pokemon';
import styles from './Poke_Card.module.css'

const EachPokemon = ( {pokemon} ) => {
    const [pokedata, setPokedata] = useState([]);

    useEffect(() => {
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setPokedata(one_pokemon_url));
      // console.log(pokedata)
    }, [])

    if (pokedata.sprites) {
      return (
        <div className={styles.PokeCards}>
          <div className={styles.Card}>
          <img src={pokedata.sprites.front_default} style={{width: '100px', height: 'auto'}} alt={pokemon.name}></img>
          <div className="values">
            <h4 className={styles.card_title}> {pokemon.name} </h4>
            {pokedata.types[1] ? <p> {pokedata.types[0].type.name} <br></br> {pokedata.types[1].type.name} </p> : <p> {pokedata.types[0].type.name} </p>}
          </div>
          </div>
        </div>
      )
    }

  }

export default EachPokemon;