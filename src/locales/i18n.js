import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resource from "./resource";
import store from 'store2';
import languageI18next from '../constant/languageI18next';
console.log('LanguageDetector:', (new LanguageDetector()).detect());
// 默认
let lang = 'ja-JP';
let realLang = 'ja';

console.log('lng:', lang);
console.log('realLang:', realLang);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // 若當前語言沒有對應的翻譯則使用這個語言
    lng: 'en', //預設語言
    debug: true,
    resources: resource, //引入字典檔
    interpolation: {
      // 是否要讓字詞 escaped 來防止 xss 攻擊，因為 React.js 已經做了，這裡設成 false
      escapeValue: false,
    },
    supportedLngs: ['en', 'zh', 'ja'],
  });

export default i18n;

// https://codeewander.github.io/docs/react-i18next