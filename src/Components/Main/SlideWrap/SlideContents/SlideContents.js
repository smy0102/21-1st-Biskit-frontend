import React from 'react';
import SlideList from './SlideList';

class SlideContents extends React.Component {
  render() {
    const { slideList } = this.props;
    return (
      <>
        <div className="slideContent" key={slideList[slideList.length - 1]?.id}>
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
      </>
    );
  }
}

export default SlideContents;
