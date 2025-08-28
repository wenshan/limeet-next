'use client';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RootStore from '@/stores/rootStore';
import './index.less';

function ICP() {
  const { language } = RootStore();
  return (
    <Container className='footer-icp'>
      {language === 'zh-CN' && (
        <p>© 2025, Limeet - OuhaoTrading <a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank' rel="noopener noreferrer">浙ICP备2023008986号</a></p>
      )}
    </Container>
  );
}

export default ICP
