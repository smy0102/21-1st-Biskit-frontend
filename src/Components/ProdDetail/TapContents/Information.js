import React, { Component } from 'react';
import './information.scss';
import { API } from '../../../config';

class Information extends Component {
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
