import { useEffect, useState } from 'react';
import styles from './Poke_Card.module.css'

function Poke_Card() {

  const [list, setList] = useState([]);

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/4/').then((res) => res.json()).then((data) => console.log(data))
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20%27%27%27').then((res) => res.json()).then((data) => setList(data.results))
  }, []);

    return (
      <div style={{display: 'flex', flex: 'none', flexWrap:'wrap'}}>
          { list.map((item) => <> <EachPokemon pokemon={item} /> </>)}
      </div>
    );
}

  const EachPokemon = ( {pokemon} ) => {
    const [image, setImage] = useState(['']);
    const [type, setType] = useState(['']);

    function ColortheType() {
        switch (type[0].type.name) {
          case 'grass':
            return (<p> Grass </p>)
          case 'water':
            console.log('água')
          case 'poison':
            console.log('água')
          case 'fire':
            console.log('água')
          case 'flying':
            console.log('água')
          case 'bug':
            console.log('água')
          case 'normal':
            console.log('água')
          case 'fighting':
            console.log('água')
          case 'electric':
            console.log('água')
          case 'ground':
            console.log('água')
          case 'rock':
            console.log('água')
          case 'psychic':
            console.log('água')
          case 'ice':
            console.log('água')
          case 'ghost':
            console.log('água')
          case 'steel':
            console.log('água')
          case 'dragon':
            console.log('água')
          case 'dark':
            console.log('água')
          case 'fairy':
            console.log('água')
        }
        switch (type[1].type.name) {
          case 'grass':
            console.log('Aqui é Grama2')
          case 'water':
            console.log('água2')
          case 'poison':
            console.log('água2')
          case 'fire':
            console.log('água2')
          case 'flying':
            console.log('água2')
          case 'bug':
            console.log('água2')
          case 'normal':
            console.log('água2')
          case 'fighting':
            console.log('água')
          case 'electric':
            console.log('água')
          case 'ground':
            console.log('água')
          case 'rock':
            console.log('água')
          case 'psychic':
            console.log('água')
          case 'ice':
            console.log('água')
          case 'ghost':
            console.log('água')
          case 'steel':
            console.log('água')
          case 'dragon':
            console.log('água')
          case 'dark':
            console.log('água')
          case 'fairy':
            console.log('água')

        }
    }

    useEffect((e) => {
      // console.log(pokemon);
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setImage(one_pokemon_url.sprites));
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setType(one_pokemon_url.types));
    }, [])

    if (type[0]) {
      return (
        <div className={styles.PokeCards}>
          <div className={styles.Card}>
          <img src={image.front_default} style={{width: '100px', height: 'auto'}} alt={pokemon.name}></img>
          <div className="values">
            <h4 className={styles.card_title}> {pokemon.name} </h4>
            {type[1] ? <p> {type[0].type.name} <br></br> {type[1].type.name} </p> : <p> {type[0].type.name} </p>}
            {type[1] ? ColortheType() : null}
          </div>
          </div>
        </div>
      )
    }

  }

export default Poke_Card;