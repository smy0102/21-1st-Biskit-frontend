import React from 'react';
import { Theme } from './MenuListTheme';
import './themeBtn.scss';

class ThemeBtn extends React.Component {
  render() {
    return (
      <div className="themeBtn">
        <span
          className={
            this.props.tastes === '전체' ? 'activateThemeBtn' : 'AllBtn'
          }
          onClick={() => this.props.handleClickTaste('전체')}
        >
          전체
        </span>
        {Theme.map(theme => {
          return (
            <button
              key={theme.id}
              type="button"
              className={
                this.props.tastes === theme.content
                  ? 'activateTastes'
                  : 'tastes'
              }
              onClick={() =>
                this.props.handleClickTaste(theme.content, theme.qs)
              }
            >
              {theme.content}
            </button>
          );
        })}
      </div>
    );
  }
}

export default ThemeBtn;
