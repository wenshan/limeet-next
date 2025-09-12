module.exports = {
  apps: [{
    name: 'limeet-next', // 应用名称
    script: 'node_modules/next/dist/bin/next', // Next.js 启动脚本
    args: 'start', // 启动命令（生产环境用 start）
    instances: 'max', // 启动实例数：'max' 表示根据 CPU 核心数自动分配
    exec_mode: 'fork', // 单实例模式
    env: {
      PORT: 3000, // 端口号
      NODE_ENV: 'production', // 生产环境
    },
    watch: false, // 关闭文件变动监听，避免代码修改触发自动重启
    ignore_watch: ['node_modules', 'logs', '.next'], // 即使watch为true，也忽略这些目录（双重保险）
    autorestart: true, // 崩溃后自动重启
    restart_delay: 3000, // 崩溃后延迟 3 秒再重启
    max_restarts: 10, // 15 分钟内最大重启次数
    max_memory_restart: '1G', // 内存超过 1G 时自动重启
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    merge_logs: true,
    output: './logs/out.log',
    error: './logs/error.log',
  }]
};