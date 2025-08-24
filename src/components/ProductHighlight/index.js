import { useEffect, useState } from 'react';
import RootStore from '@/stores/rootStore';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title';

import './index.less';

function ProductHighlight() {
  const { id, setProductId, productDetail } = RootStore();
  const { product_highlight } = productDetail;
  return (
    <Container className='product-highlight clearfix'>
      <div className='clearfix' dangerouslySetInnerHTML={{ __html: product_highlight ? product_highlight : '' }} />
    </Container>
  );
}

export default ProductHighlight;
