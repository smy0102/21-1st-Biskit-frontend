import React from 'react';
import './Main.scss';
import { Link, withRouter } from 'react-router-dom';
import GridWrap from '../../Components/Main/GridWrap/GridWrap';
import SlideWrap from '../../Components/Main/SlideWrap/SlideWrap';

class Main extends React.Component {
  constructor() {
    super();
    let fixDate = new Date().setHours(31, 0, 0);
    this.state = {
      listTransform: 0,
      listTasteTransform: 0,
      listTransition: '1s ease-in-out',
      isClassOn: false,
      date: new Date(),
      fixDate,
      countDate: fixDate - new Date(),
    };
  }

  handeltoggleClick = () => {
    this.setState({
      isClassOn: !this.state.isClassOn,
    });
  };

  handleNextMove = () => {
    if (this.state.listTransform > -1920 * 4) {
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
        listTransform: -1920 * 4,
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

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.autoNext);
  }

  tick() {
    this.setState({
      countDate: this.state.fixDate - new Date().getTime(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.autoNext = setInterval(() => {
      this.handleNextMove();
    }, 4000);
  }
  render() {
    const { listTransition, countDate, isClassOn } = this.state;
    const { handlePrevMove, handleNextMove, handeltoggleClick } = this;
    const hours = Math.floor(countDate / (60 * 60 * 1000));
    const mins = Math.floor((countDate - hours * 60 * 60 * 1000) / (60 * 1000));
    const secs = Math.floor(
      (countDate - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000
    );
    const count = this.state.listTransform;
    const countTwo = this.state.listTasteTransform;
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return (
      <div>
        <div className="Main">
          <section className="container">
            <SlideWrap
              count={count}
              listTransition={listTransition}
              handlePrevMove={handlePrevMove}
              handleNextMove={handleNextMove}
            />
            <GridWrap
              days={days}
              hours={hours}
              mins={mins}
              secs={secs}
              getMonth={this.state.date.getMonth()}
              getDate={this.state.date.getDate()}
              getDay={this.state.date.getDay()}
            />
            <div className="recommendWrap">
              <div className="individ">
                <dl>
                  <dt className="dt">
                    <div className="major">
                      <div class="row personProdCase2">나는</div>
                      <div className="row">
                        <div
                          className={'slideTaste ' + (isClassOn ? 'on' : '')}
                        >
                          <button
                            type="button"
                            className="slideHide"
                            onClick={handeltoggleClick}
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
                        type="button"
                        className="slidePrev"
                        onClick={() => this.handleNextMove(787, 2)}
                      >
                        <img alt="arrow" src="/images/Main/left-arrow.png" />
                      </button>
                      <span class="countWrap">
                        <span classNme="num">
                          <strong>1</strong>/2
                        </span>
                      </span>
                      <button
                        type="button"
                        className="slideNext"
                        onClick={() => this.handleNextMove(787, 2)}
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
                        <button type="button" className="btnCart" />
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
                        <button type="button" className="btnCart" />
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
                        <button type="button" className="btnCart" />
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
                        <button type="button" className="btnCart" />
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
                        <button type="button" className="btnCart" />
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
                    <button type="button" className="slidePrev">
                      <img alt="arrow" src="/images/Main/left-arrow.png" />
                    </button>
                    <span class="countWrap">
                      <span classNme="num">
                        <strong>1</strong>/4
                      </span>
                    </span>
                    <button type="button" className="slideNext">
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
