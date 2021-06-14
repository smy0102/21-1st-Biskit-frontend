import React, { Component } from 'react';
import './TapList.scss';

const tapArr = ['상세설명', '상품정보', '리뷰', '배송/반품/문의'];

class TapList extends Component {
  render() {
    const { activatedTap, handleTap, reviewCount } = this.props;
    return (
      <div className="TapList">
        <ul>
          {tapArr.map((tap, idx) => {
            return (
              <li
                key={idx}
                id={idx}
                className={Number(activatedTap) === idx && 'tapOn'}
                onClick={handleTap}
              >
                {tap}
                {idx === 2 && `(${reviewCount}개)`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TapList;
