import styles from './Header.module.css';
import { FiLogOut } from 'react-icons/fi';
import { BsSearch } from 'react-icons/Bs';

function Header() {
    return (
        <div className={styles.main_header} >
            <div className={styles.poke_icon}>
                <img src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png" />
                {/* AQUI VAI TER UM GIF DE POKEBOLA ABRINDO */}
            </div>
            <div  className={styles.header_input}>
                <input type="text" placeholder="Digite o pokemon a ser pesquisado: "></input>
                <button type="submit"> <BsSearch /> </button>
            </div>
            <div className={styles.logout_icon}>
                <FiLogOut  />
            </div>
        </div>
    )
}

export default Header;