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
    fetch(`http://10.58.3.9:8000/products/${this.props.match.params.id}`)
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
