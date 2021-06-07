import React from 'react';
import './Main.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default Main;
