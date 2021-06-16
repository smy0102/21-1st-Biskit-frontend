import React from 'react';
import './MenuList.scss';
import { FILTER } from './MenuListFilter';
import List from './List';
import DaysBtn from './DaysBtn';
import ThemeBtn from './ThemeBtn';
import DeliveryInfo from './DeliveryInfo';
import ThemeInfo from './ThemeInfo';
import { Link, withRouter } from 'react-router-dom';
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
      unlike: false,
    };
  }

  fetchItems = qs => {
    const url = qs
      ? `http://10.58.0.85:8000/products${qs}`
      : `http://10.58.0.85:8000/products?sort=-created_at`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          snackList: data.result,
        });
      });
  };

  componentDidMount() {
    this.fetchItems();
  }

  handleLikeBtn = e => {
    this.setState({ unlike: !this.state.unlike });
  };

  handleClickTaste = (theme, qs) => {
    this.setState({ tastes: theme });
    this.fetchItems(qs);
  };

  handleClickCate = (day, qs) => {
    this.setState({ cate: day });
    this.fetchItems(qs);
  };

  handleClickTab = e => {
    this.setState({ tab: e.target.textContent });
  };

  handleClickFiltering = (e, qs) => {
    this.setState({ filtering: e.target.textContent });
    this.fetchItems(qs);
  };

  handleMenuTab = id => {
    this.setState({ currentId: id });
  };

  render() {
    return (
      <>
        <section>
          <div className="contentWarp">
            <div className="topSec">
              <h1>BISKIT 메뉴</h1>
              <div className="cateWrap">
                <div
                  className="tabWrap"
                  onClick={e => this.handleClickTab(e)}
                  value="Tab"
                >
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
                      this.fetchItems('?sort=-created_at');
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
                        onClick={e => this.handleClickFiltering(e, list.qs)}
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
                      id={data.id}
                      title={data.title}
                      price={data.price}
                      calorie={data.calorie}
                      gram={data.gram}
                      img={data.img}
                      taste={data.taste}
                      handlelikeBtn={this.handleLikeBtn}
                      unlike={this.state.unlike}
                      rating={data.rating}
                      reviews={data.reviews}
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
