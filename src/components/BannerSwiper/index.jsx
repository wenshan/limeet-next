'use client';
import React, { useEffect } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';

import './index.less';


function Banner({ }) {
  const { swiperBanner, getBannerFetch } = RootStore();
  const renderSwiperHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    swiperBanner &&
      swiperBanner.length &&
      swiperBanner.map((item, idx) => {
        if (item.is_show && item.src) {
          html.push(
            <Carousel.Item key={idx} title={item.name}>
              <a href={item.url} target='_blank' title={item.name} ><Image src={item.src} fluid /> </a>
            </Carousel.Item>
          );
        }
      });
    return html;
  };

  return (
    <Container fluid className='banner-swiper'>
      <Carousel data-bs-theme='dark' interval={3000}>
        {renderSwiperHtml()}
      </Carousel>
    </Container>
  );
}
export default Banner;
