export interface Trade {
  id: string;
  symbol: string;
  entryDate: string | Date;
  exitDate?: string | Date | null;
  entryPrice: number;
  exitPrice?: number | null;
  quantity: number;
  tradeType: string;
  strategy?: {
    id: string;
    name: string;
  } | null;
  notes?: string | null;
} 