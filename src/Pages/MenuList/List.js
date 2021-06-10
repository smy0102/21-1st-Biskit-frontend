import React from 'react';
class List extends React.Component {
  render() {
    return (
      <li className="menuLi">
        <img
          className="menuImg"
          src="../images/MenuList/dummysnack.jpg"
          alt="snack"
        />
        <div className="recommend">
          <span className="limited">기간한정</span>
          <span className="name">NEW</span>
        </div>
        <div className="menuInfo">
          <span>100g</span>
          <span>300kcal</span>
          <span>맛</span>
          <p className="title">손이가요 새우깡</p>
          <p className="price">10,000원</p>
        </div>
        <div className="reviewWarp">
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
