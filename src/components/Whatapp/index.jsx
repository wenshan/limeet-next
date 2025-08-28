'use client';
import React, { Component } from 'react';
import { Row, Col, Container, Modal, Button, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './index.less';

function Whatapp(props) {
  const [wechatStatus, setWechatStatus] = useState(false);
  const handleClose = () => setWechatStatus(false);
  const handleShow = () => setWechatStatus(true);
  return (
    <>
      <span className='wechat' onClick={handleShow}><img src="https://img.limeetpet.com/limeet/icon/icons8-whatsapp-240.png" /></span>
      <Modal show={wechatStatus} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image thumbnail src="https://img.limeetpet.com/limeet/icon/whatApp.png"></Image>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Whatapp;
