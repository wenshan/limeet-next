import { Row, Col, Image } from 'react-bootstrap';
import LocalStorageClient from '@/components/LocalStorageClient';
import { queryProductListServer } from '@/services/index';

import './index.less';

const getProductListFetchServer = async ({ lang, c_key }) => {
  const pagination = {
    current: 1,
    pageSize: 100,
    total: 0
  };
  const language = lang || 'ja-JP';
  const product_type_id = c_key;
  const result = await queryProductListServer({ ...pagination, product_type_id, language });
  if (result && result.status === 200 && result.data && result.data.rows) {
    return result.data.rows;
  } else {
    return [];
  }
}

async function ListServer({ lang, c_key }) {
  const currentKey = c_key || 'all';
  const productList = await getProductListFetchServer({ lang, key: currentKey });
  const listHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    productList &&
      productList[0] &&
      productList.length &&
      productList.map((item, idx) => {
        html.push(
          <Col key={`${idx}_${item.product_id}`} xs={6} sm={4} xxl={3}>
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
  return (
    <>
      <LocalStorageClient productList={productList} key={currentKey}></LocalStorageClient>
      <Row>{listHtml()}</Row>
    </>)
};

export default ListServer;
