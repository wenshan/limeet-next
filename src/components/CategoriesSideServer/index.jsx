import { Nav } from 'react-bootstrap';
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

async function CategoriesSide({ lang, key }) {
  const currentKey = key || 'all';
  const categories = await getCategoriesFetchServer({ lang });
  const renderHtml = () => {
    const html = [];
    categories && categories.length && categories.map((item, idx) => {
      if (item && item.key === currentKey) {
        html.push(<Nav.Link key={`${item.key}_${idx}`} href={`/productList/${lang}/${item.key}`} active>{item.title}</Nav.Link>);
      } else {
        html.push(<Nav.Link key={`${item.key}_${idx}`} href={`/productList/${lang}/${item.key}`} >{item.title}</Nav.Link>);
      }
    });
    return html;
  };
  return (
    <>
      <LocalStorageClient categories={categories} key={currentKey}></LocalStorageClient>
      <Nav className="flex-column categories-side-server">
        {renderHtml()}
      </Nav>
    </>
  );
}

export default CategoriesSide;
