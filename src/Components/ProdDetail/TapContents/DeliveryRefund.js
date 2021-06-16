import React, { Component } from 'react';
import './deliveryRefund.scss';

class DeliveryRefund extends Component {
  render() {
    return (
      <div className="DeliveryRefund">
        <div className="question">
          <div>
            <h1>상품 관련 문의해 주세요.</h1>
            <p>고객님의 질문에 정성껏 빠르게 답변해 드리겠습니다.</p>
            <p>
              작성해주신 문의내역 및 답변은 MY쿡킷 &gt; 나의활동 &gt; 1:1 문의
              내역 메뉴에서 확인 가능합니다.
            </p>
          </div>
          <button>1:1 문의</button>
        </div>
        <div className="deliveryRefundWrap">
          <div className="container">
            <div className="title">배송안내</div>
            <img alt="delivery notice" src="/images/ProdDetail/delivery.png" />
          </div>
          <div className="container">
            <div className="title">변경/취소/반품 안내</div>
            <img alt="delivery notice" src="/images/ProdDetail/refund.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryRefund;
