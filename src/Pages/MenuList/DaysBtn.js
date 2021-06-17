import React from 'react';
import { DAYS } from './MenuListDays';
import './daysBtn.scss';

class DaysBtn extends React.Component {
  render() {
    return (
      <div className="cate">
        <span
          className={this.props.cate === '전체' ? 'activateCate' : 'cateAll'}
          onClick={() => {
            const qs = '?sort=-created_at';
            this.props.handleClickCate('전체', qs);
          }}
        >
          전체
        </span>
        {DAYS.map(day => {
          return (
            <button
              key={day.id}
              type="button"
              className={
                this.props.cate === day.content ? 'activateDays' : 'days'
              }
              onClick={() => this.props.handleClickCate(day.content, day.qs)}
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
