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
    fetch(`http://10.58.3.9:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data.result,
          evaluation: Math.round(data.product_rate.avg * 10) / 10,
        });
      });
  }

  render() {
    const { reviewList, evaluation } = this.state;
    return (
      <div className="Review">
        <div className="evaluationAverage">
          <div>
            고객평점 <span>{evaluation}</span>
            <span className="perfectScore">/ 5.0</span>
          </div>
          <button>리뷰작성</button>
        </div>
        <div className="reviewList">
          <div className="reviewWrap">
            {reviewList.map((review, idx) => {
              return (
                <div className="review" key={idx}>
                  <div className="informations">
                    <div className="id">{review.user}</div>
                    <div className="date">
                      {review.created_at.substr(0, 10)}
                    </div>
                  </div>
                  <div className="evalueation">
                    고객평점: {review.star_rating}
                  </div>
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
