import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LIST } from './NavConst/ListMenu';
import { GNB } from './NavConst/GnbMenu';
import './Nav.scss';

class Nav extends React.Component {
  goToLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.clear();
      window.location.replace('/');
    }
  };

  checkLogin = path => {
    if (localStorage?.getItem('token')) {
      this.props.history.push(path);
    } else {
      alert('로그인이 필요합니다');
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <nav className="Nav">
        <div className="gnbWrap">
          <div className="gnbMenu">
            {localStorage?.getItem('token') ? (
              <Link to={'/'}>고객님</Link>
            ) : (
              <Link to={'/signup'}>회원가입</Link>
            )}

            {localStorage?.getItem('token') ? (
              <Link to={'/'} onClick={this.goToLogout}>
                로그아웃
              </Link>
            ) : (
              <Link to={'/login'}>로그인</Link>
            )}

            {GNB.map(el => {
              return (
                <Link to={el.path} key={el.id}>
                  {el.content}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="menuContainer">
          <div className="logo">
            <Link to="/">
              <img alt="logo" src="/images/common/icon/logo.png"></img>
            </Link>
          </div>
          <ul className="listMenu">
            <li>
              {LIST.map(el => {
                return (
                  <Link to={el.path} key={el.id}>
                    {el.content}
                  </Link>
                );
              })}
            </li>
          </ul>
          <div className="myMenu">
            <ul>
              <li>
                <Link onClick={() => this.checkLogin('/cart')}>
                  <img alt="basket" src="/images/common/icon/basket.png"></img>
                  <span>장바구니</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img alt="search" src="/images/common/icon/search.png"></img>
                  <span>메뉴찾기</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
