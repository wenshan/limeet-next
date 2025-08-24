import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import {
  getBanner
} from '@/services/index';

import './index.less';

const whereParams = {
  channel: 'limeetpet',
  type: 'home'
};

function Banner() {
  const { projectId, language } = RootStore();
  const [ swiperBanner, setSwiperBanner ] = useState([]);
  const getBannerFetch = async () => {
    try {
      const result = await getBanner({ projectId, ...whereParams, language });
      if (result && result.status == 200 && result.data && result.data && result.data.rows) {
        setSwiperBanner(result.data.rows);
      } else {
        setSwiperBanner([]);
      }
    } catch (err) {
      console.log(err);
    }

  };
  useEffect(() => {
    getBannerFetch();
  }, []);
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
