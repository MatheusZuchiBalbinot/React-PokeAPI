import { useEffect, useState } from 'react';
import SearchPokemon from './search_Pokemon';
import styles from './Poke_Card.module.css'

const EachPokemon = ( {pokemon} ) => {
    const [pokedata, setPokedata] = useState([]);

    function ShowType() {
      const poketypes = ['grass','poison','ground','rock','water','fairy','dark','ice','dragon','flying','bug','normal','electric','fire','fighting','psychic','steel','ghost'];
      if(pokedata.types[1]) {
        for(var i = 0; i <= poketypes.length; i++) {
          if(poketypes[i] == pokedata.types[0].type.name) {
            if(pokedata.types[0].type.name == 'grass') {
              var color_Class = styles.type_Grass;
            }
            if(pokedata.types[0].type.name == 'poison') {
              var color_Class = styles.type_Poison;
            }
            if(pokedata.types[0].type.name == 'ground') {
              var color_Class = styles.type_Ground;
            }
            if(pokedata.types[0].type.name == 'rock') {
              var color_Class = styles.type_Rock;
            }
            if(pokedata.types[0].type.name == 'water') {
              var color_Class = styles.type_Water;
            }
            if(pokedata.types[0].type.name == 'fairy') {
              var color_Class = styles.type_Fairy;
            }
            if(pokedata.types[0].type.name == 'dark') {
              var color_Class = styles.type_Dark;
            }
            if(pokedata.types[0].type.name == 'ice') {
              var color_Class = styles.type_Ice;
            }
            if(pokedata.types[0].type.name == 'dragon') {
              var color_Class = styles.type_Dragon;
            }
            if(pokedata.types[0].type.name == 'normal') {
              var color_Class = styles.type_Normal;
            }
            if(pokedata.types[0].type.name == 'bug') {
              var color_Class = styles.type_Bug;
            }
            if(pokedata.types[0].type.name == 'electric') {
              var color_Class = styles.type_Eletric;
            }
            if(pokedata.types[0].type.name == 'fighting') {
              var color_Class = styles.type_Grass;
            }
            if(pokedata.types[0].type.name == 'fire') {
              var color_Class = styles.type_Fire;
            }
            if(pokedata.types[0].type.name == 'steel') {
              var color_Class = styles.type_Steel;
            }
            if(pokedata.types[0].type.name == 'ghost') {
              var color_Class = styles.type_Ghost;
            }
            if(pokedata.types[0].type.name == 'flying') {
              var color_Class = styles.type_Flying;
            }
            if(pokedata.types[0].type.name == 'psychic') {
              var color_Class = styles.type_Psychic;
            }
          }
          if(poketypes[i] == pokedata.types[1].type.name) {
            if(pokedata.types[1].type.name == 'grass') {
              var color_Class_2 = styles.type_Grass;
            }
            if(pokedata.types[1].type.name == 'poison') {
              var color_Class_2 = styles.type_Poison;
            }
            if(pokedata.types[1].type.name == 'ground') {
              var color_Class_2 = styles.type_Ground;
            }
            if(pokedata.types[1].type.name == 'rock') {
              var color_Class_2 = styles.type_Rock;
            }
            if(pokedata.types[1].type.name == 'water') {
              var color_Class_2 = styles.type_Water;
            }
            if(pokedata.types[1].type.name == 'fairy') {
              var color_Class_2 = styles.type_Fairy;
            }
            if(pokedata.types[1].type.name == 'dark') {
              var color_Class_2 = styles.type_Dark;
            }
            if(pokedata.types[1].type.name == 'ice') {
              var color_Class_2 = styles.type_Ice;
            }
            if(pokedata.types[1].type.name == 'dragon') {
              var color_Class_2 = styles.type_Dragon;
            }
            if(pokedata.types[1].type.name == 'normal') {
              var color_Class_2 = styles.type_Normal;
            }
            if(pokedata.types[1].type.name == 'bug') {
              var color_Class_2 = styles.type_Bug;
            }
            if(pokedata.types[1].type.name == 'electric') {
              var color_Class_2 = styles.type_Eletric;
            }
            if(pokedata.types[1].type.name == 'fighting') {
              var color_Class_2 = styles.type_Grass;
            }
            if(pokedata.types[1].type.name == 'fire') {
              var color_Class_2 = styles.type_Fire;
            }
            if(pokedata.types[1].type.name == 'steel') {
              var color_Class_2 = styles.type_Steel;
            }
            if(pokedata.types[1].type.name == 'ghost') {
              var color_Class_2 = styles.type_Ghost;
            }
            if(pokedata.types[1].type.name == 'flying') {
              var color_Class_2 = styles.type_Flying;
            }
            if(pokedata.types[1].type.name == 'psychic') {
              var color_Class_2 = styles.type_Psychic;
            }
          }
        }
        return (<><p className={color_Class}> {pokedata.types[0].type.name} </p> <p className={color_Class_2}> {pokedata.types[1].type.name} </p></>)
      }
      else {
        for(var i = 0; i <= poketypes.length; i++) {
          if(poketypes[i] == pokedata.types[0].type.name) {
            if(pokedata.types[0].type.name == 'grass') {
              var color_Class = styles.type_Grass;
            }
            if(pokedata.types[0].type.name == 'poison') {
              var color_Class = styles.type_Poison;
            }
            if(pokedata.types[0].type.name == 'ground') {
              var color_Class = styles.type_Ground;
            }
            if(pokedata.types[0].type.name == 'rock') {
              var color_Class = styles.type_Rock;
            }
            if(pokedata.types[0].type.name == 'water') {
              var color_Class = styles.type_Water;
            }
            if(pokedata.types[0].type.name == 'fairy') {
              var color_Class = styles.type_Fairy;
            }
            if(pokedata.types[0].type.name == 'dark') {
              var color_Class = styles.type_Dark;
            }
            if(pokedata.types[0].type.name == 'ice') {
              var color_Class = styles.type_Ice;
            }
            if(pokedata.types[0].type.name == 'dragon') {
              var color_Class = styles.type_Dragon;
            }
            if(pokedata.types[0].type.name == 'normal') {
              var color_Class = styles.type_Normal;
            }
            if(pokedata.types[0].type.name == 'bug') {
              var color_Class = styles.type_Bug;
            }
            if(pokedata.types[0].type.name == 'electric') {
              var color_Class = styles.type_Eletric;
            }
            if(pokedata.types[0].type.name == 'fighting') {
              var color_Class = styles.type_Grass;
            }
            if(pokedata.types[0].type.name == 'fire') {
              var color_Class = styles.type_Fire;
            }
            if(pokedata.types[0].type.name == 'steel') {
              var color_Class = styles.type_Steel;
            }
            if(pokedata.types[0].type.name == 'ghost') {
              var color_Class = styles.type_Ghost;
            }
            if(pokedata.types[0].type.name == 'flying') {
              var color_Class = styles.type_Flying;
            }
            if(pokedata.types[0].type.name == 'psychic') {
              var color_Class = styles.type_Psychic;
            }
            return (<><p className={color_Class} style={{width: 50}}> {pokedata.types[0].type.name} </p></>)
          }
        }}
    }


    useEffect(() => {
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setPokedata(one_pokemon_url));
      // console.log(pokedata)
    })

    if (pokedata.sprites) {
      return (
        <div className={styles.PokeCards}>
          <div className={styles.Card}>
          <img src={pokedata.sprites.front_default} style={{width: '100px', height: 'auto'}} alt={pokemon.name}></img>
          <div className="values">
            <h4 className={styles.card_title}> {pokemon.name} </h4>
            <div className={styles.typesDiv}>{ShowType()}</div>
          </div>
          </div>
        </div>
      )
    }

  }

export default EachPokemon;