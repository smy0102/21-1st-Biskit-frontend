import React from 'react';
import { Link } from 'react-router-dom';
import './GridWrap.scss';

class GridWrap extends React.Component {
  render() {
    const { getMonth, getDate, days, getDay, hours, mins, secs } = this.props;
    return (
      <div className="GridWrap">
        <div className="leftArea gridArea">
          <Link to="/">
            <strong>우리집도 BISKIT 배송이 되나요?</strong>
            <p>배송이 가능한지 알려드려요.</p>
            <span className="linkMap link">
              <img alt="area" src="images/Main/maps-and-flags.png"></img>
              <span>배송지 검색</span>
            </span>
            <img alt="areaIcon" src="images/Main/delivery-truck.png"></img>
          </Link>
        </div>
        <div className="rightArea gridArea">
          <Link to="/">
            <strong>
              {getMonth + 1}월 {getDate + 2}일(
              {days[getDay + 1]})에 받을 수 있어요
            </strong>
            <p>오전 7시까지 주문하시면 다음날 배송됩니다</p>
            <span className="linkTime link">
              <img alt="area" src="images/Main/clock.png"></img>
              <span>
                {hours >= 24
                  ? `0${hours - 24}`
                  : hours < 10
                  ? '0' + hours
                  : hours}
                :{mins < 10 ? '0' + mins : mins}:{secs < 10 ? '0' + secs : secs}
              </span>
              <span class="timeRemaining">남은시간</span>
            </span>
            <img
              className="cookie"
              alt="areaIcon"
              src="images/Main/cookies.png"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default GridWrap;
