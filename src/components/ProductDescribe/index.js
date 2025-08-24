import { useEffect, useState } from 'react';
import RootStore from '@/stores/rootStore';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Title from '../Title';

import './index.less';

function ProductHighlight() {
  const { t } = useTranslation();
  const { id, setProductId, productDetail } = RootStore();
  const { description } = productDetail;
  return (
    <Container className='product-describe clearfix'>
      <Title title={t('common.title.detail')} />
      <div className='clearfix container' dangerouslySetInnerHTML={{ __html: description ? description : '' }} />
    </Container>
  );
}

export default ProductHighlight;
