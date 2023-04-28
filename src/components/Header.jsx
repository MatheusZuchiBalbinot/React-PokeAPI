import styles from './Header.module.css';

import { BsSearch } from 'react-icons/Bs';
import { FiLogOut } from 'react-icons/fi';
import { useEffect, useState } from 'react';

import SearchPokemon from './search_Pokemon';

function Header( {pokemonsCount}) {

    const [search, setSearch] = useState('');

    function setSearchValue(e) {
        setSearch(e.target.value);
    }

    return (
        <div className={styles.main_header} >
            <div className={styles.poke_icon}>
                <img src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png" />
            </div>
            <div className={styles.header_input}>
                <input type="text" placeholder="Digite o pokemon a ser pesquisado: " onChange={(e) => setSearchValue(e)  }></input>
                <BsSearch /> 
            </div>
            <div className={styles.searched_pokemons}>
                {search ? <> <h3>Pokemons pesquisados: {pokemonsCount} </h3> <div className={styles.searched_pokemons_div}><SearchPokemon props={search}/> </div> </> : null}
            </div>
        </div>
            
    )
}

export default Header;
