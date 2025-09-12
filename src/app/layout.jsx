import { initI18nServer, default as i18n } from '@/locales/i18n_server';
import normalizeLangCode from '@/utils/langUtils';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.less';
import "@/styles/theme.less";
import "@/styles/mixin.less";
import "@/components/HeaderServer/index.less";

async function RootLayout({ children, params }) {
  const props = await params;
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
        <script src="https://img.limeetpet.com/zepto.min.js" defer></script>
      </head>
      <body className="root">
        {children}
        <script src="/Carousel.js" defer></script>
      </body>

    </html>
  );
}
export default RootLayout;
