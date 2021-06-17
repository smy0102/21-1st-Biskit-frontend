import React from 'react';
import ProductPictures from '../../Components/ProdDetail/ProductPictures/ProductPictures';
import OrderInformation from '../../Components/ProdDetail/OrderInformation/OrderInformation';
import TapList from '../../Components/ProdDetail/TapList/TapList';
import Description from '../../Components/ProdDetail/TapContents/Description';
import Information from '../../Components/ProdDetail/TapContents/Information';
import Review from '../../Components/ProdDetail/TapContents/Review';
import DeliveryRefund from '../../Components/ProdDetail/TapContents/DeliveryRefund';
import WEEK_NAME from '../../Data/weekname';
import './prodDetail.scss';

const tapContents = {
  0: <Description />,
  1: <Information />,
  2: <Review />,
  3: <DeliveryRefund />,
};

class ProdDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      mainTitle: '',
      subTitle: '',
      price: '',
      gram: '',
      calorie: '',
      taste: [],
      evaluation: 0,
      reviewCount: 0,
      deliveryDateArr: [],
      selectedDate: '',
      selectedDateForFetch: '',
      quantity: 0,
      resultPrice: 0,
      isSelectBoxOn: false,
      isLike: false,
      activatedTap: 0,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.3.9:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        const { title, sub_title, price, gram, calorie, taste } = data.result;
        this.setState({
          mainTitle: title,
          subTitle: sub_title,
          price: price,
          gram: gram,
          calorie: calorie,
          taste: taste,
        });
        console.log(data);
      });

    fetch(`http://10.58.3.9:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewCount: data.product_rate.count,
          evaluation: Math.round(data.product_rate.avg * 10) / 10,
        });
        console.log(data);
      });
  }

  setDeliveryDate = () => {
    let dateArr = [];

    for (let i = 2; i < 8; i++) {
      const today = new Date();
      const date = new Date(today.setDate(today.getDate() + i));
      let day = WEEK_NAME[date.getDay()];
      day !== '일' && dateArr.length < 6 && dateArr.push(date);
    }

    for (let i = 0; i < dateArr.length; i++) {
      dateArr[i] = `${dateArr[i].getMonth() + 1}월 ${
        dateArr[i].getDate() + 1
      }일 (${WEEK_NAME[dateArr[i].getDay()]})`;
    }

    this.setState({ deliveryDateArr: dateArr });
  };

  selectDeliveryDate = date => {
    if (!date.target.value) {
      return;
    }

    this.setState(
      {
        selectedDate: date.target.value,
        quantity: 1,
        resultPrice: parseInt(this.state.price).toLocaleString(),
        isSelectBoxOn: true,
      },
      () => {
        date.target.value = '';
        this.convertDeliveryDate(this.state.selectedDate);
      }
    );
  };

  handleQuantity = word => {
    const { quantity } = this.state;

    if (word === 'minus' && quantity === 1) {
      alert('최소 1개 이상 구매하셔야 합니다. 수량을 변경해 주세요.');
      return;
    }

    this.setState(
      {
        quantity: word === 'plus' ? quantity + 1 : quantity - 1,
      },
      this.calculatePrice
    );
  };

  calculatePrice = () => {
    const { price, quantity } = this.state;
    this.setState({
      resultPrice: parseInt(price * quantity).toLocaleString(),
    });
  };

  closeSelectBox = () => {
    this.setState({
      isSelectBoxOn: false,
      quantity: 0,
      resultPrice: 0,
    });
  };

  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  handleTap = tap => {
    this.setState({ activatedTap: tap.target.id });
  };

  putCart = () => {
    if (localStorage.getItem('token') && this.state.selectedDate !== '') {
      fetch('http://10.58.1.177:8000/orders', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          product_id: 1,
          quantity: this.state.quantity,
          total_price: this.state.price * this.state.quantity,
          date: this.state.selectedDateForFetch,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            alert('상품을 장바구니에 담았습니다.');
          }
        });
    } else {
      alert('로그인 후 사용이 가능합니다.');
      this.props.history.push('/login');
    }
  };

  convertDeliveryDate = date => {
    let strArr = date.replace(/[^0-9]/g, '').split('');

    if (strArr.length === 3) {
      strArr.unshift('0');
    } else if (strArr.length === 2) {
      strArr.splice(0, 0, '0');
      strArr.splice(2, 0, '0');
    } else {
      return strArr;
    }

    let newDate = strArr.join('');

    this.setState({ selectedDateForFetch: newDate });
  };

  render() {
    const {
      mainTitle,
      subTitle,
      price,
      gram,
      calorie,
      taste,
      evaluation,
      reviewCount,
      deliveryDateArr,
      selectedDate,
      quantity,
      resultPrice,
      isSelectBoxOn,
      isLike,
      activatedTap,
    } = this.state;

    console.log(this.props);
    return (
      <div className="ProdDetail">
        <header className="DetailHead">
          <article className="headLeft">
            <ProductPictures />
            <div className="subInfo">
              <div className="evaluation">
                <div>
                  고객평점 <span>{evaluation}</span>
                </div>
                <div className="reviewCount">
                  리뷰수 <span>{reviewCount}</span>
                </div>
              </div>
              <div div className="recipeShare">
                <div>
                  <img alt="recipe" src="/images/ProdDetail/recipe-icon.png" />
                  <p>레시피</p>
                </div>
                <div>
                  <img alt="share" src="/images/ProdDetail/share-icon.png" />
                  <p>공유하기</p>
                </div>
              </div>
            </div>
          </article>
          <article className="headRight">
            <div className="titleWrap">
              <div className="subTitle">{subTitle}</div>
              <div className="mainTitle">{mainTitle}</div>
              <div className="origin">원산지: 상품정보 참조</div>
            </div>
            <div className="subInfo">
              <div className="gram"> {parseInt(gram).toLocaleString()}g</div>
              <div className="calorie">
                {' '}
                {parseInt(calorie).toLocaleString()}Kcal
              </div>
              <div className="taste"> {taste}</div>
            </div>
            <div className="priceInfo">
              <div className="priceTitle">판매가</div>
              <div className="priceText">
                {parseInt(price).toLocaleString()}원
              </div>
            </div>
            <div className="pointInfo">
              <div className="pointTitle">포인트적립</div>
              <div className="pointText">
                Biskit 포인트 &nbsp;<span>0.2% 적립</span>&nbsp;{' '}
                <img
                  alt="question"
                  src="/images/ProdDetail/question-icon.png"
                />
              </div>
            </div>
            <div className="deliverymethod">
              <div className="deliverymethodTitle">배송방법</div>
              <div className="deliverymethodText">
                새벽배송&nbsp;{' '}
                <img
                  alt="question"
                  src="/images/ProdDetail/question-icon.png"
                />
              </div>
            </div>
            <div className="deliveryprice">
              <div className="deliverypriceTitle">배송비</div>
              <div>무료배송</div>
            </div>
            <div className="cart">
              <OrderInformation
                className="headOrderInfo"
                mainTitle={mainTitle}
                price={price}
                deliveryDateArr={deliveryDateArr}
                selectedDate={selectedDate}
                quantity={quantity}
                resultPrice={resultPrice}
                isSelectBoxOn={isSelectBoxOn}
                isLike={isLike}
                setDeliveryDate={this.setDeliveryDate}
                selectDeliveryDate={this.selectDeliveryDate}
                closeSelectBox={this.closeSelectBox}
                handleLike={this.handleLike}
                putCart={this.putCart}
                handleQuantity={this.handleQuantity}
              />
            </div>
          </article>
        </header>
        <section className="DetailBody">
          <TapList
            activatedTap={activatedTap}
            reviewCount={reviewCount}
            handleTap={this.handleTap}
          />
          <div className="detailContents">
            <article className="descriptions">
              {tapContents[activatedTap]}
            </article>
            <article className="sideCart">
              <OrderInformation
                className="bodyOrderInfo"
                mainTitle={mainTitle}
                price={price}
                deliveryDateArr={deliveryDateArr}
                selectedDate={selectedDate}
                quantity={quantity}
                resultPrice={resultPrice}
                isSelectBoxOn={isSelectBoxOn}
                isLike={isLike}
                setDeliveryDate={this.setDeliveryDate}
                selectDeliveryDate={this.selectDeliveryDate}
                closeSelectBox={this.closeSelectBox}
                handleLike={this.handleLike}
                putCart={this.putCart}
                handleQuantity={this.handleQuantity}
              />
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default ProdDetail;
