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
    fetch('http://localhost:3000/data/ProdDetail/picturesData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          pictureList: data,
          mainPictureSrc: data[0].url,
        });
      });
  }

  changePicture = e => {
    this.setState({
      mainPictureSrc: e.target.src,
    });
  };

  render() {
    return (
      <div className="ProductPictures">
        <div className="mainPic">
          <img alt="product" src={this.state.mainPictureSrc} />
        </div>
        <div className="smallPic">
          {this.state.pictureList.map(picture => {
            return (
              <img
                className={
                  this.state.mainPictureSrc === picture.url && 'picturefocusOn'
                }
                alt="product"
                key={picture.id}
                src={picture.url}
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
