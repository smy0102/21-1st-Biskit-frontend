import React from 'react';
import './Cart.scss';
import { withRouter } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Cart">
        <article className="title">
          <h1>장바구니</h1>
          <div>
            <div>
              <div className="iconBackground cartIcon">
                <img alt="cart" src="/images/cart/shopping-cart.png" />
              </div>
              <div className="iconText">장바구니</div>
            </div>
            <div>
              <div className="iconBackground">
                <img alt="cart" src="/images/cart/payment.png" />
              </div>
              <div className="iconText">주문결제</div>
            </div>
            <div>
              <div className="iconBackground">
                <img alt="cart" src="/images/cart/order.png" />
              </div>
              <div className="iconText">주문완료</div>
            </div>
          </div>
        </article>
        <article className="cartInformation">
          <div className="cartTop">
            <input type="checkbox" value={true} className="selectButton" />
            <div>
              총 <span>3</span>/<span>3</span>개
            </div>
            <button>선택삭제</button>
          </div>
          <div className="shoppingList">
            <div className="arrivalDate">
              <input type="checkbox" value={true} className="selectButton" />
              <div>2021-06-16(수) 도착예정</div>
            </div>
            <div className="shoppingProduct">
              <input type="checkbox" value={true} className="selectButton" />
              <img
                alt="product"
                src="https://img.cjcookit.com/images/file/product/158/20210318090428085.jpg?RS=120x120"
              />
              <div className="prodcutInfo">
                <div>감바스알아히요</div>
                <div>15,600원</div>
              </div>
              <div className="quantityButtons">
                <button className="quantityMinus">&#45;</button>
                <span>1</span>
                <button className="quantityPlus">+</button>
              </div>
              <div className="productPrice">15,600원</div>
              <button className="deleteButton">X</button>
            </div>
            <div className="shoppingProduct">
              <input type="checkbox" value={true} className="selectButton" />
              <img
                alt="product"
                src="https://img.cjcookit.com/images/file/product/158/20210318090428085.jpg?RS=120x120"
              />
              <div className="prodcutInfo">
                <div>감바스알아히요</div>
                <div>15,600원</div>
              </div>
              <div className="quantityButtons">
                <button className="quantityMinus">&#45;</button>
                <span>1</span>
                <button className="quantityPlus">+</button>
              </div>
              <div className="productPrice">15,600원</div>
              <button className="deleteButton">X</button>
            </div>
            <div className="shoppingPrice">
              <span>상품금액 15,600원</span>
              <span>+</span>
              <span>배송비 0원</span>
              <span>=</span>
              <span>총 39,400원</span>
            </div>
          </div>
          <div className="totalShoppingPrice">
            <div>
              <div className="priceTitle">총 상품금액</div>
              <div className="accent">15,600원</div>
            </div>
            <div className="priceOperator">-</div>
            <div>
              <div className="priceTitle">총 할인금액</div>
              <div className="accent">0원</div>
            </div>
            <div className="priceOperator">+</div>
            <div>
              <div className="priceTitle">총 배송비</div>
              <div className="accent">0원</div>
            </div>
            <div className="priceOperator">=</div>
            <div>
              <div className="priceTitle">총 결제예정금액</div>
              <div className="totalPrice">15,600원</div>
            </div>
          </div>
          <div className="purchaseButtons">
            <button className="selectedButton">선택 주문하기</button>
            <button className="allButton">전체 주문하기</button>
          </div>
        </article>
      </div>
    );
  }
}
export default withRouter(Cart);
