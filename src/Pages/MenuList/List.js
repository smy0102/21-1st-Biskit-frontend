import React from 'react';
import './list.scss';

class List extends React.Component {
  render() {
    const { img, title, price, taste, calorie, gram } = this.props;
    console.log(taste);
    return (
      <li className="menuLi">
        <img className="menuImg" src={img} alt="snack" />
        <div className="recommend">
          <span className="limited">기간한정</span>
          <span className="name">NEW</span>
        </div>
        <div className="menuInfo">
          <span className="listInfo">{gram}g</span>
          <span className="listInfo">{calorie}kcal</span>
          <span className="tasteWrap">
            {taste.map(a => {
              return <span className="tasteMap">{a}</span>;
            })}
          </span>
          <p className="title">{title}</p>
          <p className="price">{price}원</p>
        </div>
        <div className="reviewWrap">
          <span className="review">★★★★☆</span>
          <span className="reviewCount">리뷰 100</span>
        </div>
        <div className="iconBox">
          <button>
            <img src="../images/MenuList/like.png" alt="like" />
          </button>
          <button>
            <img src="../images/MenuList/listBasket.png" alt="listBasket" />
          </button>
        </div>
      </li>
    );
  }
}

export default List;
