import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import DetailHead from '../../Components/ProdDetail/DetailHead';
import DetailBody from '../../Components/ProdDetail/DetailBody';

class ProdDetail extends React.Component {
  render() {
    return (
      <div className="ProdDetail">
        <DetailHead />
        <DetailBody />
      </div>
    );
  }
}

export default ProdDetail;
