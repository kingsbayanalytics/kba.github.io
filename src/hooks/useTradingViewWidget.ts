'use client';
import { useEffect, useRef } from 'react';
import type { ChartingLibraryWidgetOptions, IChartingLibraryWidget } from '@/types/tradingview';

interface UseTradingViewWidgetProps {
  onChartReady?: (widget: any) => void;
}

export const useTradingViewWidget = ({ onChartReady }: UseTradingViewWidgetProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    const loadTradingViewScript = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        
        script.onload = () => {
          if (window.TradingView && containerRef.current) {
            const widgetOptions: ChartingLibraryWidgetOptions = {
              container_id: 'tradingview_chart',
              width: '100%',
              height: '400',
              symbol: 'AMEX:SPY',
              interval: 'D',
              timezone: 'America/New_York',
              theme: 'dark',
              style: '1',
              locale: 'en',
              toolbar_bg: '#131722',
              enable_publishing: true,
              withdateranges: true,
              hide_side_toolbar: false,
              allow_symbol_change: true,
              save_image: true,
              username: process.env.NEXT_PUBLIC_TRADINGVIEW_USERNAME,
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
                'show_object_tree',
                'trading_annotations',
              ],
              onChartReady: () => {
                console.log('Chart is ready');
                if (onChartReady && widgetRef.current) {
                  onChartReady(widgetRef.current);
                }
              },
            };

            widgetRef.current = new window.TradingView.widget(widgetOptions);
          }
        };

        document.head.appendChild(script);
        
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          if (widgetRef.current) {
            widgetRef.current.remove();
            widgetRef.current = null;
          }
        };
      } catch (error) {
        console.error('Error initializing TradingView widget:', error);
      }
    };

    loadTradingViewScript();
  }, []);

  return { containerRef };
}; 