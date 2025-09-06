import { Container, Image } from 'react-bootstrap';

import './index.less';
import ClientRunTimeDom from '@/components/ClientRunTimeDom';

async function DetailSwiperServer({ productDetail }) {
  let listImgs = [];
  const restSwiperImg = [];
  const restSkuList = [];
  let currentProductDetail;
  if (productDetail) {
    if (productDetail && productDetail.image_link && productDetail.additional_image_link && productDetail.additional_image_link[0] && productDetail.saleSkusList) {
      // 主图
      if (productDetail.image_link) {
        listImgs.push(productDetail.image_link);
      }
      if (productDetail.additional_image_link && productDetail.additional_image_link[0]) {
        listImgs = listImgs.concat(productDetail.additional_image_link);
      }
      // 附属图
      listImgs.forEach((item, index) => {
        restSwiperImg.push(Object.assign({}, { src: item, des: 'additional_image_link' }, { index: index }));
      });
      // sku 图
      if (productDetail.saleSkusList[0]) {
        productDetail.saleSkusList.forEach((item, idx) => {
          const currentIndex = listImgs.length + idx;
          if (item.saleType === 'pattern') {
            restSwiperImg.push(Object.assign({}, { src: item.pattern, des: item.saleValue }, { index: currentIndex }));
          }
          restSkuList.push(Object.assign({}, item, { index: currentIndex }));
        });
        currentProductDetail = Object.assign({}, productDetail, { monetary_unit: productDetail.saleSkusList[0].monetary_unit, sale_price: productDetail.saleSkusList[0].sale_price, price: productDetail.saleSkusList[0].price, discount: productDetail.saleSkusList[0].discount, saleValue: productDetail.saleSkusList[0].saleValue });
      }
      currentProductDetail = Object.assign({}, productDetail);
    }
  }

  const renderSwiperHtml = () => {
    const html = [];
    if (restSwiperImg && restSwiperImg.length > 0) {
      restSwiperImg.map((item, idx) => {
        html.push(
          <div className="carousels-item" key={item.src} index={item.index}>
            <Image src={item.src} fluid alt={productDetail.title} />
          </div>
        );
      });
    }
    return html;
  };

  const renderIndicatorHtml = () => {
    const html = [];
    restSwiperImg &&
      restSwiperImg.length &&
      restSwiperImg.map((item, idx) => {
        if (item && item.src) {
          if (idx === 0) {
            html.push(<div className="indicator active" data-index={idx} key={`${item.saleValue}_${idx}`}></div>);
          } else {
            html.push(<div className="indicator" data-index={idx} key={`${item.saleValue}_${idx}`}></div>);
          }
        }
      });
    return html;
  };

  const cardHtmlSku = () => {
    const cardHtml = [];
    if (restSkuList && restSkuList[0]) {
      restSkuList.forEach((item, idx) => {
        const index = listImgs.length + idx;
        if (item.saleType && item.saleType !== 'default') {
          cardHtml.push(
            <div className='thumbnail active' key={`${item.product_main_id}_${item.product_id}_${item.id}`} id={`${item.product_main_id}_${item.product_id}_${item.id}`} data-index={index}>
              <div className='box'>
                {item.saleType === 'pattern' ? (<>
                  <Image src={`${item.pattern + '?x-oss-process=style/w480'}`} fluid alt={item.saleValue} />
                  <div className='thumbnails-title text-truncate'>{item.pattern_name}</div></>) : (<div className='thumbnails-title text-truncate'>{item.saleValue}</div>)}
              </div>
            </div>
          );
        }
      });
    }
    return cardHtml;
  };

  const gtagEvent = (data) => {
    if (window.gtag && gtag && data && data.projectId && data.offer_id && currentSaleSku) {
      gtag('event', 'detail_buy_click', {
        'language': data.language,
        'title': data.title,
        'offer_id': data.offer_id,
        'product_id': data.product_id,
        'product_main_id': data.product_main_id,
        'projectId': data.projectId,
        'saleType': currentSaleSku.saleType,
        'saleValue': currentSaleSku.saleValue,
        'sale_price': currentSaleSku.sale_price,
        'monetary_unit': currentSaleSku.monetary_unit,
        'discount': currentSaleSku.discount,
        'price': currentSaleSku.price,
      });
    }
  };
  const buyLink = () => {
    let html = '';
    // let defaultLink = 'https://www.amazon.co.jp/-/en/stores/LIMEETKET%E3%83%9A%E3%83%83%E3%83%88%E3%83%9B%E3%83%BC%E3%83%A0/page/E8D38BBB-5773-49C9-8A2F-0CC199CAC4C7';
    if (productDetail && productDetail.link && productDetail.link.indexOf('www.taobao.com') > -1) {
      html = (<a href={`${productDetail.mobile_link ? productDetail.mobile_link : productDetail.link}`} target="_blank" >淘宝购买</a>)
    } else {
      html = (<a href={productDetail.link} target="_blank" >Go to Amazon to buy</a>)
    }
    return html;
  };

  if (!(productDetail.image_link || productDetail.additional_image_link || !productDetail.saleSkusList[0])) {
    return false;
  }

  return (
    <>
      <Container className='detail-swiper clearfix'>
        <section className='swiper-container'>
          <div id="carousels-detail" className="carousels-container">
            <div className="carousels">
              <div className="carousels-inner">
                {renderSwiperHtml()}
              </div>
              <div className="carousels-indicators">
                {renderIndicatorHtml()}
              </div>
              <div className="carousels-control control-prev">←</div>
              <div className="carousels-control control-next">→</div>
            </div>
            {currentProductDetail && (<div className='page-detail-sale-sku'>
              <div className='price-wrap clearfix'>
                <div className='price'>
                  <i className='unit'>{currentProductDetail.monetary_unit}</i>
                  <span className='value'>{currentProductDetail.sale_price}</span>
                  <span className='del-value'>{currentProductDetail.price}</span>
                  {currentProductDetail.discount > 0 && (<span className='original-value'>-{currentProductDetail.discount}%</span>)}
                </div>
                <div className='title'>
                  {currentProductDetail.title} {(currentProductDetail.saleValue && productDetail.saleSkusList.length > 1) && (<span className='sale-value'>（{currentProductDetail.saleValue}）</span>)}
                </div>
              </div>
              <div className="thumbnails-container">
                {cardHtmlSku()}
              </div>
              <div className='submit-button clearfix'>
                {buyLink()}
              </div>
            </div>)}
          </div>
        </section>
        <a href='/' className='arrow-left'>Back</a>
      </Container>
      <ClientRunTimeDom saleSkusList={restSkuList} productDetail={productDetail}></ClientRunTimeDom>
    </>
  );
}

export default DetailSwiperServer;
