import React from 'react';
import { Link } from 'react-router-dom';

class ImgCount extends React.Component {
  render() {
    const {
      key,
      listReviewTranfrom,
      id,
      title,
      star_rating,
      account,
      content,
    } = this.props;
    return (
      <li
        key={key}
        className={
          (listReviewTranfrom === -720
            ? 1
            : Math.abs(listReviewTranfrom / 720)) ===
          id + 1
            ? 'reviewCommentList on'
            : 'reviewCommentList'
        }
      >
        <div className="reviewMod">
          <Link to="/">
            <strong className="title">{title}</strong>
            <div className="txtWrap">
              <p className="comment">{content}</p>
            </div>
            <div className="ratingWrap">
              <span className="ratingStar">
                <span className="star">
                  <span>★ {star_rating}</span>
                </span>
              </span>
            </div>
            <span className="id">{account}</span>
          </Link>
        </div>
      </li>
    );
  }
}

export default ImgCount;
