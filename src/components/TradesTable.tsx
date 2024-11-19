'use client';
import { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Trade } from "@/types/trade";

export default function TradesTable() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        console.log('TradesTable: Starting fetch');
        const response = await fetch('/api/trades');
        console.log('TradesTable: Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('TradesTable: Received data:', data);
        setTrades(data);
      } catch (error) {
        console.error('TradesTable: Error fetching trades:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrades();
  }, []);

  // Debug render
  console.log('Component: Rendering with trades:', trades?.length);

  if (loading) {
    return <div>Loading trades...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!trades?.length) {
    return <div>No trades found</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Entry Date</TableHead>
            <TableHead>Exit Date</TableHead>
            <TableHead>Entry Price</TableHead>
            <TableHead>Exit Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id || Math.random()}>
              <TableCell>{trade.symbol}</TableCell>
              <TableCell>{new Date(trade.entryDate).toLocaleDateString()}</TableCell>
              <TableCell>{trade.exitDate ? new Date(trade.exitDate).toLocaleDateString() : '-'}</TableCell>
              <TableCell>${Number(trade.entryPrice).toFixed(2)}</TableCell>
              <TableCell>{trade.exitPrice ? `$${Number(trade.exitPrice).toFixed(2)}` : '-'}</TableCell>
              <TableCell>{trade.quantity}</TableCell>
              <TableCell>{trade.tradeType}</TableCell>
              <TableCell>{trade.notes || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 