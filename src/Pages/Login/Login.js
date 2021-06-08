import React from 'react';
import './Login.scss';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  goToSignup = () => {
    this.props.history.push('/signup');
  };

  goToMain = () => {
    // 로그인 패치 들어갈곳
    alert('로그인 성공 되었습니다.');
    this.props.history.push('/');
  };

  render() {
    console.log(this.state.idValue);
    console.log(this.state.pwValue);
    return (
      <>
        <section className="login">
          <div className="container">
            <div className="login-wrap">
              <h1 className="login-wrap-title">로그인</h1>
              <h2 className="login-wrap-memberlogin">
                {/* 회원 로그인 */}
                <div className="login-wrap-border"></div>
              </h2>
              <div className="login-wrap-container">
                <input
                  type="text"
                  placeholder="BISKIT 통합아이디 6~20자"
                  className="login-input-box"
                  onChange={this.handleInput}
                  name="idValue"
                />
                <input
                  type="password"
                  placeholder="비밀번호 영문, 특수문자, 숫자혼합 8~12자"
                  className="login-input-box"
                  onChange={this.handleInput}
                  name="pwValue"
                />
                <div className="desc-wrap">
                  <div className="check-box">
                    <label htmlFor="checkbox-lable">
                      <input type="checkbox" id="checkbox-lable" />
                      아이디 저장
                    </label>
                  </div>
                  <div className="find">
                    <Link to="/">아이디 찾기</Link>
                    <Link to="/">비밀번호 찾기</Link>
                  </div>
                </div>
                <div className="desc-buttons">
                  <button
                    className="login-button button"
                    onClick={this.goToMain}
                  >
                    로그인
                  </button>
                  <button
                    className="signup-button button"
                    onClick={this.goToSignup}
                  >
                    회원가입
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Login);
