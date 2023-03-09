function PokeScreen( {pokedata} ) {
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
      name: pokedata.name,
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
    // var screen_location = document.getElementById('root')
    // screen_location.innerHTML = `<div> `+pokeDict.name+` </div>`;
    // location.reload();

    const buy_screen_div = document.getElementById('poke_screen').innerHTML = `<div id="screen"  style="width: 50vw; height: 80vh; background-color: white; color: black; position: fixed; box-shadow: 0 0 0 99999px rgba(0, 0, 0, .8); z-index: 1; justify-content: center; left: 25vw; top: 10vh; padding: 0; margin: 0;"></div> `;
    const screen_location =  document.getElementById("screen");

    screen_location.innerHTML = 
    `
    <div className={style.divPoke_screen} > ` +pokeDict.name+ ` 
      <img src="` + pokedata.sprites.front_default + `">
      <div className='Status'> 
        <p>` + pokeDict.stats.attack + ` </p>
        <p>` + pokeDict.stats.defense + ` </p>
        <p>` + pokeDict.stats.spAttack + ` </p>
        <p>` + pokeDict.stats.spDefense + ` </p>
        <p>` + pokeDict.stats.speed + ` </p>
        <div class"Types"> 
          <p style="font-size: 1.5vw;"> O pokemon possui o/os tipos: </p>
          <p style="text-transform: capitalize"> `+ typesArray[0] +` / `+ typesArray[1] +` </p
        </div>
       
      </div>
      <button type="button" onclick={poke_screen.style.display="none"}> Voltar </button>
      <button type="button" onclick=""> Adicionar a Equipe </button>
    </div>
    `
    poke_screen.style.display = "";
  }

export default PokeScreen;