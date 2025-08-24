'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';

export default function IndexPage() {
  const router = useRouter();
  const backClick = () => {
    router.push('/');
  };
  return (
    <>
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
