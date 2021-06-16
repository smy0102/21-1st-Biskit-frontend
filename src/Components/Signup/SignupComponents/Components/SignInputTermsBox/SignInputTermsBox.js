import React from 'react';
import './SignInputTermsBox.scss';
import AcceptTerms from '../../DataComponents/AcceptTerms';
import PrivacyConsent from '../../DataComponents/PrivacyConsent';

class SignInputTermsBox extends React.Component {
  render() {
    const {
      changeAll,
      allCheckBox,
      handleChange,
      toggleCheckBox,
      isCheck1,
      isCheck2,
    } = this.props;

    return (
      <div className="SignInputTerms">
        <h3>전체 동의</h3>
        <div className="signInputTermsAllBox">
          <p>
            <span className="termCheckBox">
              <input
                type="checkbox"
                id="agreeAllCheck"
                checked={allCheckBox}
                onChange={changeAll}
                onClick={handleChange}
              />
            </span>
            <label htmlFor="agreeAllCheck">
              <strong>
                이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
              </strong>
            </label>
          </p>
        </div>
        <div className="signInputTermsBox">
          <h3>[필수] 이용약관 동의</h3>
          <AcceptTerms />
          <p className="check">
            <span>이용약관에 동의하십니까?</span>
            <input
              type="checkbox"
              id="agreeServiceCheck0"
              onChange={toggleCheckBox}
              checked={isCheck1}
              name="isCheck1"
            />
            <label htmlFor="agreeServiceCheck0">동의함</label>
          </p>
        </div>
        <div className="signInputTermsBox">
          <h3>[필수] 개인정보 수집 및 이용 동의</h3>
          <PrivacyConsent />
          <p className="check">
            <span>개인정보 수집 및 이용에 동의하십니까?</span>
            <input
              type="checkbox"
              id="agreeServiceCheck1"
              onChange={toggleCheckBox}
              checked={isCheck2}
              name="isCheck2"
            />
            <label htmlFor="agreeServiceCheck1">동의함</label>
          </p>
        </div>
      </div>
    );
  }
}
export default SignInputTermsBox;
