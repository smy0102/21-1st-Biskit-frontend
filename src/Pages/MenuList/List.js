import React from 'react';
import './list.scss';
import { withRouter } from 'react-router-dom';

const createDate = () => {
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  if (month >= 10) {
    return month + date;
  } else {
    return '0' + month + date;
  }
};

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      unlike: false,
      basket: false,
    };
  }

  handleClickLikeBtn = () => {
    this.setState({
      unlike: !this.state.unlike,
    });
  };

  handleBasket = () => {
    const { price, id } = this.props;
    if (localStorage.getItem('token')) {
      fetch('http://10.58.3.9:8000/orders', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          product_id: id,
          quantity: 1,
          total_price: price,
          date: createDate(),
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            alert('상품을 장바구니에 담았습니다.');
          } else {
            alert('장바구니 실패');
          }
        });
    } else {
      alert('로그인 후 사용이 가능합니다.');
      this.props.history.push('/login');
    }
  };

  render() {
    const { img, title, price, taste, calorie, gram, id, rating, reviews } =
      this.props;
    return (
      <li className="menuLi">
        <img
          className="menuImg"
          src={img}
          alt="snack"
          onClick={() => this.props.history.push(`ProdDetail/${id}`)}
        />

        {/* <div className="recommend">
          <span className="limited">기간한정</span>
          <span className="name">NEW</span>
        </div> */}
        <div className="menuInfo">
          <span className="listInfo">{gram}g</span>
          <span className="listInfo">{calorie}kcal</span>
          <span className="tasteWrap">
            <span className="tasteMap">{taste}</span>
          </span>
          <p
            className="title"
            onClick={() => this.props.history.push(`ProdDetail/${id}`)}
          >
            {title}
          </p>
          <p className="price">{price}원</p>
        </div>
        <div className="reviewWrap">
          <span className="review">★{rating}</span>
          <span className="reviewCount">{reviews}</span>
        </div>
        <div className="iconBox">
          <button onClick={this.handleClickLikeBtn}>
            {this.state.unlike ? (
              <img src="../images/MenuList/like.png" alt="like" />
            ) : (
              <img src="../images/MenuList/unlike.png" alt="unlike" />
            )}
          </button>

          <button onClick={this.handleBasket}>
            <img src="../images/MenuList/listBasket.png" alt="listBasket" />
          </button>
        </div>
      </li>
    );
  }
}

export default withRouter(List);
