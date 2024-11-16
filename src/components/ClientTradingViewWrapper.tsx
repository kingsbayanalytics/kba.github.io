'use client';
import dynamic from 'next/dynamic';

const TradingViewWidget = dynamic(() => import('./TradingViewWidget'), {
  ssr: false
});

export default function ClientTradingViewWrapper() {
  return <TradingViewWidget />;
} 