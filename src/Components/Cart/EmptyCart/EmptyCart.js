import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './emptyCart.scss';

class EmptyCart extends Component {
  render() {
    return (
      <div className="EmptyCart">
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
        <article className="EmptyCart">
          <img alt="exclamation mark" src="/images/Cart/exclamation.png" />
          <div className="noticeText">장바구니에 담긴 메뉴가 없습니다.</div>
          <div className="subText">다양한 맛을 가진 메뉴를 확인해 보세요.</div>
          <button>
            <Link to="/menuList">메뉴보러 가기 &gt;</Link>
          </button>
        </article>
      </div>
    );
  }
}

export default EmptyCart;
