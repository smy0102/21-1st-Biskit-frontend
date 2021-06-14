import React from 'react';
import { Link } from 'react-router-dom';
import ImgCount from './ReviewList/ImgCount';
import SlideCount from './ReviewList/SlideCount';
import './ReviewWrap.scss';

class ReviewWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
    };
  }
  componentDidMount() {
    fetch('/data/Main/ReviewWrap/Review.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data,
        });
      });
  }
  render() {
    const {
      handleReveiwPrevMove,
      listReviewTranfrom,
      handleReveiwNextMove,
      listTransition,
    } = this.props;
    const { reviewList } = this.state;
    console.log(Math.abs(0 / 720) + 1);
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
                    {Math.abs(listReviewTranfrom / 720) ===
                    reviewList.result?.length + 1
                      ? 1
                      : Math.abs(listReviewTranfrom / 720)}
                  </strong>
                  /{reviewList.result?.length}
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
                    key={reviewList.result?.[reviewList.result?.length - 1].key}
                    className={
                      (listReviewTranfrom === -720
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) ===
                      reviewList.result?.[reviewList.result?.length - 1].id
                        ? 'reviewCommentList on'
                        : 'reviewCommentList'
                    }
                  >
                    <div className="reviewMod">
                      <Link to="/">
                        <strong className="title">
                          {
                            reviewList.result?.[reviewList.result?.length - 1]
                              .title
                          }
                        </strong>
                        <div className="txtWrap">
                          <p className="comment">
                            {
                              reviewList.result?.[reviewList.result?.length - 1]
                                .content
                            }
                          </p>
                        </div>
                        <div className="ratingWrap">
                          <span className="ratingStar">
                            <span className="star">
                              <span>
                                {
                                  reviewList.result?.[
                                    reviewList.result?.length - 1
                                  ].star_rating
                                }
                              </span>
                            </span>
                          </span>
                        </div>
                        <span className="id">
                          {
                            reviewList.result?.[reviewList.result?.length - 1]
                              .account
                          }
                        </span>
                      </Link>
                    </div>
                  </li>
                  {this.state.reviewList.result?.map(el => {
                    return (
                      <ImgCount
                        key={el.id}
                        review_image={el.review_image}
                        listReviewTranfrom={listReviewTranfrom}
                        content={el.content}
                        title={el.title}
                        star_rating={el.star_rating}
                        account={el.account}
                        id={el.id}
                      />
                    );
                  })}
                  <li
                    key={reviewList.result?.[0].key}
                    className={
                      (listReviewTranfrom === 0
                        ? 1
                        : Math.abs(listReviewTranfrom / 720) + 1) ===
                      reviewList.result?.[0].id
                        ? 'reviewCommentList on'
                        : 'reviewCommentList'
                    }
                  >
                    <div className="reviewMod">
                      <Link to="/">
                        <strong className="title">
                          {reviewList.result?.[0].title}
                        </strong>
                        <div className="txtWrap">
                          <p className="comment">
                            {reviewList.result?.[0].content}
                          </p>
                        </div>
                        <div className="ratingWrap">
                          <span className="ratingStar">
                            <span className="star">
                              <span>{reviewList.result?.[0].star_rating}</span>
                            </span>
                          </span>
                        </div>
                        <span className="id">
                          {reviewList.result?.[0].account}
                        </span>
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
                        <img
                          alt={
                            reviewList.result?.[reviewList.result?.length - 1]
                              .title
                          }
                          src={
                            reviewList.result?.[reviewList.result?.length - 1]
                              .images
                          }
                        />
                      </div>
                    </div>
                  </li>
                  {reviewList.result?.map(el => {
                    return (
                      <SlideCount
                        key={el.id}
                        images={el.review_image}
                        title={el.title}
                      />
                    );
                  })}
                  <li className="slideCount">
                    <div className="reviewMod">
                      <div className="imgWrap">
                        <img
                          alt={reviewList.result?.[0].title}
                          src={reviewList.result?.[0].images}
                        />
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
