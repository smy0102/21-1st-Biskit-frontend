import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterContainer">
          <div className="FooterContent">
            <img alt="biskit logo" src="/images/common/icon/logo-white-1.png" />
            <div className="as">
              <ul className="footerTerms">
                <li>이용약관</li>
                <li>개인정보처리 방침</li>
                <li>법적고지</li>
                <li>사업자정보 확인</li>
              </ul>
              <div>
                <div>
                  Wecode 21기 권오현, 김민규, 박창현, 송준, 신미영, 전건우,
                  이아란 1차 프로젝트
                </div>
                <div>주소: 서울특별시 강남구 테헤란로 427 위워크타워</div>
                <div>© Wecode 21th Team Biskit. ALL RIGHTS RESERVED.</div>
              </div>
            </div>
            <div className="wecodeLogoBox">
              <img
                className="wecodeLogo"
                alt="wecode logo"
                src="/images/common/icon/wecode-logo-white.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
