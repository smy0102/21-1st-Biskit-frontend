import React from 'react';
import { Link } from 'react-router-dom';
import RecommendSlideCount from './RecommendSlideCount';
import { TASTE } from './RecommendWrapConst/GnbMenu';
import './RecommendWrap.scss';

class RecommendWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendList: [],
    };
  }
  componentDidMount() {
    fetch('/data/Main/RecommendWrap/RecommendWrap.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendList: data,
        });
      });
  }
  render() {
    const {
      isTasteClass,
      handelTasteToggleClick,
      recommendTaste,
      handleClick,
      handleTastePrevMove,
      handleTasteNextMove,
      listTransition,
      listTasteTransform,
    } = this.props;
    const { recommendList } = this.state;
    return (
      <div className="RecommendWrap">
        <div className="individ">
          <dl>
            <dt className="dt">
              <div className="major">
                <div class="row">나는</div>
                <div className="row">
                  <div className={'slideTaste ' + (isTasteClass ? 'on' : '')}>
                    <button
                      type="button"
                      className="slideHide"
                      onClick={handelTasteToggleClick}
                    >
                      <strong>{recommendTaste}</strong>
                      <img alt="arrow" src="/images/Main/bold-arrow.png" />
                    </button>
                    <div className="slideLayout">
                      {TASTE.map(el => {
                        return (
                          <button
                            className="selected"
                            onClick={handleClick}
                            key={el.id}
                          >
                            <span>{el.content}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <span class="row">을</span>
                </div>
                <div className="row">좋아합니다.</div>
              </div>
              <p className="desc">
                <span className="name">고객님</span>의 구매 내역과&nbsp;
                <Link to="/" class="linkTxtGreen">
                  맛취향
                </Link>
                에 따라
                <br />
                맛있는 메뉴를 추천드려요
              </p>
              <span className="opacityLeft"></span>
              <div className="miniSlideArrowWrap">
                <button
                  type="button"
                  className="slidePrev"
                  onClick={handleTastePrevMove}
                >
                  <img alt="arrow" src="/images/Main/left-arrow.png" />
                </button>
                <span class="countWrap">
                  <span classNme="num">
                    <strong>
                      {Math.abs(listTasteTransform / 787) ===
                      recommendList.result?.length + 1
                        ? 1
                        : Math.abs(listTasteTransform / 787)}
                    </strong>
                    /{recommendList.result?.length}
                  </span>
                </span>
                <button
                  type="button"
                  className="slideNext"
                  onClick={handleTasteNextMove}
                >
                  <img alt="arrow" src="/images/Main/right-arrow.png" />
                </button>
              </div>
            </dt>
            <dd class="dd">
              {TASTE.map(el => {
                return (
                  <div
                    class="listRecom"
                    style={
                      recommendTaste === el.content
                        ? { display: 'block' }
                        : { display: 'none' }
                    }
                  >
                    <div class="imgListSlide">
                      <div class="prodList">
                        <ul
                          class="prodCarousel"
                          style={{
                            transform: `translateX(${listTasteTransform}px)`,
                            transition: `${listTransition}`,
                          }}
                        >
                          <li
                            class="slideCount"
                            key={
                              recommendList.result?.[
                                recommendList.result?.length - 1
                              ].id
                            }
                          >
                            <div className="proModule">
                              <div className="imgWrap">
                                <Link to="/" class="count">
                                  <img
                                    alt="상품"
                                    src={
                                      recommendList.result?.[
                                        recommendList.result?.length - 1
                                      ].images
                                    }
                                  />
                                </Link>
                              </div>
                              <div className="txtWrap">
                                <Link to="/" class="count">
                                  <div className="titleInfo">
                                    <span class="title">
                                      {
                                        recommendList.result?.[
                                          recommendList.result?.length - 1
                                        ].title
                                      }
                                    </span>
                                  </div>
                                </Link>
                                <div className="priceInfo">
                                  <p className="sale">
                                    <span className="price">
                                      {
                                        recommendList.result?.[
                                          recommendList.result?.length - 1
                                        ].price
                                      }
                                    </span>
                                    <span className="won">원</span>
                                  </p>
                                  <p className="servings">
                                    /
                                    {
                                      recommendList.result?.[
                                        recommendList.result?.length - 1
                                      ].gram
                                    }
                                    g
                                  </p>
                                  <button type="button" className="cartBtn">
                                    <img
                                      alt="cart"
                                      src="/images/common/icon/basket.png"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          {recommendList.result?.map(ele => {
                            return (
                              <RecommendSlideCount
                                key={ele.id}
                                title={ele.title}
                                price={ele.price}
                                gram={ele.gram}
                                images={ele.images}
                              />
                            );
                          })}
                          <li
                            class="slideCount"
                            key={recommendList.result?.[0].id}
                          >
                            <div className="proModule">
                              <div className="imgWrap">
                                <Link to="/" class="count">
                                  <img
                                    alt="상품"
                                    src={recommendList.result?.[0].images}
                                  />
                                </Link>
                              </div>
                              <div className="txtWrap">
                                <Link to="/" class="count">
                                  <div className="titleInfo">
                                    <span class="title">
                                      {recommendList.result?.[0].title}
                                    </span>
                                  </div>
                                </Link>
                                <div className="priceInfo">
                                  <p className="sale">
                                    <span className="price">
                                      {recommendList.result?.[0].price}
                                    </span>
                                    <span className="won">원</span>
                                  </p>
                                  <p className="servings">
                                    / {recommendList.result?.[0].gram}g
                                  </p>
                                  <button type="button" className="cartBtn">
                                    <img
                                      alt="cart"
                                      src="/images/common/icon/basket.png"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </dd>
          </dl>
        </div>
        <span class="opacityRight">
          <span></span>
        </span>
      </div>
    );
  }
}

export default RecommendWrap;
