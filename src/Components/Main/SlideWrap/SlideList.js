import React from 'react';

class SlideList extends React.Component {
  render() {
    return (
      <div className="slideContent" key={this.props.id}>
        <img alt="banner" src={this.props.img} />
        <div className="bannerContent">
          <div className="bannerHead">{this.props.head}</div>
          <div className="bannerTitle">
            {this.props.titleFirst} <p>{this.props.titleSecond}</p>
          </div>
          <div className="bannerSubTitle">{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

export default SlideList;
