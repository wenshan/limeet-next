import { Container } from 'react-bootstrap';

import './index.less';

function ProductHighlight({ productDetail }) {
  const { product_highlight } = productDetail;
  if (!product_highlight) {
    return;
  }
  return (
    <Container className='product-highlight clearfix'>
      <div className='clearfix' dangerouslySetInnerHTML={{ __html: product_highlight ? product_highlight : '' }} />
    </Container>
  );
}

export default ProductHighlight;
