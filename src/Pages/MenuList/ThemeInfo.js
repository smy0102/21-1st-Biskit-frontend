import React from 'react';

class ThemeInfo extends React.Component {
  render() {
    return (
      <p className="deliveryDay">
        {this.props.tastes === '전체'
          ? `전체 추천메뉴 입니다.`
          : ` #${this.props.tastes} 추천 메뉴입니다.`}
      </p>
    );
  }
}

export default ThemeInfo;
