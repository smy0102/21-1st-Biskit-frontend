import React, { Component } from 'react';
import './headOrderInformation.scss';
import './bodyOrderInformation.scss';

class OrderInformation extends Component {
  render() {
    const {
      mainTitle,
      price,
      deliveryDateArr,
      selectedDate,
      quantity,
      resultPrice,
      className,
      isSelectBoxOn,
      isLike,
      setDeliveryDate,
      selectDeliveryDate,
      subtractQuantity,
      addQuantity,
      closeSelectBox,
      handleLike,
      putCart,
    } = this.props;

    return (
      <div className={className}>
        <select
          name="date"
          onFocus={setDeliveryDate}
          onChange={selectDeliveryDate}
        >
          <option value="">배송받을 날짜를 선택하세요</option>
          {deliveryDateArr.map(date => {
            return (
              <option key={date.toString()} value={date}>
                {date}
              </option>
            );
          })}
        </select>
        <div
          className="CartInformation"
          style={!isSelectBoxOn ? { display: 'none' } : {}}
        >
          <div className="deliveryDate">
            <div>{selectedDate}</div>
            <button onClick={closeSelectBox}>X</button>
          </div>
          <div className="selectQuantity">
            <div className="productTitle">{mainTitle}</div>
            <div className="quantityButtons">
              <button className="quantityMinus" onClick={subtractQuantity}>
                &#45;
              </button>
              <span>{quantity}</span>
              <button className="quantityPlus" onClick={addQuantity}>
                +
              </button>
            </div>
            <div>{parseInt(price).toLocaleString()}원</div>
          </div>
        </div>
        <div className="putCart">
          <div className="selectedInfo">
            <div className="finalQuantity">수량 {quantity}개</div>
            <div className="finalPrice">{resultPrice}원</div>
          </div>
          <div className="finalButtons">
            <button className="likeButton">
              <img
                alt="heart"
                src={
                  isLike
                    ? '/images/ProdDetail/like-icon.png'
                    : '/images/ProdDetail/unlike-icon.png'
                }
                onClick={handleLike}
              />
            </button>
            <button className="cartButton" onClick={putCart}>
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderInformation;
