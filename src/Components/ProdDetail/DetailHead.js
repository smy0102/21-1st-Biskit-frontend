import React, { Component } from 'react';
import ProductPictures from './ProductPictures';
import CartInformation from './CartInformation';
import PutCart from './PutCart';
import './detailHead.scss';

class DetailHead extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     deliveryDate: '',
  //   };
  // }

  // setDeliveryDate = () => {
  //   let setDate = [];
  //   for (let i = 0; i < 5; i++) {
  //     setDate[i] = 1;
  //   }
  // };

  render() {
    return (
      <header className="DetailHead">
        <article className="headLeft">
          <ProductPictures />
          <div className="subInfo">
            <div className="evaluation">
              <div>
                ★★★★★ <span>5.0</span>
              </div>
              <div className="reviewCount">
                리뷰수 <span>103</span>
              </div>
            </div>
            <div div className="recipeShare">
              <div>
                <img alt="recipe" src="/images/ProdDetail/recipe-icon.png" />
                <p>레시피</p>
              </div>
              <div>
                <img alt="share" src="/images/ProdDetail/share-icon.png" />
                <p>공유하기</p>
              </div>
            </div>
          </div>
        </article>
        <article className="headRight">
          <div className="flagWrap">
            <span className="limitedFlag">한정수량</span>
            <span className="newFlag">NEW</span>
          </div>
          <div className="titleWrap">
            <div className="subTitle">도톰한 돼지목살과 큼직한 채소</div>
            <div className="mainTitle">*애호박 돼지고기짜글이</div>
            <div className="origin">원산지: 상품정보 참조</div>
          </div>
          <div className="subInfo">
            <div className="gram"> 150g</div>
            <div className="calorie"> 1,200Kcal</div>
            <div className="taste"> 매운맛</div>
          </div>
          <div className="priceInfo">
            <div className="priceTitle">판매가</div>
            <div className="priceText">28,000원</div>
          </div>
          <div className="pointInfo">
            <div className="pointTitle">포인트적립</div>
            <div className="pointText">
              Biskit 포인트 &nbsp;<span>0.2% 적립</span>&nbsp;{' '}
              <img alt="question" src="/images/ProdDetail/question-icon.png" />
            </div>
          </div>
          <div className="deliverymethod">
            <div className="deliverymethodTitle">배송방법</div>
            <div className="deliverymethodText">
              새벽배송&nbsp;{' '}
              <img alt="question" src="/images/ProdDetail/question-icon.png" />
            </div>
          </div>
          <div className="deliveryprice">
            <div className="deliverypriceTitle">배송비</div>
            <div>무료배송</div>
          </div>
          <div className="cart">
            <select name="date">
              <option value="">배송받을 날짜를 선택하세요</option>
              <option value="날짜1">날짜1</option>
              <option value="날짜2">날짜2</option>
              <option value="날짜3">날짜3</option>
              <option value="날짜4">날짜4</option>
              <option value="날짜5">날짜5</option>
            </select>
            <div className="headCartInformation">
              <CartInformation />
            </div>
            <PutCart className="headPutCart" />
          </div>
        </article>
      </header>
    );
  }
}

export default DetailHead;
