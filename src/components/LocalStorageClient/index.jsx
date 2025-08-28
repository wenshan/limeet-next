'use client';
import { useEffect, useState } from 'react';
import store from 'store2';
import RootStore from '@/stores/rootStore';

// set((stats) => ({ ...stats, productDetail: result.data, saleSkusList: result.data.saleSkusList, currentSaleSku: result.data.saleSkusList[0] }));

function LocalStorageClient({ lang, swiperBanner, productDetail }) {
  const { setLanguage, setSwiperBanner, setProductDetail } = RootStore();
  useEffect(() => {
    if (swiperBanner) {
      setSwiperBanner(swiperBanner);
    }
    if (lang) {
      setLanguage(lang);
      store.set('lang', lang);
      store.set('i18nextLng', lang);
    }
    if (productDetail && productDetail.saleSkusList && productDetail.saleSkusList[0]) {
      setProductDetail(productDetail);
    }
  }, [lang]);
  return null;
}

export default LocalStorageClient;