import React from 'react';
import './BestWrap.scss';
import { Link } from 'react-router-dom';

class BestWrap extends React.Component {
  render() {
    return (
      <div className="BestWrap">
        <h2 className="bestTitle">실시간 베스트</h2>
        <div className="prodList">
          <ul>
            <li>
              <div className="proModule">
                <div className="imgWrap">
                  <Link to="/" className="count">
                    <img alt="하노이식 분짜" src="images/Main/food1.jpeg"></img>
                    <span className="flagNumBest">
                      <span>Best</span>
                      01
                    </span>
                  </Link>
                </div>
                <div className="txtWrap">
                  <Link to="/" class="count">
                    <span className="textInfo">하노이식 분짜</span>
                    <div className="priceInfo">
                      <p className="sale">
                        <span className="price">25,800</span>
                        <span className="won">원</span>
                      </p>
                      <p className="servings">/ 3인분</p>
                    </div>
                  </Link>
                </div>
                <div className="actBtnWrap">
                  <button type="button" className="btnCart" />
                </div>
              </div>
            </li>
            <li>
              <div className="proModule">
                <div className="imgWrap">
                  <Link to="/" className="count">
                    <img alt="하노이식 분짜" src="images/Main/food1.jpeg"></img>
                    <span className="flagNumBest">
                      <span>Best</span>
                      02
                    </span>
                  </Link>
                </div>
                <div className="txtWrap">
                  <Link to="/" class="count">
                    <span className="textInfo">하노이식 분짜</span>
                    <div className="priceInfo">
                      <p className="sale">
                        <span className="price">25,800</span>
                        <span className="won">원</span>
                      </p>
                      <p className="servings">/ 3인분</p>
                    </div>
                  </Link>
                </div>
                <div className="actBtnWrap">
                  <button type="button" className="btnCart" />
                </div>
              </div>
            </li>
            <li>
              <div className="proModule">
                <div className="imgWrap">
                  <Link to="/" className="count">
                    <img alt="하노이식 분짜" src="images/Main/food1.jpeg"></img>
                    <span className="flagNumBest">
                      <span>Best</span>
                      03
                    </span>
                  </Link>
                </div>
                <div className="txtWrap">
                  <Link to="/" class="count">
                    <span className="textInfo">하노이식 분짜</span>
                    <div className="priceInfo">
                      <p className="sale">
                        <span className="price">25,800</span>
                        <span className="won">원</span>
                      </p>
                      <p className="servings">/ 3인분</p>
                    </div>
                  </Link>
                </div>
                <div className="actBtnWrap">
                  <button type="button" className="btnCart" />
                </div>
              </div>
            </li>
            <li>
              <div className="proModule">
                <div className="imgWrap">
                  <Link to="/" className="count">
                    <img alt="하노이식 분짜" src="images/Main/food1.jpeg"></img>
                    <span className="flagNumBest">
                      <span>Best</span>
                      04
                    </span>
                  </Link>
                </div>
                <div className="txtWrap">
                  <Link to="/" class="count">
                    <span className="textInfo">하노이식 분짜</span>
                    <div className="priceInfo">
                      <p className="sale">
                        <span className="price">25,800</span>
                        <span className="won">원</span>
                      </p>
                      <p className="servings">/ 3인분</p>
                    </div>
                  </Link>
                </div>
                <div className="actBtnWrap">
                  <button type="button" className="btnCart" />
                </div>
              </div>
            </li>
            <li>
              <div className="proModule">
                <div className="imgWrap">
                  <Link to="/" className="count">
                    <img alt="하노이식 분짜" src="images/Main/food1.jpeg"></img>
                    <span className="flagNumBest">
                      <span>Best</span>
                      05
                    </span>
                  </Link>
                </div>
                <div className="txtWrap">
                  <Link to="/" class="count">
                    <span className="textInfo">하노이식 분짜</span>
                    <div className="priceInfo">
                      <p className="sale">
                        <span className="price">25,800</span>
                        <span className="won">원</span>
                      </p>
                      <p className="servings">/ 3인분</p>
                    </div>
                  </Link>
                </div>
                <div className="actBtnWrap">
                  <button type="button" className="btnCart" />
                </div>
              </div>
            </li>
            <li>
              <div className="proModule">
                <div className="imgWrap">
                  <Link to="/" className="count">
                    <img alt="하노이식 분짜" src="images/Main/food1.jpeg"></img>
                    <span className="flagNumBest">
                      <span>Best</span>
                      06
                    </span>
                  </Link>
                </div>
                <div className="txtWrap">
                  <Link to="/" class="count">
                    <span className="textInfo">하노이식 분짜</span>
                    <div className="priceInfo">
                      <p className="sale">
                        <span className="price">25,800</span>
                        <span className="won">원</span>
                      </p>
                      <p className="servings">/ 3인분</p>
                    </div>
                  </Link>
                </div>
                <div className="actBtnWrap">
                  <button type="button" className="btnCart" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="moreList">
          <Link to="/">
            메뉴 더보기
            <img alt="더보기" src="images/Main/bold-arrow.png"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default BestWrap;
