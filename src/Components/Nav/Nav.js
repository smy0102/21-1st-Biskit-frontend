import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { INFO } from './ListMenu';
import { UTIL } from './gnb_util';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="gnb_wrap">
          <div className="gnb_util">
            {UTIL.map(el => {
              return <Link to={el.path}>{el.content}</Link>;
            })}
          </div>
        </div>
        <div className="gnb_menu">
          <div className="logo">
            <Link to="/">
              <img alt="logo" src="/images/common/icon/logo.png"></img>
            </Link>
          </div>
          <ul className="list_menu">
            <li>
              {INFO.map(el => {
                return <Link to={el.path}>{el.content}</Link>;
              })}
            </li>
          </ul>
          <div className="my_menu">
            <ul>
              <li>
                <Link to="/">
                  <img alt="basket" src="/images/common/icon/basket.png"></img>
                </Link>
                <span>장바구니</span>
              </li>
              <li>
                <Link to="/">
                  <img alt="search" src="/images/common/icon/search.png"></img>
                </Link>
                <span>메뉴찾기</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
