import { Carousel, Container, Image } from 'react-bootstrap';
import { getBannerServer } from '@/services/index';

import './index.less';

const whereParamsBanner = {
  channel: 'limeetpet',
  type: 'home'
};

const getBannerFetch = async ({ lang }) => {
  const projectId = 1747727677;
  const language = lang;
  try {
    const result = await getBannerServer({ projectId, ...whereParamsBanner, language });
    if (result && result.status == 200 && result.data && result.data && result.data.rows) {
      return result.data.rows;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};

async function BannerSwiperServer({ lang }) {
  const swiperBanner = await getBannerFetch({ lang });
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
export default BannerSwiperServer;
