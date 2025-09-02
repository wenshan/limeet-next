import i18n from 'i18next';
import resource from "./resource";

// 服务器端初始化函数（确保只初始化一次）
export async function initI18nServer() {
  if (!i18n.isInitialized) {
    await i18n
      .init({
        debug: false,
        lng: 'ja-JP',
        resources: resource,
        fallbackLng: 'ja-JP',
        nonExplicitSupportedLngs: true,
        preload: true,
        interpolation: { escapeValue: false },
      });
  }
  return i18n;
}

export default i18n;

