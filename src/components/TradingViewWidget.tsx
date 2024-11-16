'use client';
import { useEffect } from 'react';

// Define the widget configuration type
interface TradingViewWidgetConfig {
  width: string | number;
  height: number;
  symbol: string;
  interval: string;
  timezone: string;
  theme: 'light' | 'dark';
  style: string;
  locale: string;
  toolbar_bg: string;
  enable_publishing: boolean;
  allow_symbol_change: boolean;
  container_id: string;
  studies?: string[];
  range?: string;
  hide_side_toolbar?: boolean;
  details?: boolean;
  hotlist?: boolean;
  calendar?: boolean;
  show_popup_button?: boolean;
  popup_width?: string;
  popup_height?: string;
}

// Define the TradingView widget type
interface TradingViewType {
  widget: new (config: TradingViewWidgetConfig) => void;
}

// Update the global window type
declare global {
  interface Window {
    TradingView: TradingViewType;
  }
}

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          width: '100%',
          height: 500,
          symbol: 'AMEX:SPY',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_chart',
          studies: ['RSI@tv-basicstudies', 'MAExp@tv-basicstudies'],
          hide_side_toolbar: false,
          details: true,
          hotlist: true,
          calendar: true
        });
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="tradingview_chart" />;
};

export default TradingViewWidget; 