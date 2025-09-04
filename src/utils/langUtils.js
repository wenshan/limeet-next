import { notFound } from 'next/navigation';
import languageI18next from '@/constant/languageI18next'
function normalizeLangCode(lang) {
  if (lang) {
    // 分割语言代码和国家代码（按连字符分割）
    const [language, region] = lang.split('-');
    
    // 语言部分小写，国家/地区部分大写，再拼接
    if (language && region && lang.indexOf('-') > 0 && languageI18next[language]) {
      return `${language.toLowerCase()}-${region.toUpperCase()}`;
    } else {
      notFound();
    }
    
    // 只有语言代码时直接返回小写
    return language.toLowerCase();
  } else {
    notFound();
  }

}

export default normalizeLangCode