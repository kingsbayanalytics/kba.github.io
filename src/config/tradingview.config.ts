import { ChartingLibraryWidgetOptions } from '@/types/tradingview';

export const tradingViewConfig: Partial<ChartingLibraryWidgetOptions> = {
  studies: [
    // Default studies/indicators - just strings, not objects
    'VIX@tv-basicstudies',
    'TICK@tv-basicstudies',
    'Market Profile@tv-basicstudies'
  ],
  // Enable features for indicators
  enabled_features: [
    'study_templates',
    'use_localstorage_for_settings',
    'save_chart_properties_to_local_storage',
  ],
  // Optional: Configure default visibility through overrides
  overrides: {
    "mainSeriesProperties.style": 1,
    "paneProperties.background": "#131722",
    "paneProperties.vertGridProperties.color": "#363c4e",
    "paneProperties.horzGridProperties.color": "#363c4e",
  },
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