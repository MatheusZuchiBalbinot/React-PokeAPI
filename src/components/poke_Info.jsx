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

    function PokeScreen() {
      const typesArray = [];
      if(pokedata.types) {
        typesArray.push(pokedata.types[0].type.name);
        if(pokedata.types[1]) {
          typesArray.push(pokedata.types[1].type.name)
        }
      }
      // console.log(pokedata);
      
      const status_hp = pokedata.stats[0].base_stat;
      const status_attack = pokedata.stats[1].base_stat;
      const status_defense = pokedata.stats[2].base_stat;
      const status_spAttack = pokedata.stats[3].base_stat;
      const status_spDefense = pokedata.stats[4].base_stat;
      const status_speed = pokedata.stats[5].base_stat;

      const form_shiny = pokedata.sprites.front_shiny;

      const pokeDict = {
        name: pokemon.name,
        shiny: form_shiny,
        types: typesArray,
        stats: {
          hp: status_hp,
          attack: status_attack,
          defense: status_defense,
          spAttack: status_spAttack,
          spDefense: status_spDefense,
          speed: status_speed,
        },
      }
      // console.log(pokeDict)
      
    const buy_screen_div = document.getElementById('poke_screen').innerHTML = `<div id="screen"  style="width: 50vw; height: auto; background-color: white; color: black; position: fixed; box-shadow: 0 0 0 99999px rgba(0, 0, 0, .8); z-index: 1; justify-content: center; left: 25vw; top: 10vh; margin: 2vw; margin: 0;"></div> `;
    const screen_location =  document.getElementById("screen");

    function show_screen_types() {
      if(pokedata.types[1]){
        // console.log(pokedata.types[0].type.name+'e'+ pokedata.types[1].type.name)
        return(pokedata.types[0].type.name+ ' / ' + pokedata.types[1].type.name)
      }
      return(pokedata.types[0].type.name)
    }

    function avaliatingTheOverall() {
      const sum = pokeDict.stats.speed + pokeDict.stats.attack + pokeDict.stats.spAttack + pokeDict.stats.spDefense + pokeDict.stats.defense;
      if(sum > 0 && sum < 360) {
        var message = "Esse pokemon tem um Overall baixo.";
      }
      if(sum >= 360 && sum < 480) {
        var message = "Esse pokemon tem um Overall medíocre.";
      }
      if(sum >= 480 && sum < 600) {
        var message = "Esse pokemon tem um Overall bom.";
      }
      if(sum >= 600) {
        var message = "Esse pokemon tem um Overall perfeito.";
      }
        return(sum + '. <br>'+message);
    }

    function avaliatingTheStats( one_stat ) {
      if(one_stat <= 50) {
        return ('#ff0f35')
      }
      if(one_stat > 50 && one_stat <= 99) {
        return('#f1c972')
      }
      else {
        return('#7ebea3')
      }
    }

    screen_location.innerHTML = 
    `
    <div class=`+styles.divPoke_screen+` > 
      <h3 class=`+styles.poke_title+` style="text-transform: capitalize; padding: 1vw 0.5vw 1vw 0.5vw; margin: auto;"> ` +pokeDict.name+ ` </h3>  
      <div class=`+styles.poke_image+`>
      <img id="poke_image" src="` + pokedata.sprites.front_default + `" title="Normal">
      <img id="poke_image" src="` + pokedata.sprites.front_shiny + `" title="Shiny">
      </div>
      <div class=`+styles.status+` style="padding: 1vw 0.5vw 1vw 0.5vw; margin: auto;"> 
      <h5 style="font-size: 1.2vw; margin: auto; padding: 0vw 0vw 0.8vw 0vw;"> Os Status do pokemon são: </h5>
        <div class"status_value">
          <p> Attack: </p>
          <div class=`+styles.background_status_bar+`>
          <div class=`+styles.status_bar+` style="width:` + pokeDict.stats.attack + `px; background-color: `+avaliatingTheStats(pokeDict.stats.attack)+`"> ` +  pokeDict.stats.attack + ` </div>
        </div>
          <p> Defense: </p>
          <div class=`+styles.background_status_bar+`>
          <div class=`+styles.status_bar+` style="width:` + pokeDict.stats.defense + `px; background-color:`+avaliatingTheStats(pokeDict.stats.defense)+`"> ` +  pokeDict.stats.defense + ` </div>
        </div>
          <p> spAttack: </p>
          <div class=`+styles.background_status_bar+`>
          <div class=`+styles.status_bar+` style="width:` + pokeDict.stats.spAttack + `px; background-color: `+avaliatingTheStats(pokeDict.stats.spAttack)+`"> ` +  pokeDict.stats.spAttack + ` </div>
        </div>
          <p> spDefense: </p>
          <div class=`+styles.background_status_bar+`>
          <div class=`+styles.status_bar+` style="width:` + pokeDict.stats.spDefense + `px; background-color: `+avaliatingTheStats(pokeDict.stats.spDefense)+`"> ` +  pokeDict.stats.spDefense + ` </div>
        </div>
          <p> Speed: </p>
          <div class=`+styles.background_status_bar+`>
          <div class=`+styles.status_bar+` style="width:` + pokeDict.stats.speed + `px; background-color: `+avaliatingTheStats(pokeDict.stats.speed)+`"> ` +  pokeDict.stats.speed + ` </div>
        </div>
        </div>
        <h5 style="padding: 1vw 0 1vw 0; text-align: center;"> A soma total é: `+ avaliatingTheOverall() +`</h5>
      </div>
        <div class=`+styles.types+`> 
          <p> O pokemon possui o/os tipo/s: </p>
          <p style="text-transform: capitalize; font-size: 1.5vw; font-weight: bold;"> `+ show_screen_types() +` </p
        </div>
      </div>
      <div class=`+styles.poke_buttons+` style="padding: 1.2vw 0.5vw 1.2vw 0.5vw">
        <button type="button" onclick={poke_screen.style.display="none"}> Voltar </button>
        <button type="button" onclick=""> Adicionar a Equipe </button>
      </div>
    </div>
    `
    poke_screen.style.display = "";

    }

    useEffect(() => {
      fetch(pokemon.url).then((res) => res.json()).then((one_pokemon_url) => setPokedata(one_pokemon_url));
      // console.log(pokedata)
    })

    if (pokedata.sprites) {
        return (
          <div className={styles.PokeCards} onClick={PokeScreen}>
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