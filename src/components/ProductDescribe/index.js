import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container } from 'react-bootstrap';
import Title from '../Title';

import './index.less';

// eslint-disable-next-line @next/next/no-async-client-component
async function ProductHighlight({productDetail}) {
  await initI18nServer();
  const { description } = productDetail;
  console.log('description:', description);
  if (!description) {
    return false;
  }
  return (
    <Container className='product-describe clearfix'>
      <Title title={i18n.t('common.title.detail')} />
      <div className='clearfix container' dangerouslySetInnerHTML={{ __html: description ? description : '' }} />
    </Container>
  );
}

export default ProductHighlight;
