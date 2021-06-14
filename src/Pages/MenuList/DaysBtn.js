import React from 'react';
import { DAYS } from './MenuListDays';
import './daysBtn.scss';

class DaysBtn extends React.Component {
  render() {
    return (
      <div className="cate">
        <span
          className={this.props.cate === '전체' ? 'activateCate' : 'cateAll'}
          onClick={() => this.props.handleClickCate('전체')}
        >
          전체
        </span>
        {DAYS.map(day => {
          return (
            <button
              type="button"
              className={
                this.props.cate === day.content ? 'activateDays' : 'days'
              }
              onClick={() => this.props.handleClickCate(day.content)}
            >
              {day.content}
            </button>
          );
        })}
      </div>
    );
  }
}

export default DaysBtn;
