import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container, Row, Col } from 'react-bootstrap';
import BannerSwiperServer from '@/components/BannerSwiperServer';
import CategoriesServer from '@/components/CategoriesServer';
import Footer from "@/components/Footer";
import ICP from '@/components/Icp';
import ListServer from '@/components/ListServer';
import Title from '@/components/Title';
import Link from 'next/link';
import normalizeLangCode from '@/utils/langUtils';
import LocalStorageClient from '@/components/LocalStorageClient';
import { getBannerServer } from '@/services/index';
import HeaderServer from "@/components/HeaderServer";
import { notFound } from 'next/navigation';
import ClientRunTimeDom from '@/components/ClientRunTimeDom';

import './index.less';

const getBannerFetchServer = async ({ lang }) => {
  const projectId = 1747727677;
  const language = lang || 'ja-JP';
  const whereParamsBanner = {
    channel: 'limeetpet',
    type: 'home'
  };
  try {
    const result = await getBannerServer({ projectId, ...whereParamsBanner, language });
    if (result && result.status == 200 && result.data && result.data && result.data.rows) {
      return result.data.rows;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
    notFound();
  }
};

// eslint-disable-next-line @next/next/no-async-client-component
async function HomePage({ params }) {
  const { lang = 'ja-JP', key = '' } = await params;
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  const currentPage = '/'
  const swiperBanner = await getBannerFetchServer({ lang });

  return (
    <>
      <LocalStorageClient lang={normLang} swiperBanner={swiperBanner}></LocalStorageClient>
      <HeaderServer lang={normLang} currentPage={currentPage} c_key={key}></HeaderServer>
      <BannerSwiperServer lang={normLang} ></BannerSwiperServer>
      <CategoriesServer lang={normLang} c_key='all'></CategoriesServer>
      <Container fluid className='list-wrap'>
        <Title title={i18n.t('common.title.sales')} />
        <ListServer from="home" lang={normLang} c_key='all'></ListServer>
        <Row>
          <Col>
            <div className='more-wrap clearfix'>
              <Link href={`/productList/${normLang}/all`}> See more… </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer lang={normLang}></Footer>
      <ICP lang={normLang}></ICP>
      <ClientRunTimeDom></ClientRunTimeDom>
    </>
  );
}

export default HomePage;
