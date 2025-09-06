import { Container, Image } from 'react-bootstrap';
import { getBannerServer } from '@/services/index';


import './index.less';

const whereParamsBanner = {
  channel: 'limeetpet',
  type: 'home'
};

const getBannerFetchServer = async ({ lang }) => {
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
  const swiperBanner = await getBannerFetchServer({ lang });
  const renderSwiperHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    swiperBanner &&
      swiperBanner.length &&
      swiperBanner.map((item, idx) => {
        if (item.is_show && item.src) {
          html.push(
            <div className="carousels-item" key={idx} title={item.name}>
              <a href={item.url} target='_blank' title={item.name} ><Image src={item.src} fluid /> </a>
            </div>
          );
        }
      });
    return html;
  };
  const renderIndicatorHtml = () => {
    const html = [];
    swiperBanner &&
      swiperBanner.length &&
      swiperBanner.map((item, idx) => {
        if (item.is_show && item.src) {
          if (idx === 0) {
            html.push(<div className="indicator active" data-index={idx} key={`${item.name}_${idx}`}></div>);
          } else {
            html.push(<div className="indicator" data-index={idx} key={`${item.name}_${idx}`}></div>);
          }
        }
      });
    return html;
  };

  return (
    <Container fluid className='banner-swiper'>
      <div id="carousels-banner" className="carousels-container">
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
      </div>
    </Container>
  );
}
export default BannerSwiperServer;
