'use client';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: {
      widget: any;
    }
  }
}

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTradingViewScript = async () => {
      try {
        // Load TradingView script
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        
        // Create widget after script loads
        script.onload = () => {
          if (window.TradingView && containerRef.current) {
            const widget = new window.TradingView.widget({
              // Required
              container_id: 'tradingview_chart',
              width: '100%',
              height: '400',
              symbol: 'AMEX:SPY',
              interval: 'D',
              
              // Add your username here
              username: process.env.NEXT_PUBLIC_TRADINGVIEW_USERNAME,
              
              // Optional configurations
              timezone: 'America/New_York',
              theme: 'dark',
              style: '1',
              locale: 'en',
              toolbar_bg: '#131722',
              header_widget_buttons_mode: 'fullsize',
              disabled_features: [
                'header_symbol_search',
                'header_settings',
                'header_compare',
                'header_undo_redo',
                'header_screenshot',
                'header_saveload'
              ],
              enabled_features: [
                'use_localstorage_for_settings',
                'save_chart_properties_to_local_storage',
              ],
              enable_publishing: true,
              withdateranges: true,
              hide_side_toolbar: false,
              allow_symbol_change: true,
              save_image: true,
              
              // Enable features for logged-in users
              charts_storage_url: 'https://saveload.tradingview.com',
              charts_storage_api_version: '1.1',
              client_id: 'tradingview.com',
              
              // Load studies/indicators
              studies: [
                'MAExp@tv-basicstudies',
                'RSI@tv-basicstudies',
                'VWAP@tv-basicstudies'
              ],
              
              // Event handlers
              onChartReady: () => {
                console.log('Chart is ready');
                // Add any initialization code here
              },
            });
          }
        };

        document.head.appendChild(script);
        
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      } catch (error) {
        console.error('Error initializing TradingView widget:', error);
      }
    };

    loadTradingViewScript();
  }, []);

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