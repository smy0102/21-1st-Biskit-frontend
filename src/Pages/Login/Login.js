import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

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
    fetch('http://10.58.2.73:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === 'SUCCESS') {
          this.props.history.push('/');
          localStorage.setItem('token', result.token);
        } else {
          alert('아이디와 패스워드를 확인해주세요');
        }
      });
  };

  render() {
    return (
      <section className="Login">
        <div className="container">
          <div className="loginWrap">
            <h1 className="loginWrapTitle">로그인</h1>
            <h2 className="loginWrapMemberLogin">
              {/* 회원 로그인 */}
              <div className="loginWrapBorder"></div>
            </h2>
            <div className="loginWrapContainer">
              <input
                type="text"
                placeholder="BISKIT 통합아이디 6~20자"
                className="loginInputBox"
                onChange={this.handleInput}
                name="idValue"
              />
              <input
                type="password"
                placeholder="비밀번호 영문, 특수문자, 숫자혼합 8~12자"
                className="loginInputBox"
                onChange={this.handleInput}
                name="pwValue"
              />
              <div className="descWrap">
                <div className="checkBox">
                  <label htmlFor="checkboxLabel">
                    <input type="checkbox" id="checkboxLabel" />
                    아이디 저장
                  </label>
                </div>
                <div className="find">
                  <Link to="/">아이디 찾기</Link>
                  <Link to="/">비밀번호 찾기</Link>
                </div>
              </div>
              <div className="descButtons">
                <button className="loginButton button" onClick={this.goToMain}>
                  로그인
                </button>
                <button
                  className="signupButton button"
                  onClick={this.goToSignup}
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
