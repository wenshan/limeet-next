import Title from '../Title';
import Tool from '@/utils/tool';
import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import './index.less';

function Categories() {
  const router = useRouter();
  const { t } = useTranslation();
  const { categories, getCategoriesFetch, setCategories, setProductTypeId } = RootStore();
  const handleCategoryClick = (key) => {
    const newProductCategories = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item.key === key) {
          newProductCategories.push(Object.assign({}, item, { action: true }));
        } else {
          newProductCategories.push(Object.assign({}, item, { action: false }));
        }
      });
    setCategories(newProductCategories);
    setProductTypeId(key);
    router.push(`/productList/${key}`);
  };
  const listHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item.action) {
          html.push(
            <Col sm={6} key={item.key}>
              <div className='item action' onClick={() => handleCategoryClick(item.key)}>
                <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
              </div>
            </Col>
          );
        } else {
          html.push(
            <Col sm={6} key={item.key}>
              <div className='item' onClick={() => handleCategoryClick(item.key)}>
                <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
              </div>
            </Col>
          );
        }
      });
    return html;
  };
  useEffect(()=>{
    getCategoriesFetch('all');
  }, []);
  return (
    <Container fluid>
      <div className='categories clearfix'>
        <Title title={t('common.title.categories')} />
        <div className='menu clearfix'>
          <Row>{listHtml()}</Row>
        </div>
        <div className='describe clearfix'>
          <p>
            <img src='https://img.limeetpet.com/limeet/jiaozhang.png' />
            {t('common.about.des')}
            <Link href='/brand'>See More</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Categories;
