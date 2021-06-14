import React from 'react';
import SlideList from './SlideList';
import './SlideWrap.scss';

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
            <div
              className="slideContent"
              key={slideList[slideList.length - 1]?.id}
            >
              <img alt="banner" src={slideList[slideList.length - 1]?.img} />
              <div className="bannerContent">
                <div className="bannerHead">
                  {slideList[slideList.length - 1]?.head}
                </div>
                <div className="bannerTitle">
                  {slideList[slideList.length - 1]?.titleFirst}
                  <p>{slideList[slideList.length - 1]?.titleSecond}</p>
                </div>
                <div className="bannerSubTitle">
                  {slideList[slideList.length - 1]?.subtitle}
                </div>
              </div>
            </div>
            {slideList.map(el => {
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

            <div className="slideContent" key={slideList[0]?.id}>
              <img alt="banner" src={slideList[0]?.img} />
              <div className="bannerContent">
                <div className="bannerHead">{slideList[0]?.head}</div>
                <div className="bannerTitle">
                  {slideList[0]?.titleFirst}
                  <p>{slideList[0]?.titleSecond}</p>
                </div>
                <div className="bannerSubTitle">{slideList[0]?.subtitle}</div>
              </div>
            </div>
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
