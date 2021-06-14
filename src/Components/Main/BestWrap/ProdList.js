import React from 'react';
import { Link } from 'react-router-dom';

class ProdList extends React.Component {
  render() {
    return (
      <li>
        <div className="proModule" key={this.props.id}>
          <div className="imgWrap">
            <Link to="/" className="count">
              <img alt="하노이식 분짜" src={this.props.images}></img>
              <span className="flagNumBest">
                <span>Best</span>0{this.props.id}
              </span>
            </Link>
          </div>
          <div className="txtWrap">
            <Link to="/" class="count">
              <span className="textInfo">{this.props.title}</span>
              <div className="priceInfo">
                <p className="sale">
                  <span className="price">{this.props.price}</span>
                  <span className="won">원</span>
                </p>
                <p className="servings">/ {this.props.gram}</p>
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
