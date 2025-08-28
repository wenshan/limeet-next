import Footer from "@/components/Footer";
import ICP from '@/components/Icp';
import '@/styles/global.less';
import 'bootstrap/dist/css/bootstrap.min.css'; // 关键：导入 Bootstrap 样式

export default function RootLayout({ children }) {
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
        <link
          rel="preload"
          href="https://img.limeetpet.com/limeet/limeet_logo.png"
          as="image"
          type="image/png"
        />
        {/** 
        <link
          rel="preload"
          href="https://img.limeetpet.com/217/91774973/banner1_x2.jpg" // 图片URL
          as="image" // 声明资源类型为图片
          imagesrcset="https://picsum.photos/id/1015/600/300 600w, https://picsum.photos/id/1015/1200/600 1200w" // 响应式图片源
          imagesizes="(max-width: 768px) 600px, 1200px" // 响应式尺寸描述
          type="image/jpeg" // 图片MIME类型
        />
        */}
      </head>
      <body className="root">
        <>
          {/* 这里放置全局布局内容，如导航栏、页脚等 */}
          {/*  <Header></Header>*/}
          {children}
          <Footer></Footer>
          <ICP></ICP>
        </>
      </body>
    </html>
  );
}
