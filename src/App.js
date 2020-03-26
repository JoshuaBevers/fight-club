import React, { Component } from 'react';
import Card from "./components/Card.jsx";
import './App.css';

let player1 = {
  name: "Bob",
  age: 22,
  role: "Barbarian",
  race: "Halfling",
  health: 20,
  level: 1
}

let player2 = {
  name: "Fred",
  age: 22.5,
  role: "Bighterman",
  race: "Human",
  health: 20,
  level: 1
}

class App extends Component {
  state = {
    players: [player1, player2],
  }

  fight(index) {
    console.log("Welcome to Mortal Kombat, fools...");
    const attacking = { ...this.state.players[index] },
      defending = { ...this.state.players[index === 0 ? 1 : 0] };
    if (Math.random() > 0.5) {
      console.log(attacking.name + " hit " + defending.name + "!");
      defending.health -= 1;
    };
    console.log(attacking, defending);
    if (index === 0) {
      this.setState({
        players: [attacking, defending],
      })
    } else {
      this.setState({
        players: [defending, attacking],
      })
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Fight Club
          </p>
        </header>
        <section>
          <div className="row">
            {this.state.players.map((card, index) =>
              <Card name={card.name} age={card.age} role={card.role} race={card.race} health={card.health} level={card.level} key={index} fight={this.fight.bind(this, index)}/>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
