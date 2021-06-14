import React, { Component } from 'react';
import './information.scss';

class Information extends Component {
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
          imageSrc: descriptionInfoArr.information,
        });
      });
  }
  render() {
    return (
      <div className="Information">
        <img alt="description" src={this.state.imageSrc} />
      </div>
    );
  }
}

export default Information;
