import React, { Component } from 'react';
import CartInformation from './CartInformation';
import PutCart from './PutCart';
import './detailBody.scss';

class DetailBody extends Component {
  render() {
    return (
      <section className="DetailBody">
        <div className="detailGnb">
          <ul>
            <li>상세설명</li>
            <li>상품정보</li>
            <li>리뷰(103개)</li>
            <li>배송/반품/문의</li>
          </ul>
        </div>
        <div className="detailContents">
          <article className="descriptions">
            <img alt="descriptions" src="/images/ProdDetail/detail.jpeg" />
          </article>
          <article className="sideCart">
            <select name="date">
              <option value="">배송받을 날짜를 선택하세요</option>
              <option value="날짜1">날짜1</option>
              <option value="날짜2">날짜2</option>
              <option value="날짜3">날짜3</option>
              <option value="날짜4">날짜4</option>
              <option value="날짜5">날짜5</option>
            </select>
            <div className="bodyCartInformation">
              <CartInformation />
            </div>
            <PutCart className="bodyPutCart" />
          </article>
          {/* <article className="Information"></article>
          <article className="review"></article>
          <article className="delivery"></article> */}
        </div>
      </section>
    );
  }
}

export default DetailBody;
