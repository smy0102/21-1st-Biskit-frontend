import React from 'react';
import './MenuList.scss';
import { FILTER } from './MenuListFilter';
import List from './List';
import DaysBtn from './DaysBtn';
import ThemeBtn from './ThemeBtn';
import DeliveryInfo from './DeliveryInfo';
import ThemeInfo from './ThemeInfo';
import { Theme } from './MenuListTheme';

class MenuList extends React.Component {
  constructor() {
    super();
    this.state = {
      cate: '전체',
      tastes: '전체',
      tab: '배송일별',
      snackList: [],
      filtering: '신메뉴순',
      currentId: 1,
    };
  }

  fetchItems = (name = 'menuData') => {
    fetch(`/data/MenuList/${name}.json`, {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          snackList: data,
        });
      });
  };

  componentDidMount() {
    this.fetchItems();
  }

  handleClickTaste = theme => {
    this.setState({ tastes: theme });
  };

  handleClickCate = day => {
    this.setState({ cate: day });
  };

  handleClickTab = e => {
    this.setState({ tab: e.target.innerHTML });
  };

  handleClickFiltering = e => {
    this.setState({ filtering: e.target.innerHTML });
  };

  handleMenuTab = id => {
    this.setState({ currentId: id });
  };

  render() {
    console.log(this.state.currentId);
    return (
      <>
        <section>
          <div className="contentWarp">
            <div className="topSec">
              <h1>BISKIT 메뉴</h1>
              <div className="cateWrap">
                <div className="tabWrap" onClick={this.handleClickTab}>
                  <button
                    onClick={() => {
                      this.handleMenuTab(1);
                      this.fetchItems();
                    }}
                    className={
                      this.state.tab === '배송일별' ? 'activateTab' : 'dateTab'
                    }
                  >
                    <span>배송일별</span>
                  </button>
                  <button
                    onClick={() => {
                      this.handleMenuTab(2);
                      this.fetchItems('themeData');
                    }}
                    className={
                      this.state.tab === '테마별' ? 'activateTab' : 'themeTab'
                    }
                  >
                    <span>테마별</span>
                  </button>
                </div>

                {this.state.currentId === 2 && (
                  <ThemeBtn
                    tastes={this.state.tastes}
                    handleClickTaste={this.handleClickTaste}
                  />
                )}

                {this.state.currentId === 1 && (
                  <DaysBtn
                    cate={this.state.cate}
                    handleClickCate={this.handleClickCate}
                  />
                )}
              </div>
            </div>
            <div className="filterWarp">
              {this.state.currentId === 1 && (
                <DeliveryInfo cate={this.state.cate} />
              )}

              {this.state.currentId === 2 && (
                <ThemeInfo tastes={this.state.tastes} />
              )}
              <div className="filter">
                {this.state.currentId === 1 ? (
                  <span>
                    주문마감은
                    {this.state.cate === '전체'
                      ? ` 매일 오전 7시 입니다.`
                      : ` 이번 주 ${this.state.cate}요일 오전 7시 입니다.`}
                  </span>
                ) : (
                  <span>BISKIT의 주문마감은 오전 7시 입니다.</span>
                )}

                <div className="filterListWarp">
                  {FILTER.map(list => {
                    return (
                      <button
                        type="button"
                        className={
                          this.state.filtering === list.content
                            ? 'activatefilterList'
                            : 'filterList'
                        }
                        onClick={this.handleClickFiltering}
                      >
                        {this.state.filtering === list.content
                          ? '✓ ' + list.content
                          : list.content}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="menuListContainer">
              <ul className="menuUl">
                {this.state.snackList.map(data => {
                  return (
                    <List
                      key={data.id}
                      title={data.title}
                      price={data.price}
                      calorie={data.calorie}
                      gram={data.gram}
                      img={data.img}
                      taste={data.taste}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MenuList;
