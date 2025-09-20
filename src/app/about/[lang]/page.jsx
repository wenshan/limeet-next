import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import { Container, Image } from 'react-bootstrap';
import Whatapp from '@/components/Whatapp';
import Footer from "@/components/Footer";
import ICP from '@/components/Icp';
import normalizeLangCode from '@/utils/langUtils';
import LocalStorageClient from '@/components/LocalStorageClient';
import HeaderServer from "@/components/HeaderServer";


import './index.less';

async function About({ params }) {
  const { lang = 'ja-JP', key = '' } = await params;
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  const currentPage = 'about';

  return (
    <>
      <LocalStorageClient lang={normLang}></LocalStorageClient>
      <HeaderServer lang={normLang} currentPage={currentPage} c_key={key}></HeaderServer>
      <Container fluid className='clearfix'>
        <div className="about-page clearfix">
          <div className="des-tx clearfix">
            <h1>{i18n.t("common.about.name")}</h1>
            <p>{i18n.t("common.about.tip")}</p>
            <Image src="https://img.limeetpet.com/limeet/factory.png" alt={i18n.t("common.about.tip")} fluid></Image>
            <p></p>
            <p>
              <img src="https://img.limeetpet.com/limeet/jiaozhang.png" alt='LIMEET'></img>
              {i18n.t('common.about.des')}
            </p>
          </div>
          <div className='company clearfix'>
            <h2>Shanghai Erka International Trade Co., Ltd</h2>
            <ul>
              <li><span>{i18n.t("footer.product.factory.address")}</span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China</li>
              <li><span>Email:</span><a href="mailto:hou_ve@qq.com">hou_ve@qq.com</a></li>
            </ul>
          </div>
          <div className='contact clearfix'>
            <span className='youtube'><a target='_blank' href="https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA"><img src="https://img.limeetpet.com/limeet/icon/icons8-youtube-240.png" /></a></span>
            <span className='facebook'><a target='_blank' href="https://www.facebook.com/limeet.366183"><img src="https://img.limeetpet.com/limeet/icon/icons8-facebook-240.png" /></a></span>
            <Whatapp></Whatapp>
          </div>
        </div>
      </Container>
      <Footer lang={normLang}></Footer>
      <ICP lang={normLang}></ICP>
    </>
  );
}

export default About;
