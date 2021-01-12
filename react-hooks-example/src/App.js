import './App.css';
import React, { useState } from 'react';

function App() {
  //useState returnerar en array
  //Vi plockar ut från vår array den variabel som har vårt state samt metoden för att uppdatera state
  const [name, setName] = useState('Christoffer');
  const [secondName, setSecondName] = useState('Ada');
  console.log('State: ', name);

  function update() {
    setName('Alice');
    setSecondName('Aurora');
  }

  return (
    <div className="App">
      <h2>Välkommen, { name }</h2>
      <h2>Välkommen, { secondName }</h2>
      <button onClick={ update }>Byt namn</button>
    </div>
  );
}

export default App;
