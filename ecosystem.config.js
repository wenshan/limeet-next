module.exports = {
  apps: [
    {
      name: "next-app", // 进程名称
      script: "npm", // 执行脚本（这里用 npm）
      args: "start", // 传递给脚本的参数（即执行 npm start）
      
      // 环境变量（生产环境）
      env: {
        NODE_ENV: "production",
        PORT: 3000, // 自定义端口（默认 3000）
        NEXT_PUBLIC_API_URL: "https://api.example.com" // 客户端环境变量
      },
      
      // 进程配置
      instances: 1, // 启动最大实例数（根据 CPU 核心数自动分配，适合负载均衡）
      autorestart: true, // 崩溃后自动重启
      watch: false, // 生产环境关闭文件监听（避免代码变动触发重启）
      max_memory_restart: "1G", // 内存占用超过 1G 时自动重启
      
      // 日志配置
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志时间格式
      merge_logs: true, // 合并多实例日志
      error_file: "./logs/err.log", // 错误日志路径
      out_file: "./logs/out.log" // 输出日志路径
    }
  ]
};
