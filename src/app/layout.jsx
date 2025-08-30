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
        {/** 
        <link
          rel="preload"
          href="https://img.limeetpet.com/217/91774973/banner1_x2.jpg" // 图片URL
          as="image" // 声明资源类型为图片
          imagesrcset="https://picsum.photos/id/1015/600/300 600w, https://picsum.photos/id/1015/1200/600 1200w" // 响应式图片源
          imagesizes="(max-width: 768px) 600px, 1200px" // 响应式尺寸描述
          type="image/jpeg" // 图片MIME类型
        />
        */}
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
