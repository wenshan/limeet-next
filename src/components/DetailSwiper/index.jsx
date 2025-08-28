'use client'
import { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import { useRouter } from 'next/navigation';
import './index.less';

function DetailSwiper(props) {
  const router = useRouter();
  const { productDetail, saleSkusList, setSaleSkusList, currentSaleSku, setCurrentSaleSku } = RootStore();
  const [initSwiperImg, setSwiperImg] = useState([]);
  const [index, setIndex] = useState(0);
  const goToBack = () => {
    router.back();
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const renderSwiperHtml = (list) => {
    const html = [];
    if (list && list.length > 0) {
      list.map((item, idx) => {
        html.push(
          <Carousel.Item key={idx} index={item.index}>
            <Image src={item.src} fluid alt={productDetail.title} />
          </Carousel.Item>
        );
      });
    }
    return html;
  };
  const selectSaleSkuHandle = (item) => {
    const newSaleSkus = [];
    if (saleSkusList && saleSkusList[0]) {
      setIndex(item.index);
      saleSkusList.forEach((list) => {
        if (item.id == list.id) {
          if (list.current && list.current == true) {
            newSaleSkus.push(Object.assign({}, list, { current: false }));
          } else {
            setCurrentSaleSku(list);
            newSaleSkus.push(Object.assign({}, list, { current: true }));
          }

        } else {
          newSaleSkus.push(Object.assign({}, list, { current: false }));
        }
      });
    }
    setSaleSkusList(newSaleSkus);
  };
  const cardHtmlSku = () => {
    const cardHtml = [];
    if (saleSkusList && saleSkusList[0]) {
      saleSkusList.forEach((item, idx) => {
        if (item.saleType && item.saleType !== 'default') {
          cardHtml.push(
            <li className={`${item.current == true ? 'item current' : 'item'}`} key={`${item.product_main_id}_${item.product_id}_${item.id}`} id={`${item.product_main_id}_${item.product_id}_${item.id}`} onClick={() => selectSaleSkuHandle(item, idx)}>
              <div className='box'>
                {item.saleType === 'pattern' ? (<><div className='pattern'><Image src={`${item.pattern + '?x-oss-process=style/w480'}`} fluid alt={item.saleValue} /></div>
                  <div className='pattern-name ellipsis'>{item.pattern_name}</div></>) : (<div className='sale-value ellipsis'>{item.saleValue}</div>)}
              </div>
            </li>
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
    let defaultLink = 'https://www.amazon.co.jp/-/en/stores/LIMEETKET%E3%83%9A%E3%83%83%E3%83%88%E3%83%9B%E3%83%BC%E3%83%A0/page/E8D38BBB-5773-49C9-8A2F-0CC199CAC4C7';
    if (productDetail && productDetail.link && productDetail.link.indexOf('www.taobao.com') > -1) {
      html = (<a onClick={() => gtagEvent(productDetail)} href={`${productDetail.mobile_link ? productDetail.mobile_link : productDetail.link}`} target="_blank" >淘宝购买</a>)
    } else {
      html = (<a onClick={() => gtagEvent(productDetail)} href={defaultLink} target="_blank" >Go to Amazon to buy</a>)
    }
    return html;
  };

  useEffect(() => {
    let listImgs = [];
    const restSwiperImg = [];
    const restSkuList = [];
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
          if (idx === 0) {
            restSkuList.push(Object.assign({}, item, { index: currentIndex, current: true }));
          } else {
            restSkuList.push(Object.assign({}, item, { index: currentIndex, current: false }));
          }

        });
      }
      setSaleSkusList(restSkuList);
      setSwiperImg(restSwiperImg);
    } else {
      setSwiperImg([]);
    }
  }, [productDetail.product_id]);

  if (!(productDetail.image_link || productDetail.additional_image_link || !productDetail.saleSkusList[0])) {
    return false;
  }

  return (
    <>
      <Container className='detail-swiper clearfix'>
        <section className='swiper-container'>
          <Carousel data-bs-theme='dark' interval={3000} activeIndex={index} onSelect={handleSelect}>
            {renderSwiperHtml(initSwiperImg)}
          </Carousel>
        </section>
        <div className='arrow-left' onClick={goToBack} />
      </Container>
      {currentSaleSku && (<Container className='page-detail-sale-sku'>
        <div className='price-wrap clearfix'>
          <div className='price'>
            <i className='unit'>{currentSaleSku.monetary_unit}</i>
            <span className='value'>{currentSaleSku.sale_price}</span>
            <span className='del-value'>{currentSaleSku.price}</span>
            {currentSaleSku.discount > 0 && (<span className='original-value'>-{currentSaleSku.discount}%</span>)}
          </div>
          <div className='title'>
            {productDetail.title} {(currentSaleSku.saleValue && saleSkusList.length > 1) && (<span>（{currentSaleSku.saleValue}）</span>)}
          </div>
        </div>
        <div className='sale-sku'>
          <ul>
            {currentSaleSku && cardHtmlSku()}
          </ul>
        </div>
        <div className='submit-button clearfix'>
          {buyLink()}
        </div>
      </Container>)}
    </>
  );
}

export default DetailSwiper;
