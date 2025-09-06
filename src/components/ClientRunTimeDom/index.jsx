'use client';
import { useEffect } from 'react';

// carousels-detail
function ClientRunTimeDom({ saleSkusList }) {
  useEffect(() => {
    if ($) {
      $('#carousels-banner').Carousels({
        autoPlay: true,
        interval: 6000,
        disableEdgeButtons: false  // 设置为true可在首尾页禁用按钮
      });
      if (saleSkusList) {
        $('#carousels-detail').Carousels({
          autoPlay: true,
          interval: 6000,
          disableEdgeButtons: false,  // 设置为true可在首尾页禁用按钮
          pageFrom: 'detail',
          skuItem: saleSkusList,
        });
      }
    }
  }, [])
  return null;
};

export default ClientRunTimeDom;