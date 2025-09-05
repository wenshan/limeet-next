/** @type {import('next').NextConfig} */
const nextConfig = {
  // 基础配置
  basePath: '',
  assetPrefix: '',
  typescript: {
    ignoreBuildErrors: false,
  },
  trailingSlash: false,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: ['img.limeetpet.com'], // 添加这个域名
    // 优先使用 AVIF（比 WebP 更小），其次 WebP
    // formats: ['image/avif', 'image/webp'],
    // 全局默认质量（1-100，默认 75，根据需求调整）
    // quality: 80,
    unoptimized: true, // 关键配置：关闭图片优化
  },
  reactStrictMode: true,
  // 允许开发环境的跨域来源（根据警告中的域名调整）
  allowedDevOrigins: ['http://127.0.0.1:3000'],
  // 关键：Turbopack 实验性配置
  turbopack: {
    rules: {
      // 先处理 CSS 基础规则
      '*.css': {
        loaders: [],
        as: '*.css',
      },
      // 再处理 Less 规则（确保顺序正确）
      '*.less': {
        loaders: [
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        as: '*.css', // 明确输出为 CSS 类型
      },
    },
  },

  // 同时保留 Webpack 配置（用于生产环境构建）
  webpack(config: { module: { rules: { test: RegExp; use: (string | { loader: string; options: { lessOptions: { javascriptEnabled: boolean; }; }; })[]; }[]; }; }) {
    config.module.rules.push({
      test: /\.less$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
