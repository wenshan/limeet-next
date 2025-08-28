import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container } from 'react-bootstrap';
import Title from '../Title';

import './index.less';

async function ProductAttr({ productDetail }) {
  await initI18nServer();
  const { product_detail} = productDetail;
  const data = JSON.parse(product_detail);
  if (!data || !data[0]) {
    return;
  }
  const listAttr = () => {
    const html = [];
    if (data && data.length && data[0]) { 
      data.forEach((item, idx) => {
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
      <Title title={i18n.t('common.title.attribute')} />
      <div className='clearfix'>
        <ul>{listAttr()}</ul>
      </div>
    </Container>
  );
}

export default ProductAttr;
