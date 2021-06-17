import React from 'react';
import './BestWrap.scss';
import { Link } from 'react-router-dom';
import ProdList from './ProdList';

class BestWrap extends React.Component {
  constructor() {
    super();
    this.state = {
      bestList: [],
    };
  }
  componentDidMount() {
    fetch('http://10.58.0.85:8000/products?per_page=1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestList: data,
        });
      });
  }
  render() {
    return (
      <div className="BestWrap">
        <h2 className="bestTitle">실시간 베스트</h2>
        <div className="prodList">
          <ul>
            {this.state.bestList.result?.map((el, index) => {
              return index === this.state.bestList.result.length - 1 ? null : (
                <ProdList
                  id={index}
                  title={el.title}
                  price={el.price}
                  gram={el.gram}
                  images={el.images}
                />
              );
            })}
          </ul>
        </div>
        <div className="moreList">
          <Link to="/">
            메뉴 더보기
            <img alt="더보기" src="images/Main/bold-arrow.png"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default BestWrap;
