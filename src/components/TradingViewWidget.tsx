'use client';
import { useTradingViewWidget } from '@/hooks/useTradingViewWidget';

const TradingViewWidget = () => {
  const { containerRef } = useTradingViewWidget();

  return (
    <div 
      id="tradingview_chart" 
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative'
      }} 
    />
  );
};

export default TradingViewWidget; 