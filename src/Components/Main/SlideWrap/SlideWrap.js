import React from 'react';
import './SlideWrap.scss';
import SlideList from './SlideList';

class SlideWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      slideList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/Main/SlideWrap/SlideList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          slideList: data,
        });
      });
  }
  render() {
    const { listTransform, listTransition, handlePrevMove, handleNextMove } =
      this.props;
    return (
      <div className="SlideWrap">
        <div className="slideBox">
          <div
            className="slideList"
            style={{
              transform: `translateX(${listTransform}px)`,
              transition: `${listTransition}`,
            }}
          >
            {this.state.slideList.map(el => {
              return (
                <SlideList
                  key={el.id}
                  head={el.head}
                  titleFirst={el.titleFirst}
                  titleSecond={el.titleSecond}
                  subtitle={el.subtitle}
                  img={el.img}
                  profileImg={el.profileImg}
                />
              );
            })}
          </div>
        </div>
        <div className="slideBtnBox">
          <button
            type="button"
            className="slideBtnPrev"
            onClick={handlePrevMove}
          >
            <img alt="prev" src="images/Main/arrow.png" />
          </button>
          <button
            type="button"
            className="slideBtnNext"
            onClick={handleNextMove}
          >
            <img alt="next" src="images/Main/arrow.png" />
          </button>
          <div className="controlBox">
            <span className="num">
              <strong className="uiPageNum">
                {listTransform === 0 ? 1 : Math.abs(listTransform / 1920) + 1}
              </strong>
              <span className="dash">/</span>5
            </span>
            <button type="button" className="controlPlay">
              <img alt="play" src="images/Main/play.png" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideWrap;
