'use client';
import { Row, Col, Image } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import { useEffect } from 'react';
import './index.less';

function List() {
  const { productList, getProductListFetch } = RootStore();

  const listHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    productList &&
      productList.rows &&
      productList.rows.length &&
      productList.rows.map((item, idx) => {
        html.push(
          <Col key={idx} xs={6} sm={4} xxl={3}>
            <div className='item'>
              <a href={`/detail/${item.language}/${item.id}/${item.product_id}`}>
                <div className='img-box'>
                  <Image src={item.image_link} fluid alt={item.title} />
                </div>
                <div className='title' title={item.title}>
                  {item.title && item.title.length > 60 ? `${item.title.substring(0, 60)}...` : item.title}
                </div>
                <div className='price'>
                  <i className='unit'>{item.monetary_unit}</i>
                  <span className='value'>{item.sale_price_value.min ? item.sale_price_value.min : 0}</span>
                  <span className='del-value'>{item.price_value.max ? item.price_value.max : 0}</span>
                  <span className='original-value'>-{item.discount_value.max ? item.discount_value.max : 0}%</span>
                </div>
              </a>
            </div>
          </Col>
        );
      });
    return html;
  };
  useEffect(() => {
    getProductListFetch();
  }, []);
  return <Row>{listHtml()}</Row>;
}

export default List;
