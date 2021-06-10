import React from 'react';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      curIndex: 0,
    };
  }

  handleNextMove = () => {
    if (this.state.curIndex <= 5) {
      return (
        'translate3d(-' + 1920 * (this.state.curIndex + 1) + 'px, 0px, 0px)'
      );
    }
  };
  render() {
    return (
      <div>
        <div className="Main">
          <section className="container">
            <div className="slideWrap">
              <div className="slideBox">
                <div className="slideList clearfix">
                  <div className="slideContent slide01">
                    <p>
                      1<img alt="banner" src="images/Main/banner.jpeg"></img>
                    </p>
                  </div>
                  <div className="slideContent slide02">
                    <p>
                      2<img alt="banner" src="images/Main/banner.jpeg"></img>
                    </p>
                  </div>
                  <div className="slideContent slide03">
                    <p>
                      3<img alt="banner" src="images/Main/banner.jpeg"></img>
                    </p>
                  </div>
                  <div className="slideContent slide04">
                    <p>
                      4<img alt="banner" src="images/Main/banner.jpeg"></img>
                    </p>
                  </div>
                  <div className="slideContent slide05">
                    <p>
                      1 5<img alt="banner" src="images/Main/banner.jpeg"></img>
                    </p>
                  </div>
                </div>
                {/* <!-- // .slide_list --> */}
              </div>
              {/* <!-- // .slide_box --> */}
              <div className="slideBtnBox">
                <button
                  type="button"
                  className="slideBtnPrev"
                  onClick={this.handleNextMove}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="slideBtnNext"
                  onClick={() => this.changeSlides(1)}
                >
                  Next
                </button>
                <button className="controlBox">
                  <span className="num">
                    <strong className="uiPageNum">1</strong>
                    <span className="dash">/</span>7
                  </span>
                </button>
              </div>
              {/* <!-- // .slide_btn_box --> */}
              <ul className="slidePagination"></ul>
              {/* <!-- // .slide_pagination --> */}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
