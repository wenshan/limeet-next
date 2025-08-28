'use client';
import Title from '../Title';
import Tool from '@/utils/tool';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import './index.less';

function CategoriesFooter() {
  const { t } = useTranslation();
  const { categories, language, getCategoriesFetch } = RootStore();

  const renderHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item && item.active) {
          html.push(
            <Nav.Link
              key={item.key}
              href={`/productList/${language}/${item.key}`}
              onClick={() => setCurrentCategoriesHandler(item.key)}
              active
            >
              {item.title}
            </Nav.Link>
          );
        } else {
          html.push(
            <Nav.Link
              key={item.key}
              href={`/productList/${language}/${item.key}`}
              onClick={() => setCurrentCategoriesHandler(item.key)}
            >
              {item.title}
            </Nav.Link>
          );
        }
      });
    return html;
  };
  useEffect(() => {
    getCategoriesFetch('all');
  }, []);
  return (
    <Nav className='flex-column'>{renderHtml()}</Nav>
  );
}

export default CategoriesFooter;
