import React from 'react';
import './ReviewWrap.scss';
import { Link } from 'react-router-dom';

class ReviewWrap extends React.Component {
  render() {
    const {
      handleReveiwPrevMove,
      listReviewTranfrom,
      handleReveiwNextMove,
      listTransition,
    } = this.props;
    return (
      <div className="ReviewWrap">
        <div className="reviewTitle">
          <h2 className="title">생생한 리뷰</h2>
          <Link to="/" className="linkTxt">
            View All
          </Link>
        </div>
        <div className="reviewMain">
          <div className="listSlide">
            <div className="reviewSlideArrowWrap">
              <button
                type="button"
                className="slidePrev"
                onClick={handleReveiwPrevMove}
              >
                <img alt="arrow" src="/images/Main/left-arrow.png" />
              </button>
              <span class="countWrap">
                <span classNme="num">
                  <strong>
                    {listReviewTranfrom === 0
                      ? 1
                      : Math.abs(listReviewTranfrom / 720) + 1}
                  </strong>
                  /4
                </span>
              </span>
              <button
                type="button"
                className="slideNext"
                onClick={handleReveiwNextMove}
              >
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
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 1
                        ? 'reviewCommentList on'
                        : 'reviewCommentList'
                    }
                  >
                    <div className="reviewMod">
                      <Link to="/">
                        <strong className="title">몽골리안비프</strong>
                        <div className="txtWrap">
                          <p className="comment">
                            짭쪼룸한 맛과 꽈리고추의 살짝 매운맛이 너무 매력적인
                            요리입니다. 대접용요리로도 손색이 없어요
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
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 2
                        ? 'reviewCommentList on'
                        : 'reviewCommentList'
                    }
                  >
                    <div className="reviewMod">
                      <Link to="/">
                        <strong className="title">모둠해물찜</strong>
                        <div className="txtWrap">
                          <p className="comment">
                            바다향 한 입 가득~ 비스킷은 해물이 더 많네요^^
                            해물이 많아 놀라고 맛에 또 놀랐어요
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
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 3
                        ? 'reviewCommentList on'
                        : 'reviewCommentList'
                    }
                  >
                    <div className="reviewMod">
                      <Link to="/">
                        <strong className="title">몽골리안비프</strong>
                        <div className="txtWrap">
                          <p className="comment">
                            짭쪼룸한 맛과 꽈리고추의 살짝 매운맛이 너무 매력적인
                            요리입니다. 대접용요리로도 손색이 없어요
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
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 4
                        ? 'reviewCommentList on'
                        : 'reviewCommentList'
                    }
                  >
                    <div className="reviewMod">
                      <Link to="/">
                        <strong className="title">모듬해물찜</strong>
                        <div className="txtWrap">
                          <p className="comment">
                            바다향 한 입 가득~ 비스킷은 해물이 더 많네요^^
                            해물이 많아 놀라고 맛에 또 놀랐어요
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
                <ul
                  className="prodCarousel"
                  style={{
                    transform: `translateX(${listReviewTranfrom}px)`,
                    transition: `${listTransition}`,
                  }}
                >
                  <li className="slideCount">
                    <div className="reviewMod">
                      <div className="imgWrap">
                        <img alt="몽골리안비프" src="/images/Main/food3.jpeg" />
                      </div>
                    </div>
                  </li>
                  <li className="slideCount">
                    <div className="reviewMod">
                      <div className="imgWrap">
                        <img alt="몽골리안비프" src="/images/Main/food3.jpeg" />
                      </div>
                    </div>
                  </li>
                  <li className="slideCount">
                    <div className="reviewMod">
                      <div className="imgWrap">
                        <img alt="몽골리안비프" src="/images/Main/food3.jpeg" />
                      </div>
                    </div>
                  </li>
                  <li className="slideCount">
                    <div className="reviewMod">
                      <div className="imgWrap">
                        <img alt="몽골리안비프" src="/images/Main/food3.jpeg" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="reviewMajorImg">
                <ul>
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 1
                        ? 'majorImgList on'
                        : 'majorImgList'
                    }
                  >
                    <div className="reviewMod">
                      <div className="imgMajor">
                        <img alt="food" src="/images/Main/food4.png" />
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 2
                        ? 'majorImgList on'
                        : 'majorImgList'
                    }
                  >
                    <div className="reviewMod">
                      <div className="imgMajor">
                        <img alt="food" src="/images/Main/food4.png" />
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 3
                        ? 'majorImgList on'
                        : 'majorImgList'
                    }
                  >
                    <div className="reviewMod">
                      <div className="imgMajor">
                        <img alt="food" src="/images/Main/food4.png" />
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) === 4
                        ? 'majorImgList on'
                        : 'majorImgList'
                    }
                  >
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
    );
  }
}

export default ReviewWrap;
