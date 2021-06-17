import React from 'react';
import { Link } from 'react-router-dom';
import SlideContents from './SlideContents/SlideContents';
import { TASTE } from './SlideContents/RecommendWrapConst/GnbMenu';
import './RecommendWrap.scss';

class RecommendWrap extends React.Component {
  render() {
    const {
      isTasteClass,
      handelTasteToggleClick,
      recommendTaste,
      handleClick,
      handleTastePrevMove,
      handleTasteNextMove,
      listTransition,
      listTasteTransform,
      recommendList,
    } = this.props;
    return (
      <div className="RecommendWrap">
        <div className="individ">
          <dl>
            <dt className="dt">
              <div className="major">
                <div class="row">나는</div>
                <div className="row">
                  <div className={'slideTaste ' + (isTasteClass ? 'on' : '')}>
                    <button
                      type="button"
                      className="slideHide"
                      onClick={handelTasteToggleClick}
                    >
                      <strong>{recommendTaste}</strong>
                      {isTasteClass ? (
                        <img alt="arrow" src="/images/Main/up-arrow.png" />
                      ) : (
                        <img alt="arrow" src="/images/Main/down-arrow.png" />
                      )}
                    </button>
                    <div className="slideLayout">
                      {TASTE.map(el => {
                        return (
                          <button
                            className="selected"
                            onClick={handleClick}
                            key={el.id}
                            data-index={el.id}
                          >
                            <span>{el.content}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <span class="row">을</span>
                </div>
                <div className="row">좋아합니다.</div>
              </div>
              <p className="desc">
                <span className="name">고객님</span>의 구매 내역과&nbsp;
                <Link to="/" class="linkTxtGreen">
                  맛취향
                </Link>
                에 따라
                <br />
                맛있는 메뉴를 추천드려요
              </p>
              <span className="opacityLeft"></span>
              <div className="miniSlideArrowWrap">
                <button
                  type="button"
                  className="slidePrev"
                  onClick={handleTastePrevMove}
                >
                  <img alt="arrow" src="/images/Main/left-arrow.png" />
                </button>
                <span class="countWrap">
                  <span classNme="num">
                    <strong>
                      {Math.abs(listTasteTransform / 787) ===
                      recommendList.result?.length + 1
                        ? 1
                        : Math.abs(listTasteTransform / 787)}
                    </strong>
                    /{recommendList.result?.length}
                  </span>
                </span>
                <button
                  type="button"
                  className="slideNext"
                  onClick={handleTasteNextMove}
                >
                  <img alt="arrow" src="/images/Main/right-arrow.png" />
                </button>
              </div>
            </dt>
            <SlideContents
              recommendTaste={recommendTaste}
              listTasteTransform={listTasteTransform}
              listTransition={listTransition}
              recommendList={recommendList}
            />
          </dl>
        </div>
        <span class="opacityRight">
          <span></span>
        </span>
      </div>
    );
  }
}

export default RecommendWrap;
