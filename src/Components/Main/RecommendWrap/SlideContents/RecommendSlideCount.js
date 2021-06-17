import React from 'react';
import { Link } from 'react-router-dom';

class RecommendSlideCount extends React.Component {
  render() {
    const { id, images, title, price, gram } = this.props;
    return (
      <li class="slideCount" key={id}>
        <div className="proModule">
          <div className="imgWrap">
            <Link to="/" class="count">
              <img alt="상품" src={images} />
            </Link>
          </div>
          <div className="txtWrap">
            <Link to="/" class="count">
              <div className="titleInfo">
                <span class="title">{title}</span>
              </div>
            </Link>
            <div className="priceInfo">
              <p className="sale">
                <span className="price">{price}</span>
                <span className="won">원</span>
              </p>
              <p className="servings">/ {gram}g</p>
              <button type="button" className="cartBtn">
                <img alt="cart" src="/images/common/icon/basket.png" />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default RecommendSlideCount;
