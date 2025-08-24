'use client';
import { useEffect, useState } from 'react';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useParams } from 'next/navigation';
import RootStore from '@/stores/rootStore';
import ProductGroup from '@/components/ProductGroup';
import DetailSwiper from '@/components/DetailSwiper';
import ProductDetail from '@/components/ProductDetail';
import ProductAttr from '@/components/ProductAttr';
import ProductHighlight from '@/components/ProductHighlight';
import ProductDescribe from '@/components/ProductDescribe';
import ProductSaleSku from '@/components/ProductSaleSku';

import './index.less';

function DetailPage() {
  const { productDetail, getProductDetailFetch } = RootStore();
  const { id, productId, lng } = useParams();
  console.log(id);
  console.log(productId);
  console.log(lng);
  console.log(productDetail);

  if (!(productId && lng && id)) {
    return false;
  }
  const { image_link, additional_image_link } = productDetail;

  useEffect(() => {
    getProductDetailFetch({ id, productId, lng });
    console.log(123124);
  }, [id, productId, lng]);

  return (
    <>
      <DetailSwiper from="detail" image_link={image_link} additional_image_link={additional_image_link}></DetailSwiper>
      {false && (<ProductGroup></ProductGroup>)}
      <ProductAttr></ProductAttr>
      <ProductDescribe />
      <ProductHighlight />
      <ProductDetail></ProductDetail>
    </>
  );
}

export default DetailPage;
