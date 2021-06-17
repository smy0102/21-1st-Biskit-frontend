import React from 'react';
import { withRouter } from 'react-router-dom';
import ShoppingProduct from '../../Components/Cart/ShoppingProduct/ShppingProduct';
import EmptyCart from '../../Components/Cart/EmptyCart/EmptyCart';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      selectedArr: [],
      deletedArr: [],
      resultPrice: 0,
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
    this.setState({ selectedArr: newCheck }, this.handleAllSelector);
  };

  handleAllSelector = () => {
    const checkedItems = this.state.selectedArr.every(list => list);
    this.setState({ selectedAll: checkedItems });
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

    this.setState(
      {
        listData: filteredData,
        selectedArr: Array(filteredData.length).fill(false),
      },
      this.calculatePrice
    );
  };

  calculatePrice = () => {
    const { listData } = this.state;

    const resultPrice = listData.reduce(
      (pre, curr) => pre + parseInt(curr.quantity * curr.price),
      0
    );
    this.setState({ resultPrice });
  };

  selectDelete = () => {
    const { listData, selectedArr } = this.state;
    const checkedArr = [];
    let idx = selectedArr.indexOf(true);
    while (idx !== -1) {
      checkedArr.push(idx);
      idx = selectedArr.indexOf(true, idx + 1);
      console.log(idx);
    }
    const newCheckedArr = listData.filter(cartItem => {
      return !checkedArr.includes(parseInt(cartItem.id));
    });
    const newDeletedArr = listData.filter(cartItem => {
      return checkedArr.includes(parseInt(cartItem.id));
    });
    this.setState({
      listData: newCheckedArr,
      deletedArr: newDeletedArr,
      selectedArr: Array(newCheckedArr.length).fill(false),
    });
  };

  render() {
    const { listData, resultPrice } = this.state;
    return listData.length === 0 ? (
      <EmptyCart />
    ) : (
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
              총
              <span>
                {this.state.selectedArr.filter(el => true === el).length}
              </span>
              /<span>{this.state.listData.length}</span>개
            </div>
            <button onClick={this.selectDelete}>선택삭제</button>
          </div>
          <div className="ShoppingList">
            {listData.map((data, index) => {
              return (
                <ShoppingProduct
                  id={index}
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
              <div className="accent">{resultPrice.toLocaleString()}원</div>
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
              <div className="totalPrice">{resultPrice.toLocaleString()}원</div>
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
