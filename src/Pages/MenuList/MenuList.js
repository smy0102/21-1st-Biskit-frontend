import React from 'react';
import './MenuList.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { DAYS } from './MenuListDays';
import { FILTER } from './MenuListFilter';
import List from './List';
import { clearConfigCache } from 'prettier';

class MenuList extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: '배송일별',
      cate: '전체',
      snackList: [],
    };
  }

  handleClickTab = e => {
    this.setState({ tab: e.target.innerHTML });
  };

  handleClickCate = e => {
    this.setState({ cate: e.target.innerHTML });
  };

  render() {
    console.log(this.state.cate);
    return (
      <>
        <Nav />
        <section>
          <div className="contentWarp">
            <div className="topSec">
              <h2>BISKIT 메뉴</h2>
              <div className="cateWrap">
                <div className="tabWrap" onClick={this.handleClickTab}>
                  <button
                    className={
                      this.state.tab === '배송일별' ? 'activateTab' : 'dateTab'
                    }
                  >
                    <span>배송일별</span>
                  </button>
                  <button
                    className={
                      this.state.tab === '테마별' ? 'activateTab' : 'themeTab'
                    }
                  >
                    <span>테마별</span>
                  </button>
                </div>
                <div className="cate" onClick={this.handleClickCate}>
                  <span
                    className={
                      this.state.cate === '전체' ? 'activateCate' : 'cateAll'
                    }
                  >
                    전체
                  </span>
                  {DAYS.map(day => {
                    return (
                      <button
                        type="button"
                        className={
                          this.state.cate === day.content
                            ? 'activateDays'
                            : 'days'
                        }
                      >
                        {day.content}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="filterWarp">
              <p className="deliveryDay">
                {this.state.cate === '전체' ? '모든' : this.state.cate}요일
                배송가능한 메뉴입니다.
              </p>
              <div className="filter">
                <p>주문마감은 "오늘" 입니다.</p>
                <div className="filterListWarp">
                  {FILTER.map(list => {
                    return (
                      <button type="button" className="filterList">
                        {list.content}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="menuListContainer">
              <ul className="menuUl">
                <List />
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default MenuList;
