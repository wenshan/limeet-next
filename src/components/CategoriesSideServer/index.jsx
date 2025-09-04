import { Nav, Row, Col } from 'react-bootstrap';
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

async function CategoriesSideServer({ lang, c_key }) {
  const currentKey = c_key || 'all';
  const categories = await getCategoriesFetchServer({ lang });
  const renderHtml = () => {
    const html = [];
    categories && categories.length && categories.map((item, idx) => {
      if (item.key == currentKey) {
        html.push(
          <li sm={6} key={`${item.key}_${idx}`}>
            <div className='item active'>
              <Link href={`/productList/${lang}/${item.key}`} >
                <span className='text'>{item.title}</span> <i className='icon arrow-tx-right' />
              </Link>
            </div>
          </li>
        );
      } else {
        html.push(
          <li sm={6} key={`${item.key}_${idx}`}>
            <div className='item'>
              <Link href={`/productList/${lang}/${item.key}`} >
                <span className='text'>{item.title}</span> <i className='icon arrow-tx-right' />
              </Link>
            </div>
          </li>
        );
      }
    });
    return html;
  };
  return (
    <>
      <LocalStorageClient categories={categories} c_key={currentKey}></LocalStorageClient>
      <div className="flex-column categories-side-server">
        <ul className='menu'>
          {renderHtml()}
        </ul>
      </div>
    </>
  );
}

export default CategoriesSideServer;
