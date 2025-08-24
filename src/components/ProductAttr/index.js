import React, { Component } from 'react';
import RootStore from '@/stores/rootStore';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title';

import './index.less';

function ProductAttr() {
  const {t} = useTranslation();
  const { productDetail } = RootStore();
  const listAttr = () => {
    const html = [];
    if (
      productDetail &&
      Object.prototype.toString.call(productDetail) === '[object Array]' &&
      productDetail.length
    ) {
      // eslint-disable-next-line no-unused-expressions
      productDetail.map((item, idx) => {
        html.push(
          <li key={idx}>
            <span className='name ellipsis' title={item.attribute_name}>
              {item.attribute_name || ''}
            </span>
            <span className='value ellipsis' title={item.attribute_value}>
              {item.attribute_value || ''}
            </span>
          </li>
        );
      });
    }
    return html;
  };
  return (
    <Container className='product-attr clearfix'>
      <Title title={t('common.title.attribute')} />
      <div className='clearfix'>
        <ul>{listAttr()}</ul>
      </div>
    </Container>
  );
}

export default ProductAttr;
