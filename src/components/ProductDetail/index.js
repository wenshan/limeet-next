import { useEffect, useState } from 'react';
import RootStore from '@/stores/rootStore';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Title from '../Title';
import './index.less';
function ProductDetail() {
  const { id, setProductId, productDetail } = RootStore();
  const { image_link, additional_image_link, lifestyle_image_link } = productDetail;
  const imgList = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    lifestyle_image_link &&
      lifestyle_image_link.length &&
      lifestyle_image_link.map((item, idx) => {
        html.push(<Image src={item} fluid key={idx} />);
      });
    return html;
  };
  return <Container className='product-detail-img-list'>{imgList()}</Container>;
}

export default ProductDetail;
