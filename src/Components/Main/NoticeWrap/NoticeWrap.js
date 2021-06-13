import React from 'react';
import './NoticeWrap.scss';
import { Link } from 'react-router-dom';

class NoticeWrap extends React.Component {
  render() {
    const { getMonth } = this.props;
    return (
      <div className="NoticeWrap">
        <div className="notice">
          <Link to="/">
            <dl>
              <dt>공지사항</dt>
              <dd class="txt">
                <p className="st_elps">
                  [{getMonth + 1}월] 미리보는 비스킷 전체 메뉴
                </p>
              </dd>
            </dl>
          </Link>
        </div>
      </div>
    );
  }
}

export default NoticeWrap;
