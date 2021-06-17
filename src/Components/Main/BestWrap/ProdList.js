import React from 'react';
import { Link } from 'react-router-dom';

class ProdList extends React.Component {
  render() {
    const { id, images, title, price, gram } = this.props;
    return (
      <li>
        <div className="proModule" key={id}>
          <div className="imgWrap">
            <Link to={`/prodDtail/${id + 1}`} className="count">
              <img alt="하노이식 분짜" src={images}></img>
              <span className="flagNumBest">
                <span>Best</span>0{id + 1}
              </span>
            </Link>
          </div>
          <div className="txtWrap">
            <Link to={`/prodDtail/${id + 1}`} class="count">
              <span className="textInfo">{title}</span>
              <div className="priceInfo">
                <p className="sale">
                  <span className="price">{price}</span>
                  <span className="won">원</span>
                </p>
                <p className="servings">/ {gram}g</p>
              </div>
            </Link>
          </div>
          <div className="actBtnWrap">
            <button type="button" className="btnCart" />
          </div>
        </div>
      </li>
    );
  }
}

export default ProdList;
