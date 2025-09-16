import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import initMenuServer from '@/constant/menuNavServer';
import ChangeLanguage from '@/components/ChangeLanguage'

import './index.less';

// eslint-disable-next-line @next/next/no-async-client-component
async function HeaderServer({ lang, currentPage, c_key }) {
  const menuInit = initMenuServer[lang];
  await initI18nServer();
  await i18n.changeLanguage(lang);
  const menuNav = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    menuInit && menuInit[0] && menuInit.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const htmlDropdown = [];
        item.children.forEach((list) => {
          if (c_key && item.key === c_key) {
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
    <Container fluid className='clearfix'>
      <div className='header-warp-server clearfix'>
        <div className='mask' />
        <div className='header'>
          <div className='main'>
            <div className='logo'>
              <Link href='/'>
                <img src='/limeet_logo.png' alt="Limeet Pet Brand" />
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
          <ChangeLanguage lang={lang}></ChangeLanguage>
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
  );
}

export default HeaderServer;
