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

  // 关键：Turbopack 实验性配置
  experimental: {
    turbo: {
      rules: {
        // 告诉 Turbopack 如何处理 .less 文件
        '*.less': {
          // 使用 less-loader 处理 Less
          loaders: [
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true, // 允许 Less 中使用 JS
                },
              },
            },
          ],
          // 将处理结果视为 CSS
          as: '*.css',
        },
        // 处理 CSS 结果（如需支持 CSS Modules 可添加此规则）
        '*.css': {
          loaders: [],
          as: '*.css',
        },
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
