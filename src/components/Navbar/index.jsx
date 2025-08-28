
import { Container, } from 'react-bootstrap';
import Link from 'next/link';
import initMenuServer from '@/constant/menuNavServer';

import './index.less';
async function NavbarMenu({ params }) {
  console.log('NavbarMenu params:', params);
  const menuInit = initMenuServer['zh-CN'];
  console.log('menuInit:', menuInit);
  const menuNav = () => {
    const html = [];
    menuInit && menuInit[0] && menuInit.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const htmlDropdown = [];
        item.children.forEach((list) => {
          if (list.active) {
            htmlDropdown.push(
              <span key={list.key} active>
                <Link href={`${list.path}/${list.value}`}>{list.name}</Link>
              </span>
            );
          } else {
            htmlDropdown.push(
              <span key={list.key}>
                <Link href={`${list.path}/${list.value}`}>{list.name}</Link>
              </span>
            );
          }
        });
        if (item.active) {
          html.push(
            <li key={item.name} title={item.name} id='basic-nav-dropdown' className='active'>
              {item.name}
              <div className='dropdown-wrap'>
                {htmlDropdown}
              </div>
            </li>
          );
        } else {
          html.push(
            <li key={item.name} title={item.name} id='basic-nav-dropdown'>
              {item.name}
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
              <Link href={`${item.path}/${item.value}`}>{item.name}</Link>
            </li>
          );
        } else {
          html.push(
            <li key={item.key}>
              <Link href={`${item.path}/${item.value}`}>{item.name}</Link>
            </li>
          );
        }
      }
    });
    return html;
  };

  return (
    <Container fluid>
      <div className='header-warp clearfix'>
        <div className='mask' />
        <div className='nav-sub'>
          <div className='navbar-nav'>
            <ul>
              {menuNav()}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NavbarMenu;
