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
        <img alt="product" src={listData.images} />
        <div className="prodcutInfo">
          <div>{listData.delivery_date}</div>
          <div>{listData.title}</div>
          <div>{Number(listData.price).toLocaleString()}원</div>
        </div>
        <div className="quantityButtons">
          <button
            value={listData.id}
            className="quantityMinus"
            onClick={handleQuantity}
          >
            &#45;
          </button>
          <span>{listData.quantity}</span>
          <button
            value={listData.id}
            className="quantityPlus"
            onClick={handleQuantity}
          >
            +
          </button>
        </div>
        <div className="productPrice">
          {Number(listData.price * listData.quantity).toLocaleString()}원
        </div>
        <button
          value={listData.id}
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
