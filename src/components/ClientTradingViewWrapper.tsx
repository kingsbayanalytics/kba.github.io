'use client';
import dynamic from 'next/dynamic';
import { Trade } from '@/types/trade';

interface ClientTradingViewWrapperProps {
  trades?: Trade[];
}

const TradingViewWidget = dynamic(() => import('./TradingViewWidget'), {
  ssr: false
});

export default function ClientTradingViewWrapper({ trades }: ClientTradingViewWrapperProps) {
  return <TradingViewWidget trades={trades} />;
} 