import React from 'react';

class SlideCount extends React.Component {
  render() {
    const { images, title } = this.props;

    return (
      <li className="slideCount">
        <div className="reviewMod">
          <div className="imgWrap">
            <img alt={title} src={images} />
          </div>
        </div>
      </li>
    );
  }
}

export default SlideCount;
