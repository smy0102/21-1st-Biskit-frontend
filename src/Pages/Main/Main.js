import React from 'react';
import './Main.scss';
import { Link, withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      listTransform: 0,
      listTasteTransform: 0,
      listTransition: '1s ease-in-out',
      toggleList: 'slideTaste',
    };
  }

  handeltoggleClick = () => {
    this.setState({
      toggleList: 'slideTaste',
    });
  };

  handleNextMove = () => {
    if (this.state.listTransform > -7680) {
      this.setState({
        listTransform: this.state.listTransform - 1920,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTransform: 0,
        listTransition: '0s',
      });
    }
  };

  handlePrevMove = () => {
    if (this.state.listTransform < 0) {
      this.setState({
        listTransform: this.state.listTransform + 1920,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTransform: -7680,
        listTransition: '0s',
      });
    }
  };

  handleTastePrevMove = () => {
    if (this.state.listTasteTransform > -1574) {
      this.setState({
        listTasteTransform: this.state.listTasteTransform - 787,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTasteTransform: 0,
        listTransition: '0s',
      });
    }
  };

  handleTasteNextMove = () => {
    if (this.state.listTasteTransform < 0) {
      this.setState({
        listTasteTransform: this.state.listTasteTransform + 787,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTasteTransform: -1574,
        listTransition: '0s',
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.handleNextMove();
    }, 4000);
  }
  render() {
    const count = this.state.listTransform;
    const countTwo = this.state.listTasteTransform;
    return (
      <div>
        <div className="Main">
          <section className="container">
            <div className="slideWrap">
              <div className="slideBox">
                <div
                  className="slideList"
                  style={{
                    transform: `translateX(${count}px)`,
                    transition: `${this.state.listTransition}`,
                  }}
                >
                  <div className="slideContent slide01">
                    <p>
                      <img alt="banner" src="images/Main/banner.jpeg" />
                      <div className="bannerContent">
                        <div className="bannerHead">이벤트 오픈</div>
                        <div className="bannerTitle">
                          쇼핑 축제 <p>비스킷 스낵 페스타!</p>
                        </div>
                        <div className="bannerSubTitle">
                          매일매일 쓸쑤록 더 큰 혜택이 쏟아집니다.
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="slideContent slide02">
                    <img alt="banner" src="images/Main/banner.jpeg" />
                    <div className="bannerContent">
                      <div className="bannerHead">이벤트 오픈</div>
                      <div className="bannerTitle">
                        쇼핑 축제 <p>비스킷 스낵 페스타!</p>
                      </div>
                      <div className="bannerSubTitle">
                        매일매일 쓸쑤록 더 큰 혜택이 쏟아집니다.
                      </div>
                    </div>
                  </div>
                  <div className="slideContent slide03">
                    <img alt="banner" src="images/Main/banner.jpeg" />
                    <div className="bannerContent">
                      <div className="bannerHead">이벤트 오픈</div>
                      <div className="bannerTitle">
                        쇼핑 축제 <p>비스킷 스낵 페스타!</p>
                      </div>
                      <div className="bannerSubTitle">
                        매일매일 쓸쑤록 더 큰 혜택이 쏟아집니다.
                      </div>
                    </div>
                  </div>
                  <div className="slideContent slide04">
                    <img alt="banner" src="images/Main/banner.jpeg" />
                    <div className="bannerContent">
                      <div className="bannerHead">이벤트 오픈</div>
                      <div className="bannerTitle">
                        쇼핑 축제 <p>비스킷 스낵 페스타!</p>
                      </div>
                      <div className="bannerSubTitle">
                        매일매일 쓸쑤록 더 큰 혜택이 쏟아집니다.
                      </div>
                    </div>
                  </div>
                  <div className="slideContent slide05">
                    <img alt="banner" src="images/Main/banner.jpeg" />
                    <div className="bannerContent">
                      <div className="bannerHead">이벤트 오픈</div>
                      <div className="bannerTitle">
                        쇼핑 축제 <p>비스킷 스낵 페스타!</p>
                      </div>
                      <div className="bannerSubTitle">
                        매일매일 쓸쑤록 더 큰 혜택이 쏟아집니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slideBtnBox">
                <button
                  type="button"
                  className="slideBtnPrev"
                  onClick={this.handlePrevMove}
                >
                  <img alt="prev" src="images/Main/arrow.png" />
                </button>
                <button
                  type="button"
                  className="slideBtnNext"
                  onClick={this.handleNextMove}
                >
                  <img alt="next" src="images/Main/arrow.png" />
                </button>
                <div className="controlBox">
                  <span className="num">
                    <strong className="uiPageNum">
                      {count === 0 ? 1 : Math.abs(count / 1920) + 1}
                    </strong>
                    <span className="dash">/</span>5
                  </span>
                  <button className="controlPlay">
                    <img alt="play" src="images/Main/play.png" />
                  </button>
                </div>
              </div>
            </div>
            <div className="gridWrap">
              <div className="leftArea gridArea">
                <Link to="/">
                  <strong>우리집도 BISKIT 배송이 되나요?</strong>
                  <p>배송이 가능한지 알려드려요.</p>
                  <span className="linkMap link">
                    <img alt="area" src="images/Main/maps-and-flags.png"></img>
                    <span>배송지 검색</span>
                  </span>
                  <img
                    alt="areaIcon"
                    src="images/Main/delivery-truck.png"
                  ></img>
                </Link>
              </div>
              <div className="rightArea gridArea">
                <Link to="/">
                  <strong>6월 12일(토)에 받을 수 있어요</strong>
                  <p>오전 7시까지 주문하시면 다음날 배송됩니다</p>
                  <span className="linkTime link">
                    <img alt="area" src="images/Main/clock.png"></img>
                    <span>08:05:22</span>
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
            <div className="recommendWrap">
              <div className="individ">
                <dl>
                  <dt className="dt">
                    <div className="major">
                      <div class="row personProdCase2">나는</div>
                      <div className="row">
                        <div className={this.state.toggleList}>
                          <button
                            className="slideHide"
                            onclick={this.handeltoggleClick}
                          >
                            <strong>매콤한맛</strong>
                            <img
                              alt="arrow"
                              src="/images/Main/bold-arrow.png"
                            />
                          </button>
                          {/* 클릭하면 slidetaste에 .on 클래스 추가 */}
                          <div className="slideLayout">
                            <Link to="recom010" className="selected">
                              <span>매콤한맛</span>
                            </Link>
                            <Link className="selected">
                              <span>짭짤한맛</span>
                            </Link>
                            <Link className="selected">
                              <span>새콤한맛</span>
                            </Link>
                            <Link className="selected">
                              <span>달달한맛</span>
                            </Link>
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
                        className="slidePrev"
                        onClick={this.handleTasteNextMove}
                      >
                        <img alt="arrow" src="/images/Main/left-arrow.png" />
                      </button>
                      <span class="countWrap">
                        <span classNme="num">
                          <strong>1</strong>/2
                        </span>
                      </span>
                      <button
                        className="slideNext"
                        onClick={this.handleTastePrevMove}
                      >
                        <img alt="arrow" src="/images/Main/right-arrow.png" />
                      </button>
                    </div>
                  </dt>
                  <dd class="dd">
                    {/* 맛별로나누기 */}
                    <div id="recom010" class="listRecom">
                      <div class="imgListSlide">
                        <div class="prodList">
                          <ul
                            class="prodCarousel"
                            style={{
                              transform: `translateX(${countTwo}px)`,
                              transition: `${this.state.listTransition}`,
                            }}
                          >
                            {/* ul을 슬라이드 */}
                            {/* 슬라이드 이미지 */}
                            <li class="slideCount">
                              <div className="proModule">
                                <div className="imgWrap">
                                  <Link to="/" class="count">
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
                                      <img
                                        alt="cart"
                                        src="/images/common/icon/basket.png"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* 슬라이드 이미지 */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* 맛별로 나누기 */}
                    <div
                      id="recom020"
                      class="listRecom"
                      style={{ display: 'none' }}
                    >
                      <div class="imgListSlide">
                        <div class="prodList">
                          <ul class="prodCarousel">
                            {/* 슬라이드 이미지 */}
                            <li class="slideCount">
                              <div className="proModule">
                                <div className="imgWrap">
                                  <Link to="/" class="count">
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
                                      <img
                                        alt="cart"
                                        src="/images/common/icon/basket.png"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* 슬라이드 이미지 */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="recom030"
                      class="listRecom"
                      style={{ display: 'none' }}
                    >
                      <div class="imgListSlide">
                        <div class="prodList">
                          <ul class="prodCarousel">
                            {/* 슬라이드 이미지 */}
                            <li class="slideCount">
                              <div className="proModule">
                                <div className="imgWrap">
                                  <Link to="/" class="count">
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
                                      <img
                                        alt="cart"
                                        src="/images/common/icon/basket.png"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* 슬라이드 이미지 */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="recom040"
                      class="listRecom"
                      style={{ display: 'none' }}
                    >
                      <div class="imgListSlide">
                        <div class="prodList">
                          <ul class="prodCarousel">
                            {/* 슬라이드 이미지 */}
                            <li class="slideCount">
                              <div className="proModule">
                                <div className="imgWrap">
                                  <Link to="/" class="count">
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
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
                                    <img
                                      alt="상품"
                                      src="images/Main/food2.png"
                                    />
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
                                    <button className="cartBtn">
                                      <img
                                        alt="cart"
                                        src="/images/common/icon/basket.png"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* 슬라이드 이미지 */}
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
            <div className="bestWrap">
              <h2 className="bestTitle">실시간 베스트</h2>
              <div className="prodList">
                <ul>
                  <li>
                    <div className="proModule">
                      <div className="imgWrap">
                        <Link to="/" className="count">
                          <img
                            alt="하노이식 분짜"
                            src="images/Main/food1.jpeg"
                          ></img>
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
                        <button className="btnCart" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="proModule">
                      <div className="imgWrap">
                        <Link to="/" className="count">
                          <img
                            alt="하노이식 분짜"
                            src="images/Main/food1.jpeg"
                          ></img>
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
                        <button className="btnCart" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="proModule">
                      <div className="imgWrap">
                        <Link to="/" className="count">
                          <img
                            alt="하노이식 분짜"
                            src="images/Main/food1.jpeg"
                          ></img>
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
                        <button className="btnCart" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="proModule">
                      <div className="imgWrap">
                        <Link to="/" className="count">
                          <img
                            alt="하노이식 분짜"
                            src="images/Main/food1.jpeg"
                          ></img>
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
                        <button className="btnCart" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="proModule">
                      <div className="imgWrap">
                        <Link to="/" className="count">
                          <img
                            alt="하노이식 분짜"
                            src="images/Main/food1.jpeg"
                          ></img>
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
                        <button className="btnCart" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="proModule">
                      <div className="imgWrap">
                        <Link to="/" className="count">
                          <img
                            alt="하노이식 분짜"
                            src="images/Main/food1.jpeg"
                          ></img>
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
                        <button className="btnCart" />
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
            <div className="reviewWrap">
              <div className="reviewTitle">
                <h2 className="title">생생한 리뷰</h2>
                <Link to="/" className="linkTxt">
                  View All
                </Link>
              </div>
              <div className="reviewMain">
                <div className="listSlide">
                  <div className="reviewSlideArrowWrap">
                    <button className="slidePrev">
                      <img alt="arrow" src="/images/Main/left-arrow.png" />
                    </button>
                    <span class="countWrap">
                      <span classNme="num">
                        <strong>1</strong>/4
                      </span>
                    </span>
                    <button className="slideNext">
                      <img alt="arrow" src="/images/Main/right-arrow.png" />
                    </button>
                  </div>
                  <div className="reviewContainer">
                    <div className="reviewTxt">
                      <img
                        className="quotes"
                        alt="quotes"
                        src="images/Main/quotes.png"
                      />
                      <ul>
                        <li className="reviewCommentList on">
                          <div className="reviewMod">
                            <Link to="/">
                              <strong className="title">몽골리안비프</strong>
                              <div className="txtWrap">
                                <p className="comment">
                                  짭쪼룸한 맛과 꽈리고추의 살짝 매운맛이 너무
                                  매력적인 요리입니다. 대접용요리로도 손색이
                                  없어요
                                </p>
                              </div>
                              <div className="ratingWrap">
                                <span className="ratingStar">
                                  <span className="star">
                                    <span>★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</span>
                                  </span>
                                </span>
                              </div>
                              <span className="id">by. ekf******</span>
                            </Link>
                          </div>
                        </li>
                        <li className="reviewCommentList">
                          <div className="reviewMod">
                            <Link to="/">
                              <strong className="title">몽골리안비프</strong>
                              <div className="txtWrap">
                                <p className="comment">
                                  짭쪼룸한 맛과 꽈리고추의 살짝 매운맛이 너무
                                  매력적인 요리입니다. 대접용요리로도 손색이
                                  없어요
                                </p>
                              </div>
                              <div className="ratingWrap">
                                <span className="ratingStar">
                                  <span className="star">
                                    <span>★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</span>
                                  </span>
                                </span>
                              </div>
                              <span className="id">by. ekf******</span>
                            </Link>
                          </div>
                        </li>
                        <li className="reviewCommentList">
                          <div className="reviewMod">
                            <Link to="/">
                              <strong className="title">몽골리안비프</strong>
                              <div className="txtWrap">
                                <p className="comment">
                                  짭쪼룸한 맛과 꽈리고추의 살짝 매운맛이 너무
                                  매력적인 요리입니다. 대접용요리로도 손색이
                                  없어요
                                </p>
                              </div>
                              <div className="ratingWrap">
                                <span className="ratingStar">
                                  <span className="star">
                                    <span>★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</span>
                                  </span>
                                </span>
                              </div>
                              <span className="id">by. ekf******</span>
                            </Link>
                          </div>
                        </li>
                        <li className="reviewCommentList">
                          <div className="reviewMod">
                            <Link to="/">
                              <strong className="title">몽골리안비프</strong>
                              <div className="txtWrap">
                                <p className="comment">
                                  짭쪼룸한 맛과 꽈리고추의 살짝 매운맛이 너무
                                  매력적인 요리입니다. 대접용요리로도 손색이
                                  없어요
                                </p>
                              </div>
                              <div className="ratingWrap">
                                <span className="ratingStar">
                                  <span className="star">
                                    <span>★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</span>
                                  </span>
                                </span>
                              </div>
                              <span className="id">by. ekf******</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="reviewList">
                      <ul className="prodCarousel">
                        <li className="slideCount">
                          <div className="reviewMod">
                            <div className="imgWrap">
                              <img
                                alt="몽골리안비프"
                                src="/images/Main/food3.jpeg"
                              />
                            </div>
                          </div>
                        </li>
                        <li className="slideCount">
                          <div className="reviewMod">
                            <div className="imgWrap">
                              <img
                                alt="몽골리안비프"
                                src="/images/Main/food3.jpeg"
                              />
                            </div>
                          </div>
                        </li>
                        <li className="slideCount">
                          <div className="reviewMod">
                            <div className="imgWrap">
                              <img
                                alt="몽골리안비프"
                                src="/images/Main/food3.jpeg"
                              />
                            </div>
                          </div>
                        </li>
                        <li className="slideCount">
                          <div className="reviewMod">
                            <div className="imgWrap">
                              <img
                                alt="몽골리안비프"
                                src="/images/Main/food3.jpeg"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="reviewMajorImg">
                      <ul>
                        <li className="majorImgList on">
                          <div className="reviewMod">
                            <div className="imgMajor">
                              <img alt="food" src="/images/Main/food4.png" />
                            </div>
                          </div>
                        </li>
                        <li className="majorImgList">
                          <div className="reviewMod">
                            <div className="imgMajor">
                              <img alt="food" src="/images/Main/food4.png" />
                            </div>
                          </div>
                        </li>
                        <li className="majorImgList">
                          <div className="reviewMod">
                            <div className="imgMajor">
                              <img alt="food" src="/images/Main/food4.png" />
                            </div>
                          </div>
                        </li>
                        <li className="majorImgList">
                          <div className="reviewMod">
                            <div className="imgMajor">
                              <img alt="food" src="/images/Main/food4.png" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <span className="opacityWrap">
                <span></span>
              </span>
            </div>
            <div className="noticeWrap">
              <div className="notice">
                <Link to="/">
                  <dl>
                    <dt>공지사항</dt>
                    <dd class="txt">
                      <p className="st_elps">
                        [6월 2차] 미리보는 비스킷 전체 메뉴
                      </p>
                    </dd>
                  </dl>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
