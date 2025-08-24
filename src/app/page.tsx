'use client';
import React, { Component } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import BannerSwiper from '@/components/BannerSwiper';
import Categories from '@/components/Categories';
import Header from '@/components/Header';
import List from '@/components/List';
import Title from '@/components/Title';
import './index.less';

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Header from="index"></Header>
      <BannerSwiper></BannerSwiper>
      <Categories></Categories>
      <Container fluid className='list-wrap'>
        <Title title={t('common.title.sales')} />
        <List from="home"></List>
        <Row>
          <Col>
            <div className='more-wrap clearfix'>
              <Link href='/productList/all'> See more… </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
