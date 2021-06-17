import React from 'react';
import { Link } from 'react-router-dom';
import RecommendSlideCount from './RecommendSlideCount';
import { TASTE } from './RecommendWrapConst/GnbMenu';

class SlideContents extends React.Component {
  render() {
    const {
      recommendTaste,
      listTasteTransform,
      listTransition,
      recommendList,
    } = this.props;
    return (
      <dd class="dd">
        {TASTE.map(el => {
          return (
            <div
              class="listRecom"
              style={
                recommendTaste === el.content
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              <div class="imgListSlide">
                <div class="prodList">
                  <ul
                    class="prodCarousel"
                    style={{
                      transform: `translateX(${listTasteTransform}px)`,
                      transition: listTransition,
                    }}
                  >
                    <li
                      class="slideCount"
                      key={
                        recommendList.result?.[recommendList.result?.length - 1]
                          .id
                      }
                    >
                      <div className="proModule">
                        <div className="imgWrap">
                          <Link to="/" class="count">
                            <img
                              alt="상품"
                              src={
                                recommendList.result?.[
                                  recommendList.result?.length - 1
                                ].images
                              }
                            />
                          </Link>
                        </div>
                        <div className="txtWrap">
                          <Link to="/" class="count">
                            <div className="titleInfo">
                              <span class="title">
                                {
                                  recommendList.result?.[
                                    recommendList.result?.length - 1
                                  ].title
                                }
                              </span>
                            </div>
                          </Link>
                          <div className="priceInfo">
                            <p className="sale">
                              <span className="price">
                                {
                                  recommendList.result?.[
                                    recommendList.result?.length - 1
                                  ].price
                                }
                              </span>
                              <span className="won">원</span>
                            </p>
                            <p className="servings">
                              /
                              {
                                recommendList.result?.[
                                  recommendList.result?.length - 1
                                ].gram
                              }
                              g
                            </p>
                            <button type="button" className="cartBtn">
                              <img
                                alt="cart"
                                src="/images/common/icon/basket.png"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                    {recommendList.result?.map((ele, index) => {
                      return index ===
                        recommendList.result.length - 1 ? null : (
                        <RecommendSlideCount
                          key={ele.id}
                          title={ele.title}
                          price={ele.price}
                          gram={ele.gram}
                          images={ele.images}
                        />
                      );
                    })}
                    <li class="slideCount" key={recommendList.result?.[0].id}>
                      <div className="proModule">
                        <div className="imgWrap">
                          <Link to="/" class="count">
                            <img
                              alt="상품"
                              src={recommendList.result?.[0].images}
                            />
                          </Link>
                        </div>
                        <div className="txtWrap">
                          <Link to="/" class="count">
                            <div className="titleInfo">
                              <span class="title">
                                {recommendList.result?.[0].title}
                              </span>
                            </div>
                          </Link>
                          <div className="priceInfo">
                            <p className="sale">
                              <span className="price">
                                {recommendList.result?.[0].price}
                              </span>
                              <span className="won">원</span>
                            </p>
                            <p className="servings">
                              / {recommendList.result?.[0].gram}g
                            </p>
                            <button type="button" className="cartBtn">
                              <img
                                alt="cart"
                                src="/images/common/icon/basket.png"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </dd>
    );
  }
}

export default SlideContents;
