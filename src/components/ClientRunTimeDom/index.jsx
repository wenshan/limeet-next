'use client';
import { useEffect } from 'react';

// carousels-detail
function ClientRunTimeDom({ saleSkusList }) {
  useEffect(() => {
    const delayFunction = () => {
      $('#carousels-banner').Carousels({
        autoPlay: true,
        interval: 5000,
        disableEdgeButtons: false  // 设置为true可在首尾页禁用按钮
      });
      if (saleSkusList) {
        $('#carousels-detail').Carousels({
          autoPlay: true,
          interval: 5000,
          disableEdgeButtons: false,
          pageFrom: 'detail',
          skuItem: saleSkusList,
        });
      }

      $('#buy-target').on('click', function () {
        const $this = $(this);
        const detail = $this.data('detail');
        // console.log('GA detail:', detail);
        if (window.gtag && gtag && detail && detail.projectId) {
          window.gtag('event', 'detail_buy_click', {
            'language': detail.language,
            'title': detail.title,
            'offer_id': detail.offer_id,
            'product_id': detail.product_id,
            'product_main_id': detail.product_main_id,
            'projectId': detail.projectId,
            'saleType': detail.saleType,
            'saleValue': detail.saleValue,
            'sale_price': detail.sale_price,
            'monetary_unit': detail.monetary_unit,
            'discount': detail.discount,
            'price': detail.price,
          });
        }
      });
    };
    const timerId = setTimeout(delayFunction, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // ga 事件点击
  }, [])
  return null;
};

export default ClientRunTimeDom;