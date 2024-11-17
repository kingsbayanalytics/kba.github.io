declare global {
  interface Window {
    TradingView: {
      widget: new (config: any) => {
        onChartReady: (callback: () => void) => void;
        chart: () => any;
      };
    };
  }
}

export interface ChartingLibraryWidgetOptions {
  symbol: string;
  interval: string;
  timezone?: string;
  theme?: string;
  style?: string;
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  withdateranges?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  container_id: string;
  height: number;
  width: string | number;
} 