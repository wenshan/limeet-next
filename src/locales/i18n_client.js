import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resource from "./resource";
// 默认
i18n
  .use(initReactI18next)
  .init({
      debug: false,
      lng: 'ja-JP',
      resources: resource,
      fallbackLng: 'ja-JP',
      nonExplicitSupportedLngs: true,
      preload: true,
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      interpolation: {
        escapeValue: false,
      },
  });

export default i18n;

// https://codeewander.github.io/docs/react-i18next