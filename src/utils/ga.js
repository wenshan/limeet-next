// 仅在客户端环境执行
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const isProduction = process.env.NODE_ENV === 'production';
// const isProduction = process.env.NODE_ENV === 'development';

// 初始化 GA 脚本
export const initializeGa = () => {
  if (!isProduction || !GA_ID) return;

  // 注入 gtag 脚本
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer',GA_ID);

  // 配置 GA
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){dataLayer.push(arguments);};
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    page_path: window.location.pathname, // 初始页面路径
  });
};

// 发送页面浏览事件（用于路由切换时）
export const trackPageView = (url) => {
  if (!isProduction || !GA_ID || !window.gtag) return;
  
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// 发送自定义事件
export const trackEvent = (eventName, eventParams = {}) => {
  if (!isProduction || !GA_ID || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};
