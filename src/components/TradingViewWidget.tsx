'use client';
import { useTradingViewWidget } from '@/hooks/useTradingViewWidget';
import { Trade } from '@/types/trade';

interface TradingViewWidgetProps {
  trades?: Trade[];
}

const TradingViewWidget = ({ trades = [] }: TradingViewWidgetProps) => {
  const { containerRef } = useTradingViewWidget({
    onChartReady: (widget) => {
      trades.forEach(trade => {
        widget.chart().createShape(
          {
            time: trade.entryDate.getTime() / 1000,
            price: trade.entryPrice,
          },
          {
            shape: trade.tradeType === 'LONG' ? 'arrow_up' : 'arrow_down',
            text: `${trade.tradeType} ${trade.symbol} @ ${trade.entryPrice}`,
            overrides: {
              backgroundColor: trade.tradeType === 'LONG' ? '#22c55e' : '#ef4444',
              textColor: '#ffffff',
            },
          }
        );

        if (trade.exitDate && trade.exitPrice) {
          widget.chart().createShape(
            {
              time: trade.exitDate.getTime() / 1000,
              price: trade.exitPrice,
            },
            {
              shape: trade.tradeType === 'LONG' ? 'arrow_down' : 'arrow_up',
              text: `Exit ${trade.symbol} @ ${trade.exitPrice}`,
              overrides: {
                backgroundColor: '#6b7280',
                textColor: '#ffffff',
              },
            }
          );
        }
      });
    },
  });

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