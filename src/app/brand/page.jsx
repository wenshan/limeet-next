'use client';
import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './index.less';

function Brand() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Container fluid>
        <div className='brand-wrapper'>
          <h2>{t('common.nav.brand.story')}</h2>
          <div className='text'>
            <p>{t('brand.page.story.list01')}</p>
            <p>{t('brand.page.story.list02')}</p>
            <Image src="https://img.limeetpet.com/limeet/brand/brand.jpeg" fluid></Image>
            <p></p>
            <p>{t('brand.page.story.list03')}</p>
            <p>{t('brand.page.story.list04')}</p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{t('common.nav.brand.idea')}</h2>
          <div className='text'>
            <p>{t('brand.page.idea')}</p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{t('common.nav.brand.keywords')}</h2>
          <div className='text'>
            <p>{t('brand.page.keywords.list01')}</p>
            <p>{t('brand.page.keywords.list02')}</p>
            <p>{t('brand.page.keywords.list03')}</p>
            <p>{t('brand.page.keywords.list04')}</p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{t('common.nav.brand.image')}</h2>
          <div className='text'>
            <p>{t('brand.page.image.list01')}</p>
            <h4>{t('brand.page.image.list02')}</h4>
            <p>{t('brand.page.image.list03')}</p>
            <Image src="https://img.limeetpet.com/limeet/brand/158813789963349rwvw%20.jpeg" fluid></Image>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2>{t('common.nav.brand.strength')}</h2>
          <div className='text'>
            <p>{t('brand.page.strength.list01')}</p>
            <p>{t('brand.page.strength.list02')}</p>
            <p>{t('brand.page.strength.list03')}</p>
            <p>{t('brand.page.strength.list04')}</p>
            <Image src="https://img.limeetpet.com/limeet/factory.png" fluid></Image>
            <p></p>
            <p></p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Brand;
