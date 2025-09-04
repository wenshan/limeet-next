'use client';
import { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";

import './index.less';
export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(10); // 5秒后跳转
  const router = useRouter();
  const currentPage = '/'
  const key = '';
  const normLang = 'ja-JP';
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/'
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <Header lang={normLang} currentPage={currentPage} c_key={key}></Header>
      <Container fluid>
        <Row>
          <Col sm>
            <Card>
              <Card.Body>
                <Card.Title>404 - Page Not Found</Card.Title>
                <Card.Text>Will automatically jump to the homepage in {countdown} seconds...</Card.Text>
                <Button onClick={() => router.push('/')}>Go to homepage now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}