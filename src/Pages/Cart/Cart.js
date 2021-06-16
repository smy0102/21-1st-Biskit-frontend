import React from 'react';
import { withRouter } from 'react-router-dom';
import ShoppingProduct from '../../Components/Cart/ShoppingProduct/ShppingProduct';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      listData: [],
      resultPrice: 0,
      selectedArr: [],
      resultPirce: 0,
      selectedAll: true,
    };
  }

  componentDidMount() {
    fetch('/data/Cart/CartData.json')
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            listData: data.result,
            selectedArr: Array(data.result.length).fill(true),
          },
          this.calculatePrice
        );
      });
  }

  handleSelectedAll = () => {
    this.setState(state => ({
      selectedAll: !state.selectedAll,
    }));
  };

  inputAllCheckBox = () => {
    const checkedItems = this.state.selectedArr.every(list => list);
    const newChecked = Array(this.state.selectedArr.length).fill(!checkedItems);
    this.setState({ selectedArr: newChecked });
  };

  handleSingleBox = id => {
    const { selectedArr } = this.state;
    const newCheck = [...selectedArr];
    newCheck[id] = !newCheck[id];
    this.setState({ selectedArr: newCheck }, () => this.handleAllSelector());
  };

  handleAllSelector = () => {
    const checkedItems = this.state.selectedArr.every(list => list);
    checkedItems
      ? this.setState({ selectedAll: true })
      : this.setState({ selectedAll: false });
  };

  handleQuantity = event => {
    const { listData } = this.state;
    const { value, className } = event.target;

    if (listData[value - 1].quantity === 1 && className === 'quantityMinus') {
      return;
    }

    const changedQuantityData = listData.map(product => {
      return Number(value) !== product.id
        ? product
        : {
            ...product,
            quantity:
              className === 'quantityMinus'
                ? product.quantity - 1
                : product.quantity + 1,
          };
    });

    this.setState({ listData: changedQuantityData }, this.calculatePrice);
  };

  deleteProduct = event => {
    const { listData } = this.state;
    const { value } = event.target;

    const filteredData = listData.filter(product => {
      return Number(value) !== product.id;
    });

    this.setState({ listData: filteredData }, this.calculatePrice);
  };

  calculatePrice = () => {
    const { listData } = this.state;

    const result = listData.reduce(
      (pre, curr) => pre + parseInt(curr.quantity * curr.price),
      0
    );
    this.setState({ resultPirce: result });
  };

  render() {
    const { listData, resultPirce } = this.state;
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
            <input
              type="checkbox"
              checked={this.state.selectedAll}
              onChange={this.inputAllCheckBox}
              className="selectButton"
              onClick={this.handleSelectedAll}
            />
            <div>
              총 <span>3</span>/<span>{this.state.listData.length}</span>개
            </div>
            <button>선택삭제</button>
          </div>
          <div className="ShoppingList">
            {listData.map((data, index) => {
              return (
                <ShoppingProduct
                  id={index}
                  key={data.id}
                  listData={data}
                  handleQuantity={this.handleQuantity}
                  deleteProduct={this.deleteProduct}
                  selectedArr={this.state.selectedArr}
                  handleSingleBox={this.handleSingleBox}
                  handlea={this.handlea}
                />
              );
            })}
          </div>
          <div className="totalShoppingPrice">
            <div>
              <div className="priceTitle">총 상품금액</div>
              <div className="accent">{resultPirce.toLocaleString()}원</div>
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
              <div className="totalPrice">{resultPirce.toLocaleString()}원</div>
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
