import React, { Component } from 'react';
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
