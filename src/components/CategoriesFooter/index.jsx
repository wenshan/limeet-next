
import { queryProductCategoriesServer } from '@/services/index';
import allCategoriesInit from '@/constant/allCategoriesInit';

import './index.less';

const getCategoriesFetchServer = async ({ lang }) => {
  const language = lang || 'ja-JP';
  try {
    const result = await queryProductCategoriesServer({ language });
    if (result && result.status && result.status === 200 && result.data.rows && result.data.rows[0]) {
      const allCategories = Object.assign({}, allCategoriesInit[language]);
      result.data.rows.push(allCategories);
      return result.data.rows;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
}

async function CategoriesFooter(props) {
  const { lang } = props;
  const categories = await getCategoriesFetchServer({ lang });
  const renderHtml = () => {
    const html = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item && item.key) {
          html.push(
            <li key={item.key}><a href={`/productList/${lang}/${item.key}`}>{item.title}</a></li>
          );
        }

      });
    return html;
  };
  return (
    <ul className='flex-column'>{renderHtml()}</ul>
  );
}

export default CategoriesFooter;
