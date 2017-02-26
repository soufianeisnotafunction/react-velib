import React from "react";


class Header extends React.Component {
  render() {
    return (

      <div className="jumbotron jumbotron-fluid bg-success text-white">
        <div className="container">
          <h1 className="display-3">OPEN VELIB</h1>
          <p className="lead">Toujours au parfum</p>
        </div>
      </div>

    );
  }
}

export default Header;
