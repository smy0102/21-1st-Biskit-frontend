import React from 'react';
import { Link } from 'react-router-dom';
import ImgContents from './SlideContents/ImgContents';
import CommentContents from './SlideContents/CommentContents';
import './ReviewWrap.scss';

class ReviewWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.85:8000/products/1/review?per_page=1')
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
      reveiwTransform,
    } = this.props;
    const { reviewList } = this.state;

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
                    {Math.abs(listReviewTranfrom / reveiwTransform) ===
                    reviewList.result?.length + 1
                      ? 1
                      : Math.abs(listReviewTranfrom / reveiwTransform)}
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
                <ImgContents
                  reviewList={reviewList}
                  listReviewTranfrom={listReviewTranfrom}
                  reveiwTransform={reveiwTransform}
                />
              </div>
              <div className="reviewList">
                <CommentContents
                  listReviewTranfrom={listReviewTranfrom}
                  listTransition={listTransition}
                  reviewList={reviewList}
                  reveiwTransform={reveiwTransform}
                />
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
