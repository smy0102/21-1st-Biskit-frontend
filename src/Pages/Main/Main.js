import React from 'react';
import './Main.scss';
import GridWrap from '../../Components/Main/GridWrap/GridWrap';
import SlideWrap from '../../Components/Main/SlideWrap/SlideWrap';
import ReviewWrap from '../../Components/Main/ReviewWrap/ReviewWrap';
import BestWrap from '../../Components/Main/BestWrap/BestWrap';
import NoticeWrap from '../../Components/Main/NoticeWrap/NoticeWrap';
import RecommendWrap from '../../Components/Main/RecommendWrap/RecommendWrap';

class Main extends React.Component {
  constructor() {
    super();
    let fixDate = new Date().setHours(31, 0, 0);
    this.state = {
      listTransform: 0,
      listTasteTransform: 0,
      listReviewTranfrom: 0,
      listTransition: '1s ease-in-out',
      isTasteClass: false,
      date: new Date(),
      fixDate,
      countDate: fixDate - new Date(),
      recommendTaste: '매콤한맛',
    };
  }

  handelTasteToggleClick = () => {
    this.setState({
      isTasteClass: !this.state.isTasteClass,
    });
  };

  handelTasteToggleClick = () => {
    this.setState({
      isTasteClass: !this.state.isTasteClass,
    });
  };

  handleNextMove = () => {
    if (this.state.listTransform > -1920 * 4) {
      this.setState({
        listTransform: this.state.listTransform - 1920,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTransform: 0,
        listTransition: '0s',
      });
    }
  };

  handlePrevMove = () => {
    if (this.state.listTransform < 0) {
      this.setState({
        listTransform: this.state.listTransform + 1920,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTransform: -1920 * 4,
        listTransition: '0s',
      });
    }
  };

  handleTasteNextMove = () => {
    if (this.state.listTasteTransform > -1574) {
      this.setState({
        listTasteTransform: this.state.listTasteTransform - 787,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTasteTransform: 0,
        listTransition: '0s',
      });
    }
  };

  handleTastePrevMove = () => {
    if (this.state.listTasteTransform < 0) {
      this.setState({
        listTasteTransform: this.state.listTasteTransform + 787,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listTasteTransform: -1574,
        listTransition: '0s',
      });
    }
  };

  handleReveiwNextMove = () => {
    if (this.state.listReviewTranfrom > -2160) {
      this.setState({
        listReviewTranfrom: this.state.listReviewTranfrom - 720,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listReviewTranfrom: 0,
        listTransition: '0s',
      });
    }
  };

  handleReveiwPrevMove = () => {
    if (this.state.listReviewTranfrom < 0) {
      this.setState({
        listReviewTranfrom: this.state.listReviewTranfrom + 720,
        listTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        listReviewTranfrom: -2160,
        listTransition: '0s',
      });
    }
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
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.autoNext = setInterval(() => {
      this.handleNextMove();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.autoNext);
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
    } = this.state;
    const {
      handlePrevMove,
      handleNextMove,
      handelTasteToggleClick,
      handleClick,
      handleTastePrevMove,
      handleTasteNextMove,
      handleReveiwPrevMove,
      handleReveiwNextMove,
    } = this;
    const hours = Math.floor(countDate / (60 * 60 * 1000));
    const mins = Math.floor((countDate - hours * 60 * 60 * 1000) / (60 * 1000));
    const secs = Math.floor(
      (countDate - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000
    );
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return (
      <div>
        <div className="Main">
          <section className="container">
            <SlideWrap
              listTransform={listTransform}
              listTransition={listTransition}
              handlePrevMove={handlePrevMove}
              handleNextMove={handleNextMove}
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
            />
            <BestWrap />
            <ReviewWrap
              handleReveiwPrevMove={handleReveiwPrevMove}
              listReviewTranfrom={listReviewTranfrom}
              handleReveiwNextMove={handleReveiwNextMove}
              listTransition={listTransition}
            />
            <NoticeWrap getMonth={this.state.date.getMonth()} />
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
