'use client';
import '@/locales/i18n_client';
import languageObj from '@/constant/language';
import { Dropdown } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import store from 'store2';

import './index.less';

function ChangeLanguage() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { language, setLanguage, getCategoriesFetch, getProductListFetch, getBannerFetch } = RootStore();
  const popupColumns = () => {
    const html = [];
    const data = Object.values(languageObj);
    data.map((item) => {
      html.push(
        <Dropdown.Item key={item.value} onClick={() => popupSelectValue(item.value, item.path)} eventKey={item.path} href={item.path} >
          {item.label}
        </Dropdown.Item>
      );
    });
    return <ul className='lan-list'>{html}</ul>;
  };
  const languageCurrent = (language) => {
    if (language) {
      return languageObj[language] && languageObj[language].label || 'ja-JP';
    }
  };
  const popupSelectValue = (value, path) => {
    i18n.changeLanguage(value);
    store.set('lang', value);
    store.set('i18nextLng', value);
    setLanguage(value);
    getCategoriesFetch();
    getProductListFetch();
    getBannerFetch();
    router.push(path);
    // window.location.reload();
  };

  return (
    <div className='locale'>
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          {languageCurrent(language)}
        </Dropdown.Toggle>
        <Dropdown.Menu>{popupColumns()}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ChangeLanguage;