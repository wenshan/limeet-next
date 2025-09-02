import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import Footer from "@/components/Footer";
import ICP from '@/components/Icp';
import normalizeLangCode from '@/utils/langUtils';
import '@/styles/global.less';
import 'bootstrap/dist/css/bootstrap.min.css'; // 关键：导入 Bootstrap 样式

async function RootLayout({ children, params }) {
  const { lang = 'ja-JP', key } = await params;
  const normLang = normalizeLangCode(lang);
  await initI18nServer();
  await i18n.changeLanguage(normLang);
  return (
    <html lang={normLang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta name="keywords" content={i18n.t('site.keywords')} />
        <meta name="description" content={i18n.t('site.description')} />
        <title>{i18n.t('site.title')}</title>
        {/* 直接嵌入全局样式 */}
        <style>
          {`
              html, body {
                font-size: 16px !important;
                margin: 0;
                padding: 0;
              }
            `}
        </style>
        <link
          rel="preload"
          href="https://img.limeetpet.com/limeet/limeet_logo.png"
          as="image"
          type="image/png"
        />
        <link rel="alternate" hrefLang="ja-JP" href="https://www.limeetpet.com/" />
        <link rel="alternate" hrefLang="ja-JP" href="https://www.limeetpet.com/ja-JP" />
        <link rel="alternate" hrefLang="en-US" href="https://www.limeetpet.com/en-US" />
        <link rel="alternate" hrefLang="zh-CN" href="https://www.limeetpet.com/zh-CN" />
      </head>
      <body className="root">
        <>
          {/* 这里放置全局布局内容，如导航栏、页脚等 */}
          {/*  <Header></Header>*/}
          {children}
          <Footer></Footer>
          <ICP></ICP>
        </>
      </body>
    </html>
  );
}
export default RootLayout;
