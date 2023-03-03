import styles from './App.css'
import Home from './pages/Home';

import Login from './pages/Login'
import { useState } from 'react';


function App() {

  return (
    <div className={styles.App}>
      <Home />
    </div>
  )
}

export default App
