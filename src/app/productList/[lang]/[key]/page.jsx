import { Container, Row, Col } from 'react-bootstrap';
import CategoriesSideServer from '@/components/CategoriesSideServer';
import Footer from "@/components/Footer";
import ICP from '@/components/Icp';
import ListServer from '@/components/ListServer';
import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import normalizeLangCode from '@/utils/langUtils';
import LocalStorageClient from '@/components/LocalStorageClient';
import HeaderServer from "@/components/HeaderServer";

import './index.less';


async function ProductList({ params }) {
  const { lang, key } = await params;
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  const currentPage = 'productList';

  return (<>
    <LocalStorageClient lang={normLang}></LocalStorageClient>
    <HeaderServer lang={normLang} currentPage={currentPage} c_key={key}></HeaderServer>
    <Container fluid className='list-wrap'>
      <Row>
        <Col sm={4} md={3} lg={2}>
          <CategoriesSideServer lang={normLang} c_key={key}></CategoriesSideServer>
        </Col>
        <Col>
          <ListServer from="productList" lang={normLang} c_key={key}></ListServer>
        </Col>
      </Row>
    </Container>
    <Footer lang={normLang}></Footer>
    <ICP lang={normLang}></ICP>
  </>
  );
};

export default ProductList;
