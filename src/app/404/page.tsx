'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Button } from 'react-bootstrap';

export default function IndexPage() {
  const router = useRouter();
  const backClick = () => {
    router.push('/en-US');
  };
  return (
    <>
      <Container fluid>
        <div>
          <div>
            <span>No Page</span>
            <Button color="primary" onClick={backClick}>
              Callback Home
            </Button>
          </div>
        </div>
      </Container>
    </>

  );
}
