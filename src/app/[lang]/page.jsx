import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerSwiper from '@/components/BannerSwiper';
import Categories from '@/components/Categories';
import List from '@/components/List';
import Title from '@/components/Title';
import ChangeLanguage from '@/components/ChangeLanguage'
import initMenuServer from '@/constant/menuNavServer';
import Link from 'next/link';
import normalizeLangCode from '@/utils/langUtils';
import LocalStorageClient from '@/components/LocalStorageClient';
import { getBannerServer } from '@/services/index';

import './index.less';

const getBannerFetchServer = async ({ lang }) => {
  const projectId = 1747727677;
  const language = lang || 'ja-JP';
  const whereParamsBanner = {
    channel: 'limeetpet',
    type: 'home'
  };
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

// eslint-disable-next-line @next/next/no-async-client-component
async function HomePage({ params }) {
  const { lang = 'ja-JP', key } = await params;
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  const currentPage = '/'
  const menuInit = initMenuServer[normLang];
  const swiperBanner = await getBannerFetchServer({ lang });
  const menuNav = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    menuInit && menuInit[0] && menuInit.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const htmlDropdown = [];
        item.children.forEach((list) => {
          if (key && item.key === key) {
            htmlDropdown.push(
              <span key={list.key} active>
                <Link href={`${list.path}/${list.lang}/${list.value}`} className='nav-link'>{list.name}</Link>
              </span>
            );
          } else {
            htmlDropdown.push(
              <span key={list.key}>
                <Link href={`${list.path}/${list.lang}/${list.value}`} className='nav-link'>{list.name}</Link>
              </span>
            );
          }
        });
        if (item.key === currentPage) {
          html.push(
            <li key={item.name} title={item.name} id='basic-nav-dropdown' className='active'>
              <Link href={`${item.path}/${item.lang}/${item.value}`} className='nav-link'>{item.name} <i className="triangle"></i></Link>
              <div className='dropdown-wrap'>
                <i className='triangle-top'></i>
                {htmlDropdown}
              </div>
            </li>
          );
        } else {
          html.push(
            <li key={item.name} title={item.name} id='basic-nav-dropdown'>
              <Link href={`${item.path}/${item.lang}/${item.value}`} className='nav-link'>{item.name} <i className="triangle"></i></Link>
              <div className='dropdown-wrap'>
                <i className='triangle-top'></i>
                {htmlDropdown}
              </div>
            </li>
          );
        }
      } else {
        if (item.key === currentPage) {
          html.push(
            <li key={item.key} className='active'>
              <Link href={`${item.path == '/' ? '/' + item.lang : item.path + '/' + item.lang}`} className='nav-link'>{item.name}</Link>
            </li>
          );
        } else {
          html.push(
            <li key={item.key}>
              <Link href={`${item.path == '/' ? '/' + item.lang : item.path + '/' + item.lang}`} className='nav-link'>{item.name}</Link>
            </li>
          );
        }
      }
    });
    return html;
  };

  return (
    <>
      <LocalStorageClient lang={lang} swiperBanner={swiperBanner}></LocalStorageClient>
      <Container fluid className='clearfix'>
        <div className='header-warp-server clearfix'>
          <div className='mask' />
          <div className='header'>
            <div className='main'>
              <div className='logo'>
                <Link href='/'>
                  <img src='https://img.limeetpet.com/limeet/limeet_logo.png' alt="Limeet Pet Brand" />
                </Link>
              </div>
              <div className='des'>
                <h1><Link href='/'>{i18n.t('common.header.name')}</Link></h1>
                <h2>
                  {i18n.t('common.header.name.second')}
                  <img src='https://img.limeetpet.com/limeet/maogou.png' alt="Limeet" />
                </h2>
                <p className='clearfix'>
                  <img src='https://img.limeetpet.com/limeet/xin.png' alt="Limeet" />
                  {i18n.t('common.header.name.des')}
                </p>
              </div>
            </div>
            <ChangeLanguage lang={normLang}></ChangeLanguage>
          </div>
          <div className='nav-sub'>
            <div className='mask-sub' />
            <div className='navbar navbar-expand-sm navbar-light'>
              <ul>
                {menuNav()}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <BannerSwiper></BannerSwiper>
      <Categories lang={normLang}></Categories>
      <Container fluid className='list-wrap'>
        <Title title={i18n.t('common.title.sales')} />
        <List from="home" lang={normLang}></List>
        <Row>
          <Col>
            <div className='more-wrap clearfix'>
              <Link href={`/productList/${normLang}/all`}> See more… </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
