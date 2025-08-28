import ProductGroup from '@/components/ProductGroup';
import DetailSwiper from '@/components/DetailSwiper';
import ProductDetail from '@/components/ProductDetail';
import ProductAttr from '@/components/ProductAttr';
import ProductHighlight from '@/components/ProductHighlight';
import ProductDescribe from '@/components/ProductDescribe';
import LocalStorageClient from '@/components/LocalStorageClient';
import normalizeLangCode from '@/utils/langUtils';
import { productDetailServer } from '@/services/index';

import './index.less';

const getProductDetailFetchServer = async ({ id, productId, lang }) => {
  const projectId = 1747727677;
  const language = lang;
  try {
    if (id && productId && lang) {
      const result = await productDetailServer({ id, product_id: productId, projectId, language });
      if (result && result.status === 200 && result.data) {
        return result.data;
      } else {
        return null;
      }
    } else {
      alert('页面参数错误');
    }
  } catch (err) {
    console.log(err);
  }

};

async function DetailPage({ params }) {
  const { id, productId, lang } = await params;
  if (!(productId && lang && id)) {
    return false;
  }
  const productDetail = await getProductDetailFetchServer({ id, productId, lang });
  if (!productDetail || (productDetail && !productDetail.saleSkusList)) {
    return false;
  }
  const normLang = normalizeLangCode(lang);
  return (
    <>
      <LocalStorageClient lang={normLang} productDetail={productDetail}></LocalStorageClient>
      <DetailSwiper from="detail"></DetailSwiper>
      {false && (<ProductGroup></ProductGroup>)}
      <ProductAttr productDetail={productDetail}></ProductAttr>
      <ProductDescribe productDetail={productDetail} />
      <ProductHighlight productDetail={productDetail} />
      <ProductDetail productDetail={productDetail}></ProductDetail>
    </>
  );
}

export default DetailPage;
