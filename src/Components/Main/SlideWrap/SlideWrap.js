import React from 'react';
import './SlideWrap.scss';
import SlideContents from './SlideContents/SlideContents';

class SlideWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      slideList: [],
    };
  }
  componentDidMount() {
    fetch('/data/Main/SlideWrap/SlideList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          slideList: data,
        });
      });
  }
  render() {
    const {
      listTransform,
      listTransition,
      handlePrevMove,
      handleNextMove,
      handelPlayToggleClick,
      isPlayOn,
    } = this.props;
    const { slideList } = this.state;
    return (
      <div className="SlideWrap">
        <div className="slideBox">
          <div
            className="slideList"
            style={{
              transform: `translateX(${listTransform}px)`,
              transition: listTransition,
            }}
          >
            <SlideContents slideList={slideList} />
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
                {Math.abs(listTransform / 1920) === slideList.length + 1
                  ? 1
                  : Math.abs(listTransform / 1920)}
              </strong>
              <span className="dash">/</span>
              {slideList.length}
            </span>
            <button
              type="button"
              className="controlPlay"
              onClick={handelPlayToggleClick}
            >
              {isPlayOn ? (
                <img alt="play" src="images/Main/pause.png" />
              ) : (
                <img alt="play" src="images/Main/play.png" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideWrap;
