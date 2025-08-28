function normalizeLangCode(lang) {
  // 分割语言代码和国家代码（按连字符分割）
  const [language, region] = lang.split('-');
  
  // 语言部分小写，国家/地区部分大写，再拼接
  if (region) {
    return `${language.toLowerCase()}-${region.toUpperCase()}`;
  }
  
  // 只有语言代码时直接返回小写
  return language.toLowerCase();
}

export default normalizeLangCode