import React, { Component } from 'react';
import './productPictures.scss';

class ProductPictures extends Component {
  constructor() {
    super();
    this.state = {
      pictureList: [],
      mainPictureSrc: '',
    };
  }

  componentDidMount() {
    fetch('/data/ProdDetail/prodDetailData.json')
      .then(res => res.json())
      .then(data => {
        const pictureArr = data.result.detail_image;
        this.setState({
          pictureList: pictureArr,
          mainPictureSrc: pictureArr[0],
        });
      });
  }

  changePicture = e => {
    this.setState({
      mainPictureSrc: e.target.src,
    });
  };

  render() {
    const { mainPictureSrc, pictureList } = this.state;
    return (
      <div className="ProductPictures">
        <div className="mainPic">
          <img alt="product" src={mainPictureSrc} />
        </div>
        <div className="smallPic">
          {pictureList.map(picture => {
            return (
              <img
                className={mainPictureSrc === picture && 'picturefocusOn'}
                alt="product"
                key={picture.index}
                src={picture}
                onClick={this.changePicture}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductPictures;
