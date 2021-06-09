import React from 'react';
import './Signup.scss';
import { withRouter } from 'react-router-dom';
import SignupInputWrap from './SignupComponents/Components/SignupInputWrap';
import SignInputTermsBox from './SignupComponents/Components/SignInputTermsBox';
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      isCheck1: false,
      isCheck2: false,
      allCheckBox: false,
      pwValue: '',
      pwValueReconfirm: '',
    };
  }

  changeAll = () => {
    const { allCheckBox } = this.state;
    this.setState({ isCheck1: !allCheckBox, isCheck2: !allCheckBox });
  };

  inputAllCheckBox = () => {
    const { isCheck1, isCheck2 } = this.state;
    this.setState({ allCheckBox: isCheck1 && isCheck2 });
  };

  handleChange = () => {
    this.setState(state => ({
      allCheckBox: !state.allCheckBox,
    }));
  };

  handelInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goToLogin = () => {
    this.props.history.push('/login');
  };

  toggleCheckBox = event => {
    const { name } = event.target;
    this.setState(
      {
        [name]: !this.state[name],
      },
      this.inputAllCheckBox
    );
  };

  render() {
    const { handelInput, changeAll, handleChange, toggleCheckBox, goToLogin } =
      this;
    const {
      pwValueReconfirm,
      checked,
      pwValue,
      isCheck1,
      isCheck2,
      allCheckBox,
    } = this.state;
    return (
      <div className="Signup">
        <div className="container">
          <div className="signupWrapTitle">
            <h1>회원가입</h1>
          </div>
          <div className="signupInfo">
            BISKIT 홈페이지에 오신 것을 환영합니다. 회원가입은 '정보 입력 > 약관
            동의' 과정을거쳐 완료됩니다.
          </div>
          <div className="signupInputInfo">
            <h3>기본정보</h3>
            <div className="signupInputInfoRequired">
              <img alt="필수" src="/images/Signup/Required.gif" />
              <span>필수입력사항</span>
            </div>
          </div>
          <SignupInputWrap
            handelInput={handelInput}
            pwValueReconfirm={pwValueReconfirm}
            pwValue={pwValue}
          />
          <SignInputTermsBox
            checked={checked}
            allCheckBox={allCheckBox}
            changeAll={changeAll}
            handleChange={handleChange}
            toggleCheckBox={toggleCheckBox}
            isCheck1={isCheck1}
            isCheck2={isCheck2}
          />
          <div className="signupButtonElement">
            <button
              className="signupButton"
              onClick={goToLogin}
              disabled={!allCheckBox}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Signup);
