import React from 'react';
import './list.scss';
import { Link } from 'react-router-dom';

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
    const { img, title, price, id } = this.props;
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        product_title: title,
        product_image: img,
        product_price: price,
        quantity: 1,
        total_price: price,
        date: '',
      }),
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        console.log(res);
      });
  };

  handleBaskee = () => {
    this.props.handleBasket();
    this.setState(
      {
        basket: !this.state.basket,
      },
      () => {
        this.state.basket
          ? alert('장바구니에 담겼습니다.')
          : alert('장바구니에서 제외했습니다.');
      }
    );
  };

  render() {
    const { img, title, price, taste, calorie, gram, id, rating, reviews } =
      this.props;
    return (
      <li className="menuLi">
        <Link to={`ProdDetail/${id}`}>
          <img className="menuImg" src={img} alt="snack" />
        </Link>
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
          <p className="title">{title}</p>
          <p className="price">{price}원</p>
        </div>
        <div className="reviewWrap">
          <span className="review">{rating}점</span>
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

export default List;
