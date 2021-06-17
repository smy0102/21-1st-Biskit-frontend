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
    fetch('http://10.58.0.85:8000/products/1')
      .then(res => res.json())
      .then(data => {
        const { information } = data.result;
        this.setState({
          imageSrc: information,
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
