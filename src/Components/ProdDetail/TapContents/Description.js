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
    fetch(`${API}/products/${this.props.params}`)
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
