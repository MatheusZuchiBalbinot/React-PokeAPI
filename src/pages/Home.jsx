import Header from '../components/Header';
import Poke_Card from '../components/Poke_Card';
import Login from './Login';

import { useState } from 'react';

function Home() {

    return (
        <div>
            {/* <Login /> */}
            <Header />
            <Poke_Card />
        </div>
    )
}
export default Home;