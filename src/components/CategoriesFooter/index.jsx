'use client';
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';

import './index.less';

function CategoriesFooter({ lang }) {
  const { categories, language, getCategoriesFetch } = RootStore();
  const renderHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item && item.key) {
          html.push(
            <li key={item.key}><a href={`/productList/${language}/${item.key}`}>{item.title}</a></li>
          );
        }

      });
    return html;
  };
  useEffect(() => {
    getCategoriesFetch('all');
  }, []);
  return (
    <ul className='flex-column'>{renderHtml()}</ul>
  );
}

export default CategoriesFooter;
