declare global {
  interface Window {
    TradingView: {
      widget: new (config: ChartingLibraryWidgetOptions) => IChartingLibraryWidget;
    };
  }
}

export interface StudyOverrides {
  [key: string]: string | number | boolean;
  'volume.visible'?: boolean;
  'volume.volume.color.0'?: string;
  'volume.volume.color.1'?: string;
}

export interface ChartPropertyOverrides {
  [key: string]: string | number | boolean;
  'mainSeriesProperties.style'?: number;
  'paneProperties.background'?: string;
  'paneProperties.vertGridProperties.color'?: string;
  'paneProperties.horzGridProperties.color'?: string;
  'scalesProperties.backgroundColor'?: string;
  'scalesProperties.lineColor'?: string;
}

export interface ChartingLibraryWidgetOptions {
  container_id: string;
  width: string | number;
  height: string | number;
  symbol: string;
  interval: string;
  timezone?: string;
  theme?: 'light' | 'dark';
  style?: string;
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  withdateranges?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  studies?: string[];
  disabled_features?: string[];
  enabled_features?: string[];
  username?: string;
  charts_storage_url?: string;
  charts_storage_api_version?: string;
  client_id?: string;
  onChartReady?: () => void;
  custom_css_url?: string;
  loading_screen?: { backgroundColor: string };
  studies_overrides?: StudyOverrides;
  overrides?: ChartPropertyOverrides;
}

export interface IChartingLibraryWidget {
  onChartReady: (callback: () => void) => void;
  chart: () => IChartWidgetApi;
  remove: () => void;
}

export interface IChartWidgetApi {
  setTimezone: (timezone: string) => void;
  executeActionById: (actionId: string) => void;
}

export {}; 