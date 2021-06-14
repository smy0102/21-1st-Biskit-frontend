import React, { Component } from 'react';
import './description.scss';

class Description extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: '',
    };
  }

  componentDidMount() {
    fetch('/data/ProdDetail/prodDetailData.json')
      .then(res => res.json())
      .then(data => {
        const descriptionInfoArr = data.description_info;
        this.setState({
          imageSrc: descriptionInfoArr.detail,
        });
      });
  }
  render() {
    return (
      <div className="Description">
        <img alt="description" src={this.state.imageSrc} />
      </div>
    );
  }
}

export default Description;
