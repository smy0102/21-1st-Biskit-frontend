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
    fetch('http://10.58.0.85:8000/products/1')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const { detail } = data.result;
        this.setState({
          imageSrc: detail,
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
