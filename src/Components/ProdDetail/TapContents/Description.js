import React, { Component } from 'react';
import './description.scss';
import { API } from '../../../config';

class Description extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: '',
    };
  }

  componentDidMount() {
    fetch(`${API}/products/${1}`)
      .then(res => res.json())
      .then(data => {
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
