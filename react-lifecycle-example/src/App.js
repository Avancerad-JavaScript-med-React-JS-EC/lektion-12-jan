import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    //Denna metod körs enbart vid sidladdning en gång
    super();
    this.state = { date: new Date() }
  }

  componentDidMount() {
    //Denna metod körs enbart en gång vid sidladdning
    console.log('I componentDidMount');
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate() {
    //Denna metod körs varje gång som setState har triggats efter metoden render()
    console.log('I componentDidUpdate');
  }

  tick() {
    //Uppdaterar state och triggar en ny render()
    this.setState({ date: new Date() });
  }

  render() {
    //Denna funktion körs varje gång state uppdateras alltså när setState körs
    console.log('State uppdateras, renderar om');
    return (
      <div>
        <h1>Show me the time!</h1>
        <h2>It is { this.state.date.toLocaleTimeString() }</h2>
        <button onClick={ () => this.tick() }>Update time</button>
      </div>
    )
  }
}

export default App;
