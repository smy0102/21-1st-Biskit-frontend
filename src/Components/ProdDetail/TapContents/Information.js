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
    fetch(`http://10.58.3.9:8000/products/${this.props.match.params.id}`)
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
