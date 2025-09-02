import Title from '../Title';
import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import LocalStorageClient from '@/components/LocalStorageClient';
import { queryProductCategoriesServer } from '@/services/index';
import allCategoriesInit from '@/constant/allCategoriesInit';

import './index.less';

const getCategoriesFetchServer = async ({ lang }) => {
  const projectId = 1747727677;
  const language = lang || 'ja-JP';
  const result = await queryProductCategoriesServer({ projectId, language });
  if (result && result.status && result.status === 200 && result.data.rows && result.data.rows[0]) {
    const allCategories = Object.assign({}, allCategoriesInit[language]);
    result.data.rows.push(allCategories);
    return result.data.rows;
  } else {
    return [];
  }
}

async function CategoriesServer({ lang, key }) {
  await initI18nServer();
  const currentKey = key || 'all';
  const categories = await getCategoriesFetchServer({ lang });
  const listHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    categories &&
      categories.length &&
      categories.map((item, idx) => {
        if (item.action === currentKey) {
          html.push(
            <Col sm={6} key={`${item.key}_${idx}`}>
              <div className='item action'>
                <Link href={`/productList/${lang}/${item.key}`} >
                  <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
                </Link>
              </div>
            </Col>
          );
        } else {
          html.push(
            <Col sm={6} key={`${item.key}_${idx}`}>
              <div className='item'>
                <Link href={`/productList/${lang}/${item.key}`} >
                  <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
                </Link>
              </div>
            </Col>
          );
        }
      });
    return html;
  };
  return (
    <>
      <LocalStorageClient categories={categories} key={currentKey}></LocalStorageClient>
      <Container fluid>
        <div className='categories-server clearfix'>
          <Title title={i18n.t('common.title.categories')} />
          <div className='menu clearfix'>
            <Row>{listHtml()}</Row>
          </div>
          <div className='describe clearfix'>
            <p>
              <img src='https://img.limeetpet.com/limeet/jiaozhang.png' />
              {i18n.t('common.about.des')}
              <Link href={`/brand/${lang}`}>See More</Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CategoriesServer;
