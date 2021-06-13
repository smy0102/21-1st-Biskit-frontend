import React from 'react';
import './RecommendWrap.scss';
import { Link } from 'react-router-dom';

class RecommendWrap extends React.Component {
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
    return (
      <div className="RecommendWrap">
        <div className="individ">
          <dl>
            <dt className="dt">
              <div className="major">
                <div class="row personProdCase2">나는</div>
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
                      <button className="selected" onClick={handleClick}>
                        <span>매콤한맛</span>
                      </button>
                      <button className="selected" onClick={handleClick}>
                        <span>짭짤한맛</span>
                      </button>
                      <button className="selected" onClick={handleClick}>
                        <span>새콤한맛</span>
                      </button>
                      <button className="selected" onClick={handleClick}>
                        <span>달달한맛</span>
                      </button>
                    </div>
                  </div>
                  <span class="row personProdCase2">을</span>
                </div>
                <div className="row personProdCase2">좋아합니다.</div>
              </div>
              <p className="desc personProdCase2">
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
                      {listTasteTransform === 0
                        ? 1
                        : Math.abs(listTasteTransform / 787) + 1}
                    </strong>
                    /3
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
              <div
                id="recom010"
                class="listRecom"
                style={
                  recommendTaste === '매콤한맛'
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,101</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,102</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,103</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
              <div
                id="recom020"
                class="listRecom"
                style={
                  recommendTaste === '짭짤한맛'
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,201</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,202</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,203</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
              <div
                id="recom030"
                class="listRecom"
                style={
                  recommendTaste === '새콤한맛'
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,301</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,302</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,303</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
              <div
                id="recom040"
                class="listRecom"
                style={
                  recommendTaste === '달달한맛'
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,401</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,402</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
                      <li class="slideCount">
                        <div className="proModule">
                          <div className="imgWrap">
                            <Link to="/" class="count">
                              <img alt="상품" src="images/Main/food2.png" />
                            </Link>
                          </div>
                          <div className="txtWrap">
                            <Link to="/" class="count">
                              <div className="titleInfo">
                                <span class="title">눈꽃치즈닭갈비</span>
                              </div>
                            </Link>
                            <div className="priceInfo">
                              <p className="sale">
                                <span className="price">25,403</span>
                                <span className="won">원</span>
                              </p>
                              <p className="servings">/ 3인분</p>
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
