const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');


async function generateSitemap() {
  // 获取数据 类目 和 商品 、 语言
  const lastmod = new Date().toISOString();
  const langArr = ['en_US', 'ja_JP', 'zh_CN'];
  const projectId = 1747727677;
  const url = 'https://api.limeetpet.com/api/web/product/sitemap';
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ projectId }),
    headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': 'https://api.limeetpet.com/',
    'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
    'Access-Control-Max-Age': 1728000
    },
  });
  if (!response.ok) {
    return;
  }
  const result = await response.json();
  // 1. 定义所有页面 URL（可从数据库/文件读取）
  const links = [ 
    { url: '/', changefreq: 'monthly', priority: 1.0, lastmod, },
    { url: '/home/ja-JP', changefreq: 'monthly', priority: 1.0, lastmod,
      links: [
        { url: '/home/zh-CN', hreflang:'zh-CN', rel:'alternate', },
        { url: '/home/en-US', hreflang:'en-US', rel:'alternate', },
        { url: '/home/ja-JP', hreflang:'ja-JP', rel:'alternate', },
        { url: '/home/ja-JP', hreflang:'x-default', rel:'alternate', },
      ]
    },

    { url: '/brand/ja-JP', changefreq: 'monthly', priority: 1.0, lastmod,
      links: [
        { url: '/brand/zh-CN', hreflang:'zh-CN', rel:'alternate',},
        { url: '/brand/en-US', hreflang:'en-US', rel:'alternate', },
        { url: '/brand/ja-JP', hreflang:'ja-JP', rel:'alternate', },
        { url: '/brand/ja-JP', hreflang:'x-default', rel:'alternate', },
      ],
     },

    { url: '/about/ja-JP', changefreq: 'monthly', priority: 1.0, lastmod, links: [
          { url: '/about/zh-CN', hreflang:'zh-CN', rel:'alternate', },
          { url: '/about/en-US', hreflang:'en-US', rel:'alternate', },
          { url: '/about/ja-JP', hreflang:'ja-JP', rel:'alternate', },
          { url: '/about/ja-JP', hreflang:'x-default', rel:'alternate', },
    ] },
    { url: '/productList/ja-JP/all', changefreq: 'weekly', priority: 0.6, lastmod, links: [
        { url: '/productList/zh-CN/all', hreflang:'zh-CN',  rel:'alternate',},
        { url: '/productList/en-US/all', hreflang:'en-US',  rel:'alternate',},
        { url: '/productList/ja-JP/all', hreflang:'ja-JP',  rel:'alternate',},
        { url: '/productList/ja-JP/all', hreflang:'x-default',  rel:'alternate',},
    ] },
  ];
  const { dataProductAll, dataCategoriesAll} = result.data;
  console.log('dataProductAll:', dataProductAll );
  console.log('dataCategoriesAll:', dataCategoriesAll );
  if (dataCategoriesAll && dataCategoriesAll[0]) {
    for (l = 0; l < dataCategoriesAll.length; l ++) {
      if (dataCategoriesAll[l]) {
      const lang = dataCategoriesAll[l].ja_JP && 'ja_JP' || dataCategoriesAll[l].en_US && 'en_US' || dataCategoriesAll[l].zh_CN && 'zh_CN';
      const data = {url: `/productList/${lang}/${dataCategoriesAll[l].key}`, changefreq: 'weekly', priority: 0.6, lastmod, links: []};
        for (let item in dataCategoriesAll[l]) {
          if (item && dataCategoriesAll[l][item] && langArr.includes(item) && dataCategoriesAll[l].key) {
            const lang = item.replace(/_/, '-');
            const key = dataCategoriesAll[l].key;
            data.links.push(
              Object.assign({}, { url: `/productList/${lang}/${key}`, hreflang:lang, rel:'alternate' })
            );
          }
        }
        links.push(data);
      }
    }
  }

  if (dataProductAll) {
    for (let key in dataProductAll) {
      if (key && dataProductAll[key]) {
      const lang = dataProductAll[key][0].language;
      const data = {url: `/detail/${lang}/${dataProductAll[key][0].id}/${dataProductAll[key][0].product_id}`, changefreq: 'weekly', priority: 0.7, lastmod, links: []};
        for (let k = 0; k < dataProductAll[key].length; k ++) {
          if (dataProductAll[key][k].language && dataProductAll[key][k].id && dataProductAll[key][k].product_id) {
            data.links.push(
              Object.assign({}, { url: `/detail/${dataProductAll[key][k].language}/${dataProductAll[key][k].id}/${dataProductAll[key][k].product_id}`, hreflang: dataProductAll[key][k].language, rel:'alternate' })
            );
          }
        }
        links.push(data);
      }
    }
  }

  console.log('links:', links);

  // 2. 创建 sitemap 流
  const stream = new SitemapStream({
    hostname: 'https://limeetpet.com'
  });

  // 3. 写入链接并生成 XML
  links.forEach(link => stream.write(link));
  stream.end();

  // 4. 保存到 public 目录
  const sitemap = await streamToPromise(stream);
  fs.writeFileSync(
    path.join(__dirname, '../public/sitemap.xml'),
    sitemap.toString()
  );
}

generateSitemap().catch(console.error);