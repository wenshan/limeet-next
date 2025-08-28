module.exports = {
  plugins: {
    autoprefixer: {}, // 自动添加浏览器前缀
    'postcss-pxtorem': {
      rootValue: 32, // 根元素字体大小（通常为 16px，即 1rem = 16px）
      propList: ['*'], // 需要转换的属性，* 表示所有
      unitPrecision: 5, // 转换后的 rem 保留几位小数
      selectorBlackList: [], // 不需要转换的选择器（如类名）
      replace: true, // 是否替换原有的 px
      mediaQuery: false, // 是否处理媒体查询中的 px
      minPixelValue: 0, // 最小转换的 px 值（小于此值不转换）
      // exclude: /node_modules/i // 排除 node_modules 中的文件
    }
  }
};
