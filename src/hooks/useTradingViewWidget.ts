'use client';
import { useEffect, useRef } from 'react';
import { ChartingLibraryWidgetOptions } from '@/types/tradingview';

export const useTradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTradingViewScript = async () => {
      // Create and load TradingView script
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        if (window.TradingView && containerRef.current) {
          const widgetOptions = {
            symbol: 'AMEX:SPY',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            container_id: containerRef.current.id,
            height: 400,
            width: '100%',
          };

          const widget = new window.TradingView.widget(widgetOptions);

          widget.onChartReady(() => {
            // Chart is ready, you can interact with it here
            const chart = widget.chart();
            chart.setTimezone('America/New_York');
          });
        }
      };

      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    };

    loadTradingViewScript();
  }, []);

  return { containerRef };
}; 