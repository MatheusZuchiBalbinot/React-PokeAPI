import { useEffect, useState } from 'react';
import styles from './Poke_Card.module.css'

function Poke_Card() {

  const [list, setList] = useState([]);

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/2/%27').then((res) => res.json()).then((data) => console.log(data))
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5%27%27').then((res) => res.json()).then((data) => setList(data.results))
  }, []);

    return (
      <div style={{display: 'flex', flex: 'none', flexWrap:'wrap'}}>
          { list.map((item) => <> <EachPokemon pokemon={item}/> </>)}
      </div>
    );
}

  const EachPokemon = ( {pokemon} ) => {

    const [image, setImage] = useState(['']);
    const [type, setType] = useState(['']);

    useEffect(() => {
      // console.log(pokemon)
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setImage(one_pokemon_url.sprites));
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setType(one_pokemon_url.types));
    }, [])

    return (
      <div className={styles.PokeCards}>
        <div className={styles.Card}>
        <img src={image.front_default} style={{width: 'auto', height: 'auto'}} alt={pokemon.name}></img>
        <div className="values">
          <h4 className={styles.card_title}> {pokemon.name} </h4>
          {/* <> {type[1] ? <p> {type[0].type.name} {type[1].type.name} </p> : <p> {type[0].type.name} </p>} </> */}
        </div>
        </div>
      </div>
    )
  }

export default Poke_Card;