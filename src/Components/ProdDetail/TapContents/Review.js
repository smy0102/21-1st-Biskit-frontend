import React, { Component } from 'react';
import './review.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
      evaluation: 0,
    };
  }

  componentDidMount() {
    fetch('/data/ProdDetail/review.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data.result,
          evaluation: data.result.avg,
        });
      });
  }

  getReviewDate = () => {
    let str = this.state.reviewList.created_at;
    return str.substr(0, 8);
  };

  render() {
    const { reviewList, evaluation } = this.state;
    return (
      <div className="Review">
        <div className="evaluationAverage">
          <div>
            ★★★★★ <span>{evaluation}</span>
            <span>/ 5.0</span>
          </div>
          <button>리뷰작성</button>
        </div>
        <div className="reviewList">
          <div className="sortingButtons">
            <button className="button1">베스트순</button>
            <button>최신순</button>
          </div>
          <div className="reviewWrap">
            {reviewList.map((review, idx) => {
              return (
                <div className="review" key={idx}>
                  <div className="informations">
                    <div className="id">{review.user}</div>
                    <div className="date">{review.created_at}</div>
                  </div>
                  <div className="evalueation">{review.star_rating}</div>
                  <div className="contents">{review.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
