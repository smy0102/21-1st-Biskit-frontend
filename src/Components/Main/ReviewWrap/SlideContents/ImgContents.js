import React from 'react';
import ImgCount from './ReviewList/ImgCount';
import { Link } from 'react-router-dom';

class CommentContents extends React.Component {
  render() {
    const { reviewList, listReviewTranfrom } = this.props;
    return (
      <ul>
        <li
          className={
            (listReviewTranfrom === -720
              ? 1
              : Math.abs(listReviewTranfrom / 720)) === 0
              ? 'reviewCommentList on'
              : 'reviewCommentList'
          }
        >
          <div className="reviewMod">
            <Link to="/">
              <strong className="title">
                {reviewList.result?.[reviewList.result?.length - 1].title}
              </strong>
              <div className="txtWrap">
                <p className="comment">
                  {reviewList.result?.[reviewList.result?.length - 1].content}
                </p>
              </div>
              <div className="ratingWrap">
                <span className="ratingStar">
                  <span className="star">
                    <span>
                      ★
                      {
                        reviewList.result?.[reviewList.result?.length - 1]
                          .star_rating
                      }
                    </span>
                  </span>
                </span>
              </div>
              <span className="id">
                {reviewList.result?.[reviewList.result?.length - 1].account}
              </span>
            </Link>
          </div>
        </li>
        {reviewList.result?.map((el, key) => {
          return (
            <ImgCount
              key={key}
              id={key}
              listReviewTranfrom={listReviewTranfrom}
              content={el.content}
              title={el.title}
              star_rating={el.star_rating}
              account={el.account}
            />
          );
        })}
        <li
          className={
            (listReviewTranfrom === -720
              ? 1
              : Math.abs(listReviewTranfrom / 720)) ===
            reviewList.result?.length + 1
              ? 'reviewCommentList on'
              : 'reviewCommentList'
          }
        >
          <div className="reviewMod">
            <Link to="/">
              <strong className="title">{reviewList.result?.[0].title}</strong>
              <div className="txtWrap">
                <p className="comment">{reviewList.result?.[0].content}</p>
              </div>
              <div className="ratingWrap">
                <span className="ratingStar">
                  <span className="star">
                    <span>★ {reviewList.result?.[0].star_rating}</span>
                  </span>
                </span>
              </div>
              <span className="id">{reviewList.result?.[0].account}</span>
            </Link>
          </div>
        </li>
      </ul>
    );
  }
}

export default CommentContents;
