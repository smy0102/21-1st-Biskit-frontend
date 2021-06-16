import React from 'react';
import './list.scss';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    const {
      img,
      title,
      price,
      taste,
      calorie,
      gram,
      handlelikeBtn,
      id,
      rating,
      reviews,
    } = this.props;
    return (
      <li className="menuLi">
        <Link to={`ProdDetail/${id}`}>
          <img className="menuImg" src={img} alt="snack" />
        </Link>
        <div className="recommend">
          <span className="limited">기간한정</span>
          <span className="name">NEW</span>
        </div>
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
          <button onClick={handlelikeBtn}>
            {this.props.unlike !== false ? (
              <img src="../images/MenuList/like.png" alt="like" />
            ) : (
              <img src="../images/MenuList/unlike.png" alt="unlike" />
            )}
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
