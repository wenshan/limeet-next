'use client';
import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import initMenuServer from '@/constant/menuNavServer';
import normalizeLangCode from '@/utils/langUtils';

import './index.less';

// eslint-disable-next-line @next/next/no-async-client-component
export default function Page404() {
  const lang = 'ja-JP';
  const normLang = normalizeLangCode(lang);
  const currentPage = '/'
  const menuInit = initMenuServer[normLang];
  const router = useRouter();
  const [countdown, setCountdown] = useState(10); // 5秒后跳转
  const menuNav = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    menuInit && menuInit[0] && menuInit.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const htmlDropdown = [];
        item.children.forEach((list) => {
          htmlDropdown.push(
            <span key={list.key}>
              <Link href={`${list.path}/${list.lang}/${list.value}`} className='nav-link'>{list.name}</Link>
            </span>
          );
        });

        html.push(
          <li key={item.name} title={item.name} id='basic-nav-dropdown'>
            <Link href={`${item.path}/${item.lang}/${item.value}`} className='nav-link'>{item.name} <i className="triangle"></i></Link>
            <div className='dropdown-wrap'>
              <i className='triangle-top'></i>
              {htmlDropdown}
            </div>
          </li>
        );

      } else {

        html.push(
          <li key={item.key}>
            <Link href={`${item.path == '/' ? '/' + item.lang : item.path + '/' + item.lang}`} className='nav-link'>{item.name}</Link>
          </li>
        );
      }
    });
    return html;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/'
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
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
      <Container fluid>
        <Row>
          <Col sm>
            <Card>
              <Card.Body>
                <Card.Title>404 - Page Not Found</Card.Title>
                <Card.Text>Will automatically jump to the homepage in {countdown} seconds...</Card.Text>
                <Button onClick={() => router.push('/')}>Go to homepage now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  );
}
