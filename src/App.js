import React from "react";

import Calendar from "./components/Calendar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              Over<b>Booked</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />

        </main>
        <div className="side-bar">
        <h2>Available Slots</h2>
      </div>
      </div>
    );
  }
}

export default App;
//
