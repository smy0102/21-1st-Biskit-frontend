import React from 'react';
import './SignupInputWrap.scss';
import { LIST } from '../../../SignupConst/FirstPhoneNumber';

class SignupInputWrap extends React.Component {
  render() {
    const { pwValue, handelInput, pwValueReconfirm } = this.props;
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
                <input type="text" class="inputTypeText" />
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
                <input type="text" class="inputTypeText" />
              </td>
            </tr>
            <tr>
              <th scope="row">
                주소
                <img alt="필수" src="/images/Signup/Required.gif" />
              </th>
              <td>
                <input type="text" class="inputTypeText" id="adress" />
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
                <input type="text" class="inputTypeText mobile" />
                -
                <input type="text" class="inputTypeText mobile" />
              </td>
            </tr>
            <tr>
              <th scope="row">
                이메일
                <img alt="필수" src="/images/Signup/Required.gif" />
              </th>
              <td>
                <input type="text" class="inputTypeText" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SignupInputWrap;
