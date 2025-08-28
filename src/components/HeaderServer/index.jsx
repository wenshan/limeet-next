import { Dropdown, Container } from 'react-bootstrap';
import Link from 'next/link';
import initMenuServer from '@/constant/menuNavServer';

import './index.less';

// eslint-disable-next-line @next/next/no-async-client-component
async function HeaderServer() {
  const menuInit = initMenuServer['en-US'];
  const menuNav = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    menuInit && menuInit[0] && menuInit.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const htmlDropdown = [];
        item.children.forEach((list) => {
          if (list.active) {
            htmlDropdown.push(
              <span key={list.key} active>
                <Link href={`${list.path}/${list.value}`} className='nav-link'>{list.name}</Link>
              </span>
            );
          } else {
            htmlDropdown.push(
              <span key={list.key}>
                <Link href={`${list.path}/${list.value}`} className='nav-link'>{list.name}</Link>
              </span>
            );
          }
        });
        if (item.active) {
          html.push(
            <li key={item.name} title={item.name} id='basic-nav-dropdown' className='active'>
              <Link href={`${item.path}/${item.value}`} className='nav-link'>{item.name}</Link>
              <div className='dropdown-wrap'>
                {htmlDropdown}
              </div>
            </li>
          );
        } else {
          html.push(
            <li key={item.name} title={item.name} id='basic-nav-dropdown'>
              <Link href={`${item.path}/${item.value}`} className='nav-link'>{item.name}</Link>
              <div className='dropdown-wrap'>
                {htmlDropdown}
              </div>
            </li>
          );
        }
      } else {
        if (item.active) {
          html.push(
            <li key={item.key} className='active'>
              <Link href={`${item.path}/${item.value}`} className='nav-link'>{item.name}</Link>
            </li>
          );
        } else {
          html.push(
            <li key={item.key}>
              <Link href={`${item.path}/${item.value}`} className='nav-link'>{item.name}</Link>
            </li>
          );
        }
      }
    });
    return html;
  };

  return (
    <Container fluid>
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
              <h1><Link href='/'>LIMEET</Link></h1>
              <h2>
                {t('common.header.name.second')}
                <img src='https://img.limeetpet.com/limeet/maogou.png' alt="Limeet" />
              </h2>
              <p className='clearfix'>
                <img src='https://img.limeetpet.com/limeet/xin.png' alt="Limeet" />
                {t('common.header.name.des')}
              </p>
            </div>
          </div>
          <div className='locale'>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                {languageCurrent(language)}
              </Dropdown.Toggle>
              <Dropdown.Menu>{popupColumns()}</Dropdown.Menu>
            </Dropdown>
          </div>
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
