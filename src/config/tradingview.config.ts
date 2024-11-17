import { ChartingLibraryWidgetOptions } from '@/types/tradingview';

export const tradingViewConfig: Partial<ChartingLibraryWidgetOptions> = {
  studies: [
    // Default studies/indicators
    { id: 'VIX@tv-basicstudies', visible: true },
    { id: 'TICK@tv-basicstudies', visible: true },
    { id: 'Market Profile@tv-basicstudies', visible: true }
  ],
  // Enable trading features
  enabled_features: [
    'trading_account_manager',
    'show_trading_notifications_history',
    'trading_notifications',
    'order_panel',
    'buy_sell_buttons',
    'show_order_panel_on_start',
    'order_info',
    'trading_account_manager'
  ],
  // Custom time marks for trade history
  timeScale: {
    marks: [
      {
        id: 'trade1',
        time: 1234567890000, // Unix timestamp in ms
        color: 'green',
        label: 'Entry',
        tooltip: ['Entry Price: $100', 'VIX: 15', 'TICK: +500']
      },
      // Add more trade marks
    ]
  },
  // Account manager configuration
  accountManagerInfo: {
    accountTitle: "My Trading Account",
    orderColumns: [
      // Custom columns for orders
    ],
    tradeColumns: [
      // Custom columns for trades history
    ],
    summary: [
      // Custom summary fields
    ]
  }
}; 