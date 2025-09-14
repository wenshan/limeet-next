import { fetchData } from '@/utils/fetch';
// http://wiki.tools.msparis.com/pages/viewpage.action?pageId=1015930
export const getBanner = (params) =>
  fetchData('api/web/banner/query', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: false, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败',
      localStorage: {
        keys: ['i18nextLng'], // 读取这两个字段
        merge: {
          enabled: true,
          strategy: 'preserve' // 请求数据优先
        }
      }
    }
  });

// http://wiki.tools.msparis.com/pages/viewpage.action?pageId=2130801
export const queryProductList = (params = {}) =>
  fetchData('api/web/product/queryProductList', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: false, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });

// wiki: http://wiki.tools.msparis.com/pages/viewpage.action?pageId=1016417
export const queryProductCategories = (params) =>
  fetchData('api/web/product/queryProductCategories', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: false, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });

export const productDetail = (params) =>
  fetchData('api/web/product/productDetail', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: false, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });
// 相关组
export const queryProductGroup = (params) =>
  fetchData('api/web/product/queryProductGroup', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: false, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });


/**** ================== server api  start ============ */
// 相关组
export const queryProductGroupServer = (params) =>
  fetchData('api/web/product/queryProductGroup', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: true, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });
export const productDetailServer = (params) =>
  fetchData('api/web/product/productDetail', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: true, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });
export const queryProductCategoriesServer = (params) =>
  fetchData('api/web/product/queryProductCategories', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: true, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });
// http://wiki.tools.msparis.com/pages/viewpage.action?pageId=2130801
export const queryProductListServer = (params = {}) =>
  fetchData('api/web/product/queryProductList', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: true, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });

export const getBannerServer = (params) =>
  fetchData('api/web/banner/query', {
    method: 'POST',
    body: JSON.stringify(params),
    config: {
      server: true, // 服务器端请求（安全提交）
      cache: 'no-store', // 提交数据不缓存
      errorMessage: '获取数据失败'
    }
  });
  /**** ================== server api  end ============ */