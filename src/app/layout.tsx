'use client';
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ICP from '../components/Icp';
import '../locales/i18n';
// 引入全局样式，替代UMI的global.less
import '../styles/global.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();
import "../styles/global.less";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="Limeet, pet, cat jump, cats as pets" />
        <meta name="description" content="Limeet, We design many creative cat furniture items, allowing cats and people to coexist warmly." />
        <title>Limeet - Creating a Warm Home for Pets.</title>
        {/* 直接嵌入全局样式 */}
        <style>
          {`
              html, body {
                font-size: 16px !important;
                margin: 0;
                padding: 0;
              }
            `}
        </style>
      </head>
      <body className="root">
        <QueryClientProvider client={queryClient}>
          {/* 这里放置全局布局内容，如导航栏、页脚等 */}
          <Header></Header>
          {children}
          <Footer></Footer>
          <ICP></ICP>
        </QueryClientProvider>
      </body>
    </html>
  );
}
