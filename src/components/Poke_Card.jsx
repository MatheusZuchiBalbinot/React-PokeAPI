import { useEffect, useState } from 'react';

import Header from './Header';
import EachPokemon from './poke_Info';
import styles from './Poke_Card.module.css';
import SearchPokemon from './search_Pokemon'

function Poke_Card( {newPokemon} ) {
  const [list, setList] = useState([]);

  // function checkNewPokemons(newPokemon) {
  //   console.log(newPokemon);
  //   if(newPokemon) {
  //     console.log('a')
  //   }
  // }

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/4/').then((res) => res.json()).then((data) => console.log(data)) 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=35%27%27%27').then((res) => res.json()).then((data) => setList(data.results));
  }, []);

    return (
      // <>{console.log(list)} 
      <div className={styles.PokeCardDiv}>
        <div className={styles.CardsDiv}>
            {/* {checkNewPokemons()} */}
            { list.map((item) => <> <EachPokemon pokemon={item} /> <SearchPokemon pokemon={item}/> </>)}
        </div>
        <div class={styles.select_configs}>
            <h3 style={{padding:'1vw', fontSize:'1.5vw'}}> Insira seleções: </h3>
            <div style={{margin:'1vw'}}>
              <button type="button" className={styles.select_configs_button}> Water </button>
              <button type="button" className={styles.select_configs_button}> Fire </button>
              <button type="button" className={styles.select_configs_button}> Grass </button>
              <button type="button" className={styles.select_configs_button}> Ground </button>
              <button type="button" className={styles.select_configs_button}> Rock </button>
              <button type="button" className={styles.select_configs_button}> Eletric </button>
              <button type="button" className={styles.select_configs_button}> Dark </button>
              <button type="button" className={styles.select_configs_button}> Ghost </button>
              <button type="button" className={styles.select_configs_button}> Fairy </button>
              <button type="button" className={styles.select_configs_button}> Flying </button>
              <button type="button" className={styles.select_configs_button}> Normal </button>
              <button type="button" className={styles.select_configs_button}> Fighting </button>
              <button type="button" className={styles.select_configs_button}> Dragon </button>
              <button type="button" className={styles.select_configs_button}> Ice </button>
              <button type="button" className={styles.select_configs_button}> Steel </button>
              <button type="button" className={styles.select_configs_button}> Poison </button>
              <button type="button" className={styles.select_configs_button}> Psychic </button>
              <button type="button" className={styles.select_configs_button}> Bug </button>
            </div>
            
        </div>
      </div>
      // </>
    );

}

export default Poke_Card;