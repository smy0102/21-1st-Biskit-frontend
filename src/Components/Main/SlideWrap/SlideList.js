import React from 'react';

class SlideList extends React.Component {
  render() {
    const { id, img, head, titleFirst, titleSecond, subtitle } = this.props;
    return (
      <div className="slideContent" key={id}>
        <img alt="banner" src={img} />
        <div className="bannerContent">
          <div className="bannerHead">{head}</div>
          <div className="bannerTitle">
            {titleFirst} <p>{titleSecond}</p>
          </div>
          <div className="bannerSubTitle">{subtitle}</div>
        </div>
      </div>
    );
  }
}

export default SlideList;
