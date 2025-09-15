'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeGa, trackPageView } from '@/utils/ga';

function GoogleGaRun() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // 初始化 GA
  useEffect(() => {
    initializeGa();
  }, []);

  // 监听路由变化，发送页面浏览事件
  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
};

export default GoogleGaRun;