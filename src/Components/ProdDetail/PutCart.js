import React, { Component } from 'react';
import './headPutCart.scss';
import './bodyPutCart.scss';

class PutCart extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="selectedInfo">
          <div className="finalQuantity">수량 1개</div>
          <div className="finalPrice">28,000원</div>
        </div>
        <div className="finalButtons">
          <button className="likeButton">
            <img alt="heart" src="/images/ProdDetail/unlike-icon.png" />
          </button>
          <button className="cartButton">장바구니 담기</button>
        </div>
      </div>
    );
  }
}

export default PutCart;
