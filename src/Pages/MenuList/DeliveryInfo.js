import React from 'react';

class DeliveryInfo extends React.Component {
  render() {
    return (
      <p className="deliveryDay">
        {this.props.cate === '전체' ? '모든' : this.props.cate}요일 배송가능한
        메뉴입니다.
      </p>
    );
  }
}

export default DeliveryInfo;
