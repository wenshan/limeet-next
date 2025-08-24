'use client';
import { useEffect, useState } from 'react';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { getBanner, queryProductList, queryProductCategories, productDetail, queryProductGroup } from '@/services/index';
import { useTranslation } from 'react-i18next';
import CategoriesSide from '@/components/CategoriesSide';
import List from '@/components/List';
import Header from '@/components/Header';

import './index.less';

function ProductList(props) {
  return (<>
    <Header from="product"></Header>
    <Container fluid className='list-wrap'>
      <Row>
        <Col sm={4} md={3} lg={2}>
          <CategoriesSide></CategoriesSide>
        </Col>
        <Col>
          <List></List>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default ProductList;
