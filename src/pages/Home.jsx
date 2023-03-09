import Header from '../components/Header';
import Poke_Card from '../components/Poke_Card';
import Login from './Login';

import { useState } from 'react';

function Home() {

    return (
        <>
            <div id='poke_screen'></div>
            {/* <Login /> */}
            <Header />
            <Poke_Card />
        </>
    )
}
export default Home;