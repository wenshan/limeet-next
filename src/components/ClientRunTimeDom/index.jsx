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
    };
    const timerId = setTimeout(delayFunction, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [])
  return null;
};

export default ClientRunTimeDom;