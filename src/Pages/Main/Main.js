import React from 'react';
import GridWrap from '../../Components/Main/GridWrap/GridWrap';
import SlideWrap from '../../Components/Main/SlideWrap/SlideWrap';
import ReviewWrap from '../../Components/Main/ReviewWrap/ReviewWrap';
import BestWrap from '../../Components/Main/BestWrap/BestWrap';
import NoticeWrap from '../../Components/Main/NoticeWrap/NoticeWrap';
import RecommendWrap from '../../Components/Main/RecommendWrap/RecommendWrap';
import { API } from '../../config';
import './Main.scss';

const days = ['일', '월', '화', '수', '목', '금', '토'];
const slideTransform = 1920;
const tasteransform = 787;
const reveiwTransform = 720;
const slideindex = 4;
const tasteindex = 3;
const reviewindex = 4;

class Main extends React.Component {
  constructor() {
    super();
    let fixDate = new Date().setHours(31, 0, 0);
    this.state = {
      listTransform: -slideTransform,
      listTasteTransform: -tasteransform,
      listReviewTranfrom: -reveiwTransform,
      listTransition: '1s ease-in-out',
      recommendList: [],
      isTasteClass: false,
      date: new Date(),
      fixDate,
      countDate: fixDate - new Date(),
      recommendTaste: '매콤한맛',
      isPlayOn: true,
    };
  }

  handelTasteToggleClick = () => {
    this.setState({
      isTasteClass: !this.state.isTasteClass,
    });
  };

  handelPlayToggleClick = () => {
    this.setState({
      isPlayOn: !this.state.isPlayOn,
    });
    this.state.isPlayOn
      ? clearInterval(this.autoNext)
      : (this.autoNext = setInterval(() => {
          this.handleNextMove();
        }, 4000));
  };

  tick() {
    this.setState({
      countDate: this.state.fixDate - new Date().getTime(),
    });
  }

  handleClick = e => {
    this.setState({
      recommendTaste: e.target.innerText,
      isTasteClass: !this.state.isTasteClass,
      listTasteTransform: -tasteransform,
    });

    fetch(`${API}/products?taste=${e.target.dataset.index}&per_page=2`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendList: data,
        });
      });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.autoNext = setInterval(() => {
      this.handleNextMove();
    }, 4000);

    fetch(`${API}/products?taste=1&per_page=2`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendList: data,
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.autoNext);
  }

  handleNextMove = () => {
    if (this.state.listTransform > -slideTransform * (slideindex + 1)) {
      this.setState({
        listTransform: this.state.listTransform - slideTransform,
        listTransition: '1s ease-in-out',
      });
    }
  };

  handlePrevMove = () => {
    if (this.state.listTransform < 0) {
      this.setState({
        listTransform: this.state.listTransform + slideTransform,
        listTransition: '1s ease-in-out',
      });
    }
  };

  handleTasteNextMove = () => {
    if (this.state.listTasteTransform > -tasteransform * (tasteindex + 1)) {
      this.setState({
        listTasteTransform: this.state.listTasteTransform - tasteransform,
        listTransition: '1s ease-in-out',
      });
    }
  };

  handleTastePrevMove = () => {
    if (this.state.listTasteTransform < 0) {
      this.setState({
        listTasteTransform: this.state.listTasteTransform + tasteransform,
        listTransition: '1s ease-in-out',
      });
    }
  };

  handleReveiwNextMove = () => {
    if (this.state.listReviewTranfrom > -reveiwTransform * (reviewindex + 1)) {
      this.setState({
        listReviewTranfrom: this.state.listReviewTranfrom - reveiwTransform,
        listTransition: '1s ease-in-out',
      });
    }
  };

  handleReveiwPrevMove = () => {
    if (this.state.listReviewTranfrom < 0) {
      this.setState({
        listReviewTranfrom: this.state.listReviewTranfrom + reveiwTransform,
        listTransition: '1s ease-in-out',
      });
    }
  };

  componentDidUpdate() {
    if (this.state.listTransform === -slideTransform * (slideindex + 1)) {
      setTimeout(() => {
        this.setState({
          listTransform: -slideTransform,
          listTransition: '0s',
        });
      }, 1000);
    }

    if (this.state.listTransform === 0) {
      setTimeout(() => {
        this.setState({
          listTransform: -slideTransform * slideindex,
          listTransition: '0s',
        });
      }, 1000);
    }

    if (this.state.listTasteTransform === -tasteransform * (tasteindex + 1)) {
      setTimeout(() => {
        this.setState({
          listTasteTransform: -tasteransform,
          listTransition: '0s',
        });
      }, 1000);
    }

    if (this.state.listTasteTransform === 0) {
      setTimeout(() => {
        this.setState({
          listTasteTransform: -tasteransform * tasteindex,
          listTransition: '0s',
        });
      }, 1000);
    }

    if (
      this.state.listReviewTranfrom ===
      -reveiwTransform * (reviewindex + 1)
    ) {
      setTimeout(() => {
        this.setState({
          listReviewTranfrom: -reveiwTransform,
          listTransition: '0s',
        });
      }, 1000);
    }

    if (this.state.listReviewTranfrom === 0) {
      setTimeout(() => {
        this.setState({
          listReviewTranfrom: -reveiwTransform * reviewindex,
          listTransition: '0s',
        });
      }, 1000);
    }
  }

  render() {
    const {
      listTransition,
      countDate,
      isTasteClass,
      listTransform,
      listTasteTransform,
      listReviewTranfrom,
      recommendTaste,
      isPlayOn,
      recommendList,
    } = this.state;
    const hours = Math.floor(countDate / (60 * 60 * 1000));
    const mins = Math.floor((countDate - hours * 60 * 60 * 1000) / (60 * 1000));
    const secs = Math.floor(
      (countDate - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000
    );

    const {
      handlePrevMove,
      handleNextMove,
      handelTasteToggleClick,
      handleClick,
      handleTastePrevMove,
      handleTasteNextMove,
      handleReveiwPrevMove,
      handleReveiwNextMove,
      handelPlayToggleClick,
    } = this;
    return (
      <div>
        <div className="Main">
          <section className="container">
            <SlideWrap
              listTransform={listTransform}
              listTransition={listTransition}
              handlePrevMove={handlePrevMove}
              handleNextMove={handleNextMove}
              handelPlayToggleClick={handelPlayToggleClick}
              isPlayOn={isPlayOn}
            />
            <GridWrap
              days={days}
              hours={hours}
              mins={mins}
              secs={secs}
              getMonth={this.state.date.getMonth()}
              getDate={this.state.date.getDate()}
              getDay={this.state.date.getDay()}
            />
            <RecommendWrap
              isTasteClass={isTasteClass}
              handelTasteToggleClick={handelTasteToggleClick}
              recommendTaste={recommendTaste}
              handleClick={handleClick}
              handleTastePrevMove={handleTastePrevMove}
              handleTasteNextMove={handleTasteNextMove}
              listTasteTransform={listTasteTransform}
              listTransition={listTransition}
              recommendList={recommendList}
              tasteransform={tasteransform}
            />
            <BestWrap />
            <ReviewWrap
              handleReveiwPrevMove={handleReveiwPrevMove}
              listReviewTranfrom={listReviewTranfrom}
              handleReveiwNextMove={handleReveiwNextMove}
              listTransition={listTransition}
              reveiwTransform={reveiwTransform}
            />
            <NoticeWrap getMonth={this.state.date.getMonth()} />
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
