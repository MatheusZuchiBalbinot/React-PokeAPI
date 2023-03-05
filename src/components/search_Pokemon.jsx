import Header from "./Header";
import EachPokemon from "./poke_Info";

var searched_Pokemons = [];

const SearchPokemon = ({props, pokemon}) => { 
    // console.log(props)
    // { list.map((item) => <> <EachPokemon pokemon={item} /> <SearchPokemon pokemon={item}/> </>)}

    if(pokemon) {
        searched_Pokemons.push(pokemon.name)
        // console.log(pokemon.name)
        // console.log(pokemon.length)
        // console.log(searched_Pokemons);
    }
    // console.log(searched_Pokemons.length);
    for(var i = 0; i < searched_Pokemons.length; i++) {
        // console.log(searched_Pokemons[i])
        // console.log(props)
        if(props) {
            if(searched_Pokemons[i].includes(props)) {
                // searched_Pokemons.push(searched_Pokemons[i].name);
                console.log(searched_Pokemons[i]);
        }
    }
    }
    // setPokedata(searched_Pokemons);
    }

export default SearchPokemon;