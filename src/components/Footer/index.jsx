import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Whatapp from '@/components/Whatapp';
import CategoriesFooter from '@/components/CategoriesFooter';
import normalizeLangCode from '@/utils/langUtils';
import './index.less';

// eslint-disable-next-line @next/next/no-async-client-component
async function Footer({ lang }) {
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  return (
    <Container className='footer' fluid>
      <Row>
        <Col sm>
          <h3 className='title'>
            {i18n.t('footer.product.we')}
          </h3>
          <ul className='list'>
            <li>
              <Link href={`/brand/${lang}`}>
                {i18n.t('footer.product.brand.title')}
              </Link>
            </li>
            <li>
              <Link href={`/about/${lang}`}>
                {i18n.t('footer.product.factory.title')}
              </Link>
            </li>
            <li>
              <Link href={`/productList/${lang}/all`}>
                {i18n.t('footer.product.factory.product')}
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm>
          <h3 className='title'>
            {i18n.t('footer.product.category.title')}
          </h3>
          <CategoriesFooter lang={lang}></CategoriesFooter>
        </Col>
        <Col sm>
          <h3 className='title'>
            {i18n.t('footer.product.contact')}
          </h3>
          <div className='company clearfix'>
            <ul className='list'>
              <li>
                <span>
                  {i18n.t('footer.product.factory.address')}:
                </span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China
              </li>
              <li>
                <span>Email:</span>
                <a href='mailto:hou_ve@qq.com'>hou_ve@qq.com</a>
              </li>
              <li className='wrap-box'>
                <span className='youtube'><a target='_blank' href="https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA"><img src="https://img.limeetpet.com/limeet/icon/icons8-youtube-240.png" /></a></span>
                <span className='facebook'><a target='_blank' href="https://www.facebook.com/limeet.366183"><img src="https://img.limeetpet.com/limeet/icon/icons8-facebook-240.png" /></a></span>
                <Whatapp></Whatapp>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
