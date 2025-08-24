/* eslint-disable no-undef */
import { create } from 'zustand';
import store from 'store2';
import { useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languageI18next from '../constant/languageI18next';
import { useRouter } from 'next/navigation';
import { persist } from 'zustand/middleware';
import initMenu from '../constant/menuNav';

import {
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup,
  getBanner,
} from '@/services/index';

const lng = (new LanguageDetector()).detect() || 'en';

const initProductDetail = {
  image_link: '', 
  additional_image_link: '',
  product_highlight: '',
  item_group_id: '',
  description: '',
  lifestyle_image_link: '',
  monetary_unit: '',
  saleSkusList: [],
};

const allCategoriesInit = {
  key: 'all',
  title: 'All Product'
};

const allTitle = {
  'en-US': 'All Product',
  'ja-JP': 'すべて',
  'zh-CN': '所有商品',
  'zh-TW': '所有商品'
};

const paginationInit = {
  current: 1,
  pageSize: 20,
  total: 0
};

const whereParamsBanner = {
  channel: 'limeetpet',
  type: 'home'
};

const lang = (languageI18next[lng] && languageI18next[lng].value) || 'en-US';
const RootStore = create(persist((set, get)=>({
  projectId: 1747727677,
  language: lang,
  categories: [],
  product_type_id: 'all',
  swiperBanner: [],
  pagination: paginationInit,
  productList: [],
  productDetail: initProductDetail,
  saleSkusList: [],
  currentSaleSku: {},
  menu: initMenu[lang],
  swiperBanner: [],
  setUrLanguage: ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { i18n } = useTranslation();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const query = router.query
    const lang = query.lang || store.get('lang') || 'ja-JP';
    if (lang) {
      set((state)=>({...state, language: lang}));
      i18n.changeLanguage(lang);
      store.set('lang', lang);
    }
  },
  setLanguage: (lang)=>{
    set((state)=>({...state, language: lang}));
  },
  setCategories: (rows)=>{
    if (rows && rows[0]) {
      set((state)=>({...state, categories: rows}));
    }
    // product_type_id:  rows[0].key
  },
  setProductTypeId: (id)=>{
    if (id) {
      set((state)=>({...state, product_type_id: id}));
    }
  },
  getCategoriesFetch: async(key)=> {
    const { projectId, language, setCategories, setProductTypeId} = get();
    const result = await queryProductCategories({ projectId, language });
    if (result && result.status && result.status === 200 && result.data.rows) {
      const allCategories = Object.assign({}, allCategoriesInit, { title: allTitle[language] });
      const rows = [];
      rows.push(allCategories);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      result.data.rows.length && result.data.rows.forEach((item) => {
        if (item.key == key) {
          rows.push(Object.assign({}, item, { active: true }));
        } else {
          rows.push(Object.assign({}, item, { active: false }));
        }
      });
      setCategories(rows);
      setProductTypeId(key);
    } else {
      set((state)=>({...state, categories: [], product_type_id:  null}));
    }
  },
  setProductListPagination: (pagination)=> {
    set((state)=>({...state, pagination}));
  },
  setProductList: (data)=>{
    set((state)=>({...state, productList: data}));
  },
  getProductListFetch: async()=> {
    const { projectId, pagination, language, setProductList, setProductListPagination, product_type_id} = get();
    const result = await queryProductList({ projectId, ...pagination, product_type_id, language });
    if (result && result.status === 200 && result.data) {
      setProductList(result.data);
      setProductListPagination(Object.assign({}, pagination, { total: result.data.count }));
    }
  },
  getProductDetailFetch: async(query)=> {
    const { projectId } = get();
    const { id, productId, lng} = query;
    const result = await productDetail({ id, product_id: productId, projectId, language:lng });
    if (result && result.status === 200 && result.data) {
      set((stats)=>({...stats, productDetail: result.data, saleSkusList: result.data.saleSkusList, currentSaleSku: result.data.saleSkusList[0]}));
    }
  },
  setSaleSkusList: (list)=>{
    set((state)=>({...state, saleSkusList: list}));
  },
  setCurrentSaleSku: (item)=>{
    set((state)=>({...state, currentSaleSku: item}));
  },
  setMenu: (data)=>{
    set((state) =>({...state, menu: data}));
  },
  setSwiperBanner: (data)=>{
    set((state) =>({...state, swiperBanner: data}));
  },
  getBannerFetch: async () => {
    const { projectId, language} = get();
    try {
      const result = await getBanner({ projectId, ...whereParamsBanner, language });
      if (result && result.status == 200 && result.data && result.data && result.data.rows) {
        set((state) =>({...state, swiperBanner: result.data.rows}));
      } else {
        set((state) =>({...state, swiperBanner: []}));
      }
    } catch (err) {
      console.log(err);
    }
  }
}
)));
export default RootStore;
