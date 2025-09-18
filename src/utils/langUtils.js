import { notFound } from 'next/navigation';
import languageI18next from '@/constant/languageI18next'
function normalizeLangCode(lang) {
  let newLang = 'ja-JP';
  if (lang) {
    // 小写转大写 + 中划线
    if (lang.indexOf('-')) {
      // 分割语言代码和国家代码（按连字符分割）
      const [language, region] = lang.split('-');
      // 语言部分小写，国家/地区部分大写，再拼接
      if (language && region && languageI18next[language]) {
        newLang = `${language.toLowerCase()}-${region.toUpperCase()}`;
      }
    } else if(lang.indexOf('_')) {
      // 分割语言代码和国家代码（按连字符分割）
      const [language, region] = lang.split('_');
      // 语言部分小写，国家/地区部分大写，再拼接
      if (language && region && languageI18next[language]) {
        newLang = `${language.toLowerCase()}-${region.toUpperCase()}`;
      }
    } else {
      if (languageI18next[lang]) {
        newLang = languageI18next[lang].value;
      }
    }
    return newLang;
  } else {
    notFound();
  }

}

export default normalizeLangCode