import React, { Component } from 'react';
import './productPictures.scss';
import { API } from '../../../config';

class ProductPictures extends Component {
  constructor() {
    super();
    this.state = {
      pictureList: [],
      mainPictureSrc: '',
    };
  }

  componentDidMount() {
    fetch(`${API}/products/${this.props.params}`)
      .then(res => res.json())
      .then(data => {
        const { detail_image } = data.result;
        this.setState({
          pictureList: detail_image,
          mainPictureSrc: detail_image[0],
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
          {pictureList.map((picture, index) => {
            return (
              <img
                className={mainPictureSrc === picture && 'picturefocusOn'}
                alt="product"
                key={index}
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
