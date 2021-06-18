import React, { Component } from 'react';
import './shoppingProduct.scss';

class ShppingProduct extends Component {
  render() {
    const {
      id,
      selectedArr,
      listData,
      handleQuantity,
      deleteProduct,
      handleSingleBox,
    } = this.props;

    return (
      <div className="ShoppingProduct">
        <input
          type="checkbox"
          onClick={() => handleSingleBox(id)}
          checked={selectedArr[id]}
          className="selectButton"
        />
        <img alt="product" src={listData.product_image} />
        <div className="prodcutInfo">
          <div>
            {listData.date.split('').slice(0, 2).join('') +
              '월 ' +
              listData.date.split('').slice(0, 2).join('') +
              '일 배송예정'}
          </div>
          <div>{listData.product_title}</div>
          <div>{Number(listData.product_price).toLocaleString()}원</div>
        </div>
        <div className="quantityButtons">
          <button
            value={listData.product_id}
            className="quantityMinus"
            onClick={handleQuantity}
          >
            &#45;
          </button>
          <span>{listData.quantity}</span>
          <button
            value={listData.product_id}
            className="quantityPlus"
            onClick={handleQuantity}
          >
            +
          </button>
        </div>
        <div className="productPrice">
          {Number(listData.product_price * listData.quantity).toLocaleString()}
          원
        </div>
        <button
          value={listData.product_id}
          className="deleteButton"
          onClick={deleteProduct}
        >
          X
        </button>
      </div>
    );
  }
}

export default ShppingProduct;
