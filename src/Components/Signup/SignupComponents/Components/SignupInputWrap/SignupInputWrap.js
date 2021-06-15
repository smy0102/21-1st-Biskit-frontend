import React from 'react';
import './SignupInputWrap.scss';
import { LIST } from '../../../SignupConst/FirstPhoneNumber';

class SignupInputWrap extends React.Component {
  render() {
    const { pwValue, handelInput, pwValueReconfirm, checkID } = this.props;
    return (
      <div className="SignupInputWrap">
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
                <input
                  type="text"
                  class="inputTypeText"
                  name="idValue"
                  onChange={handelInput}
                  placeholder="biskit123"
                />
                <button type="button" onClick={checkID}>
                  중복확인
                </button>
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
                  class="inputTypeText"
                  name="pwValue"
                  onChange={handelInput}
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
                  class="inputTypeText"
                  name="pwValueReconfirm"
                  onChange={handelInput}
                  value={pwValueReconfirm}
                />
                {pwValueReconfirm !== pwValue && (
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
                <input
                  type="text"
                  class="inputTypeText"
                  name="nameValue"
                  onChange={handelInput}
                  placeholder="홍길동"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                주소
                <img alt="필수" src="/images/Signup/Required.gif" />
              </th>
              <td>
                <input
                  type="text"
                  class="inputTypeText"
                  id="adress"
                  name="adressValue"
                  onChange={handelInput}
                  placeholder="서울특별시 강남구 테헤란로 427 위워크타워"
                />
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
                  {LIST.map(el => {
                    return (
                      <option value={el.value} key={el.id}>
                        {el.value}
                      </option>
                    );
                  })}
                </select>
                -
                <input
                  type="text"
                  class="inputTypeText mobile"
                  name="mobileFirst"
                  onChange={handelInput}
                  placeholder="0000"
                  maxLength="4"
                />
                -
                <input
                  type="text"
                  class="inputTypeText mobile"
                  name="mobileSecond"
                  onChange={handelInput}
                  placeholder="0000"
                  maxLength="4"
                />
                <span> (휴대전화)</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                이메일
                <img alt="필수" src="/images/Signup/Required.gif" />
              </th>
              <td>
                <input
                  type="text"
                  class="inputTypeText"
                  name="emailValue"
                  onChange={handelInput}
                  placeholder="biskit@gmail.com"
                />
                <span>(이메일)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SignupInputWrap;
