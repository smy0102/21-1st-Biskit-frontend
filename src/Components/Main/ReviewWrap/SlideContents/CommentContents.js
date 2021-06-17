import React from 'react';
import SlideCount from './ReviewList/SlideCount';

class CommentContents extends React.Component {
  render() {
    const { listReviewTranfrom, listTransition, reviewList } = this.props;

    return (
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
                alt={reviewList.result?.[reviewList.result?.length - 1].title}
                src={reviewList.result?.[reviewList.result?.length - 1].image}
              />
            </div>
          </div>
        </li>
        {reviewList.result?.map(el => {
          return <SlideCount key={el.id} images={el.image} title={el.title} />;
        })}
        <li className="slideCount">
          <div className="reviewMod">
            <div className="imgWrap">
              <img
                alt={reviewList.result?.[0].title}
                src={reviewList.result?.[0].image}
              />
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default CommentContents;
