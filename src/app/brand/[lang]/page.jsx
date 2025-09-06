import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container, Image } from 'react-bootstrap';
import initMenuServer from '@/constant/menuNavServer';
import Footer from "@/components/Footer";
import ICP from '@/components/Icp';
import normalizeLangCode from '@/utils/langUtils';
import LocalStorageClient from '@/components/LocalStorageClient';
import HeaderServer from "@/components/HeaderServer";

import './index.less';

async function Brand({ params }) {
  const { lang = 'ja-JP', key = '' } = await params;
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  const currentPage = 'brand';

  return (
    <>
      <LocalStorageClient lang={normLang}></LocalStorageClient>
      <HeaderServer lang={normLang} currentPage={currentPage} c_key={key}></HeaderServer>
      <Container fluid>
        <div className='brand-wrapper'>
          <h2>{i18n.t('common.nav.brand.story')}</h2>
          <div className='text'>
            <p>{i18n.t('brand.page.story.list01')}</p>
            <p>{i18n.t('brand.page.story.list02')}</p>
            <Image src="https://img.limeetpet.com/limeet/brand/brand.jpeg" alt='LIMEET BRAND' fluid></Image>
            <p></p>
            <p>{i18n.t('brand.page.story.list03')}</p>
            <p>{i18n.t('brand.page.story.list04')}</p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{i18n.t('common.nav.brand.idea')}</h2>
          <div className='text'>
            <p>{i18n.t('brand.page.idea')}</p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{i18n.t('common.nav.brand.keywords')}</h2>
          <div className='text'>
            <p>{i18n.t('brand.page.keywords.list01')}</p>
            <p>{i18n.t('brand.page.keywords.list02')}</p>
            <p>{i18n.t('brand.page.keywords.list03')}</p>
            <p>{i18n.t('brand.page.keywords.list04')}</p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{i18n.t('common.nav.brand.image')}</h2>
          <div className='text'>
            <p>{i18n.t('brand.page.image.list01')}</p>
            <h4>{i18n.t('brand.page.image.list02')}</h4>
            <p>{i18n.t('brand.page.image.list03')}</p>
            <Image src="https://img.limeetpet.com/limeet/brand/158813789963349rwvw%20.jpeg" alt='LIMEET BRAND2' fluid></Image>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{i18n.t('common.nav.brand.strength')}</h2>
          <div className='text'>
            <p>{i18n.t('brand.page.strength.list01')}</p>
            <p>{i18n.t('brand.page.strength.list02')}</p>
            <p>{i18n.t('brand.page.strength.list03')}</p>
            <p>{i18n.t('brand.page.strength.list04')}</p>
            <Image src="https://img.limeetpet.com/limeet/factory.png" alt='LIMEET BRAND3' fluid></Image>
            <p></p>
            <p></p>
          </div>
        </div>
      </Container>
      <Footer lang={normLang}></Footer>
      <ICP lang={normLang}></ICP>
    </>
  );
}

export default Brand;
