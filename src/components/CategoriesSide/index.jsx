import { Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import RootStore from '@/stores/rootStore';
import { useParams } from 'next/navigation';

import './index.less';

function CategoriesSide() {
  const routes = useRouter();
  const { categories, setCategories, product_type_id, setProductTypeId, getCategoriesFetch } = RootStore();
  const { key } = useParams();
  const setCurrentCategoriesHandler = (key) => {
    const list = [];
    if (key) {
      categories && categories.length && categories.map(item => {
        if (key == item.key) {
          list.push(Object.assign({}, item, { active: true }));
        } else {
          list.push(Object.assign({}, item, { active: false }));
        }
      });
      setCategories(list);
      routes.push(`/productList/${key}`);
    }
  };
  useEffect(() => {
    getCategoriesFetch(key);
    setProductTypeId(key);
    setCurrentCategoriesHandler(key);
  }, []);
  const renderHtml = (props) => {
    const html = [];
    categories && categories.length && categories.map(item => {
      if (item && item.active) {
        html.push(<Nav.Link key={item.key} onClick={() => setCurrentCategoriesHandler(item.key)} active>{item.title}</Nav.Link>);
      } else {
        html.push(<Nav.Link key={item.key} onClick={() => setCurrentCategoriesHandler(item.key)}>{item.title}</Nav.Link>);
      }
    });
    return html;
  };
  return (
    <Nav className="flex-column categories-side">
      {renderHtml()}
    </Nav>
  );
}

export default CategoriesSide;
