import React, { Component } from "react";
import "./App.css";
import Header from "./header/Header.js";
import Card from "./card/Card.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      montreuil: [],
      hotelDeVille: []
    };
    this.renderCards = this.renderCards.bind(this);
    this.multipleFetch = this.multipleFetch.bind(this);
  }

  multipleFetch(arr, dest) {
    Promise.all(
      arr.map(url => fetch(url)
      .then(resp => resp.json())))
      .then(resData => {
        this.setState({
          [dest]: resData
      });
    });
  }
  componentDidMount() {
    const urlHdv = [
      "https://api.jcdecaux.com/vls/v1/stations/4016?contract=paris&apiKey=8f6aecd25893a8f5ce8abb0ead6e7ff061e87ffe",
      "https://api.jcdecaux.com/vls/v1/stations/4017?contract=paris&apiKey=8f6aecd25893a8f5ce8abb0ead6e7ff061e87ffe",
      "https://api.jcdecaux.com/vls/v1/stations/4018?contract=paris&apiKey=8f6aecd25893a8f5ce8abb0ead6e7ff061e87ffe",
      "https://api.jcdecaux.com/vls/v1/stations/4103?contract=paris&apiKey=8f6aecd25893a8f5ce8abb0ead6e7ff061e87ffe"
    ];

    const urlMontreuil = [
      "https://api.jcdecaux.com/vls/v1/stations/31008?contract=paris&apiKey=8f6aecd25893a8f5ce8abb0ead6e7ff061e87ffe",
      "https://api.jcdecaux.com/vls/v1/stations/43004?contract=paris&apiKey=8f6aecd25893a8f5ce8abb0ead6e7ff061e87ffe"
    ];

    this.multipleFetch(urlHdv, "hotelDeVille");
    this.multipleFetch(urlMontreuil, "montreuil");
  }

  renderCards(arr) {
    return arr.map((el, i) => {
      return (
        <Card
          key={i}
          name={el.name}
          bikes={el.available_bikes}
          parking={el.available_bike_stands}
          adresse={el.address}
          lat={el.position.lat}
          lng={el.position.lng}
        />
      );
    });
  }

  render() {
    let montreuilCards = this.renderCards(this.state.montreuil);
    let HotelCards = this.renderCards(this.state.hotelDeVille);
    return (
      <div className="App">
        <Header />
        <div className='container pb-5 pt-5'>
          <h2 className='pb-4 display-4 text-success'>Montreuil</h2>
          <div className="card-deck">
            {montreuilCards}
          </div>
        </div>
        <div className='container-fluid pb-5 pt-5'>
          <h2 className='pb-4 display-4 text-success'>Hôtel de Ville</h2>
          <div className="card-deck ">
            {HotelCards}
          </div>
        </div>


      </div>
    );
  }
}

export default App;
