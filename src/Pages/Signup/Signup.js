import React from 'react';
import './Signup.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { withRouter } from 'react-router-dom';
import TermsData1 from './SignupComponents/TermsData1';
import TermsData2 from './SignupComponents/TermsData2';

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

  ChangeAll = () => {
    this.state.allCheckBox
      ? this.setState({ isCheck1: false, isCheck2: false })
      : this.setState({ isCheck1: true, isCheck2: true });
  };

  inputAllCheckBox = () => {
    this.state.isCheck1 && this.state.isCheck2
      ? this.setState({ allCheckBox: true })
      : this.setState({ allCheckBox: false });
  };

  handleChange = () => {
    this.setState(e => ({
      allCheckBox: !e.allCheckBox,
    }));
  };

  handelInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  goToLogin = () => {
    // data 들어와야할곳
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.idValue,
    //     password: this.state.pwValue,
    //     nickname: this.state.nickName,
    //     contact: this.state.contact,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       this.props.history.push('/login');
    //     } else {
    //       alert('이메일과 패스워드를 확인해주세요');
    //     }
    //   });
    this.props.history.push('/login');
  };

  render() {
    console.log('pwValueReconfirm', this.state.pwValueReconfirm);
    console.log('pwValue', this.state.pwValue);
    return (
      <>
        <Nav />
        <div className="signup">
          <div className="container">
            <div className="signup-wrap-title">
              <h1>회원가입</h1>
            </div>
            <div className="signup-info">
              BISKIT 홈페이지에 오신 것을 환영합니다. 회원가입은 '정보 입력 >
              약관 동의' 과정을거쳐 완료됩니다.
            </div>
            <div className="signup-input-info">
              <h3>기본정보</h3>
              <div className="signup-input-info-required">
                <img alt="필수" src="/images/Signup/Required.gif" />
                <span>필수입력사항</span>
              </div>
            </div>
            <div className="signup-input-wrap">
              <table border="0" summary>
                <colgroup>
                  <col></col>
                  <col></col>
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      아이디
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <input type="text" class="input-type-text" />
                      <button>중복확인</button>
                      <span>(영문소문자/숫자, 6 ~ 20자)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      비밀번호
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <input
                        type="password"
                        class="input-type-text"
                        name="pwValue"
                        onChange={this.handelInput}
                      />
                      <span>
                        (영문 대소문자/숫자/특수문자을 포함한 조합, 8자 ~ 12자)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      비밀번호 확인
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <input
                        type="password"
                        class="input-type-text"
                        name="pwValueReconfirm"
                        onChange={this.handelInput}
                        value={this.state.pwValueReconfirm}
                      />
                      {this.state.pwValueReconfirm !== this.state.pwValue && (
                        <span>비밀번호가 일치하지 않습니다.</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      이름
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <input type="text" class="input-type-text" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      주소
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <input type="text" class="input-type-text" id="adress" />
                      <span>(기본주소)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      휴대전화
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <select>
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      -
                      <input type="text" class="input-type-text mobile" />
                      -
                      <input type="text" class="input-type-text mobile" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      이메일
                      <img alt="필수" src="/images/Signup/Required.gif" />
                    </th>
                    <td>
                      <input type="text" class="input-type-text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sign-input-terms">
              <h3>전체 동의</h3>
            </div>
            <div className="sign-input-terms-all-box">
              <p>
                <span className="term-check-box">
                  <input
                    type="checkbox"
                    id="agreeAllCheck"
                    checked={this.state.allCheckBox}
                    onChange={this.ChangeAll}
                    onClick={this.handleChange}
                  />
                </span>
                <label htmlFor="agreeAllCheck">
                  <strong>
                    이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
                  </strong>
                </label>
              </p>
            </div>
            <div className="sign-input-terms-box">
              <h3>[필수] 이용약관 동의</h3>
              <TermsData1 />
              <p className="check">
                <span>이용약관에 동의하십니까?</span>
                <input
                  type="checkbox"
                  id="agree-service-check-0"
                  onChange={() =>
                    this.setState(
                      {
                        isCheck1: !this.state.isCheck1,
                      },
                      this.inputAllCheckBox
                    )
                  }
                  checked={this.state.isCheck1}
                ></input>
                <label htmlFor="agree-service-check-0">동의함</label>
              </p>
            </div>
            <div className="sign-input-terms-box">
              <h3>[필수] 개인정보 수집 및 이용 동의</h3>
              <TermsData2 />
              <p className="check">
                <span>개인정보 수집 및 이용에 동의하십니까?</span>
                <input
                  type="checkbox"
                  id="agree-service-check-1"
                  onChange={() =>
                    this.setState(
                      {
                        isCheck2: !this.state.isCheck2,
                      },
                      this.inputAllCheckBox
                    )
                  }
                  checked={this.state.isCheck2}
                ></input>
                <label htmlFor="agree-service-check-1">동의함</label>
              </p>
            </div>
            <div className="signup-button-element">
              <button
                className="signup-button"
                onClick={this.goToLogin}
                disabled={!this.state.allCheckBox}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Signup);
