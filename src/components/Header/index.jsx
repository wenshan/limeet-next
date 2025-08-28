'use client';
import '@/locales/i18n_client';
import languageObj from '@/constant/language';
import { Dropdown, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import listToTreeSelf from '@/utils/listToTreeSelf';
import RootStore from '@/stores/rootStore';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import store from 'store2';
import initMenu from '@/constant/menuNav';
// import { initI18nServer, default as i18n } from '@/locales/i18n';


import './index.less';

// eslint-disable-next-line @next/next/no-async-client-component
function Header() {
  // await initI18nServer();
  const { t, i18n } = useTranslation();
  const { language, setLanguage, menu,  setMenu, getCategoriesFetch, getProductListFetch, getBannerFetch} = RootStore();
  const router = useRouter();
  const gotoPage = (path, key, value, current) => {
    const objMenu = [];
    if (path && key && menu && menu[0]) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      menu &&
        menu.forEach((item) => {
          objMenu[item.key] = Object.assign({}, item, { active: false });
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      menu && menu[0] && 
        menu.forEach((item) => {          
          if (item.current === current) {
            objMenu[item.key] = Object.assign({}, item, { active: true });
            if (item.father_key) {
              if (item.key === key) {
                objMenu[item.key] = Object.assign({}, objMenu[item.key], { active: true });
              } else {
                objMenu[item.key] = Object.assign({}, objMenu[item.key], { active: false });
              }
            }
          } else {
            objMenu[item.key] = Object.assign({}, item, { active: false });
          }
        });
      const newMenu = Object.values(objMenu);
      setMenu(newMenu);
      router.push(`${path}/${value}`);
    }
  };

  const menuNav = (menu) => {
    const html = [];
    const { rowsTree } = listToTreeSelf(menu);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    rowsTree &&
      rowsTree.forEach((item) => {
        if (item.children && item.children.length > 0) {
          const htmlDropdown = [];
          item.children.map((list) => {
            if (list.active) {
              htmlDropdown.push(
                <NavDropdown.Item key={list.key} onClick={() => gotoPage(list.path, list.key, list.value, list.current )} active>
                  {list.name}
                </NavDropdown.Item>
              );
            } else {
              htmlDropdown.push(
                <NavDropdown.Item key={list.key} onClick={() => gotoPage(list.path, list.key, list.value, list.current)}>
                  {list.name}
                </NavDropdown.Item>
              );
            }
          });
          if (item.active) {
            html.push(
              <NavDropdown key={item.name} title={item.name} id='basic-nav-dropdown' active>
                {htmlDropdown}
              </NavDropdown>
            );
          } else {
            html.push(
              <NavDropdown key={item.name} title={item.name} id='basic-nav-dropdown'>
                {htmlDropdown}
              </NavDropdown>
            );
          }
        } else {
          if (item.active) {
            html.push(
              <Nav.Link key={item.key} onClick={() => gotoPage(item.path, item.key, item.value, item.current)} active>
                {item.name}
              </Nav.Link>
            );
          } else {
            html.push(
              <Nav.Link key={item.key} onClick={() => gotoPage(item.path, item.key, item.value, item.current)}>
                {item.name}
              </Nav.Link>
            );
          }
        }
      });
    return html;
  };
  const popupColumns = () => {
    const html = [];
    const data = Object.values(languageObj);
    data.map((item) => {
      html.push(
        <Dropdown.Item key={item.value} onClick={() => popupSelectValue(item.value)} eventKey={item.value}>
          {item.label}
        </Dropdown.Item>
      );
    });
    return <ul className='lan-list'>{html}</ul>;
  };
  const languageCurrent = (language) => {
    if (language) {
      return languageObj[language] && languageObj[language].label || 'ja-JP';
    }
  };
  const popupSelectValue = (value) => {
    // const lng = value && value.split('-')[0];
    i18n.changeLanguage(value);
    store.set('lang', value);
    store.set('i18nextLng', value);
    setMenu(initMenu[value]);
    setLanguage(value);
    getCategoriesFetch();
    getProductListFetch();
    getBannerFetch();
    // router.refresh();
    // window.location.reload();
  };

  return (
    <Container fluid>
      <div className='header-warp clearfix'>
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
          <Navbar expand='sm'>
            <Navbar.Brand />
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>{menuNav(menu)}</Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </Container>
  );
}

export default Header;
