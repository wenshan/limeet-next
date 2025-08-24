'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';

export default function IndexPage() {
  const router = useRouter();
  const backClick = () => {
    router.push('/');
  };
  return (
    <>
      <Header from="404"></Header>
      <Container fluid>
        <div>
          <div
            status="default"
            style={{ '--image-height': '150px', }}
            description={<span>No Page</span>}
          >
            <Button color="primary" onClick={backClick}>
              Callback Home
            </Button>
          </div>
        </div>
      </Container>
    </>

  );
}
