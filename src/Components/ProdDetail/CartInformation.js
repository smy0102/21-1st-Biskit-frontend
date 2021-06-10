import React, { Component } from 'react';
import './cartInformation.scss';

class CartInformation extends Component {
  constructor() {
    super();
    this.state = {
      deliveryDate: '',
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="CartInformation">
        <div className="deliveryDate">
          <div>2021-07-06(화)</div>
          <div>X</div>
        </div>
        <div className="selectQuantity">
          <div className="productTitle">*애호박 돼지고기짜글이</div>
          <div className="quantityButtons">
            <button className="quantityMinus">&#45;</button>
            <span>1</span>
            <button className="quantityPlus">+</button>
          </div>
          <div>28,000원</div>
        </div>
      </div>
    );
  }
}

export default CartInformation;
