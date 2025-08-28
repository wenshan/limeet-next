'use client';
import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.less';

function Title(props) {
  const { t, i18n } = useTranslation();
  return (
    <div className='title-wrap clearfix'>
      <div className='title'>
        <i className='left-icon' />
        <h3>
          {props.title}
        </h3>
        <i className='right-icon' />
      </div>
    </div>
  );
}

export default Title;
