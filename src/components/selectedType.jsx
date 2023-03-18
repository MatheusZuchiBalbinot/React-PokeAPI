function SelectedType({pokedata, clickedtype_value}) {
    // console.log(clickedtype_value);
    // console.log(pokemon)
    if(clickedtype_value) {
        console.log(pokedata);
        if(pokedata) {
            console.log('a')
            if(clickedtype_value === pokemon.types[0].type.name) {
                console.log(pokemon.name)
            }
        }
    }
}

export default SelectedType;