import { ChartingLibraryWidgetOptions } from '@/types/tradingview';

export const tradingViewConfig: Partial<ChartingLibraryWidgetOptions> = {
  studies: [
    'VIX@tv-basicstudies',
    'TICK@tv-basicstudies',
    'Market Profile@tv-basicstudies'
  ],
  enabled_features: [
    'study_templates',
    'use_localstorage_for_settings',
    'save_chart_properties_to_local_storage',
  ],
  overrides: {
    'mainSeriesProperties.style': 1,
    'paneProperties.background': '#131722',
    'paneProperties.vertGridProperties.color': '#363c4e',
    'paneProperties.horzGridProperties.color': '#363c4e',
    'scalesProperties.backgroundColor': '#131722',
    'scalesProperties.lineColor': '#363c4e'
  }
}; 