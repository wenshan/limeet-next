/* eslint-disable no-undef */
import { create } from 'zustand';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import languageI18next from '@/constant/languageI18next';
import { persist } from 'zustand/middleware';
import initMenu from '@/constant/menuNav';
import allCategoriesInit from '@/constant/allCategoriesInit';

import {
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup,
  getBanner,
} from '@/services/index';

// const lng = (new LanguageDetector()).detect() || 'en';

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

const paginationInit = {
  current: 1,
  pageSize: 20,
  total: 0
};

const whereParamsBanner = {
  channel: 'limeetpet',
  type: 'home'
};

// const lang = (languageI18next[lng] && languageI18next[lng].value) || 'en-US';
const RootStore = create(persist((set, get)=>({
  projectId: 1747727677,
  language: 'ja-JP',
  categories: [],
  product_type_id: 'all',
  swiperBanner: [],
  pagination: paginationInit,
  productList: [],
  productDetail: initProductDetail,
  saleSkusList: [],
  currentSaleSku: {},
  menu: initMenu['ja-JP'],
  swiperBanner: [],
  setUrLanguage: ()=>{

  },
  setLanguage: (lang)=>{
    set((state)=>({...state, language: lang}));
  },
  setCategories: (rows)=>{
    if (rows && rows[0]) {
      set((state)=>({...state, categories: rows}));
    }
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
      const allCategories = Object.assign({}, allCategoriesInit[language]);
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
  setProductDetail: async(productDetail)=>{
    if (productDetail && productDetail.saleSkusList && productDetail.saleSkusList[0]) {
      set((stats)=>({...stats, productDetail, saleSkusList: productDetail.saleSkusList, currentSaleSku: productDetail.saleSkusList[0]}));
    }
  },
  getProductDetailFetch: async(query)=> {
    const { projectId } = get();
    const { id, productId, language} = query;
    const result = await productDetail({ id, product_id: productId, projectId, language });
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
),{
  name: 'limeetpet',
}));
export default RootStore;
