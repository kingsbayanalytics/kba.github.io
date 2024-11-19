'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface ParsedTrade {
  symbol: string;
  entryDate: string;
  exitDate?: string;
  entryPrice: string;
  exitPrice?: string;
  quantity: string;
  tradeType: 'LONG' | 'SHORT';
  strategy: string;
  notes?: string;
}

export default function TradeImport({ onComplete }: { onComplete: () => void }) {
  const [importing, setImporting] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    setImporting(true);
    
    try {
      const text = await file.text();
      console.log('CSV Content:', text.substring(0, 200));

      Papa.parse<ParsedTrade>(text, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
          try {
            if (results.errors.length > 0) {
              console.error('CSV Parse errors:', results.errors);
              throw new Error(`CSV parsing failed: ${results.errors[0].message}`);
            }

            const trades = results.data.map(trade => {
              console.log('Processing trade:', trade);
              return {
                symbol: trade.symbol,
                entryDate: new Date(trade.entryDate).toISOString(),
                exitDate: trade.exitDate ? new Date(trade.exitDate).toISOString() : null,
                entryPrice: parseFloat(trade.entryPrice),
                exitPrice: trade.exitPrice ? parseFloat(trade.exitPrice) : null,
                quantity: parseInt(trade.quantity),
                tradeType: trade.tradeType,
                notes: trade.notes || null,
              };
            });

            console.log('Sending trades to API:', trades);

            const response = await fetch('/kba_site/api/trades/import', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ trades }),
            });

            const responseText = await response.text();
            console.log('API Response:', {
              status: response.status,
              text: responseText
            });

            if (!response.ok) {
              try {
                const errorData = JSON.parse(responseText);
                throw new Error(errorData.error || 'Import failed');
              } catch {
                throw new Error(`Import failed: ${responseText}`);
              }
            }

            const data = JSON.parse(responseText);
            
            toast({
              title: 'Success',
              description: `Imported ${data.count} trades successfully`,
            });
            
            onComplete();
          } catch (error) {
            console.error('Processing error:', error);
            throw error;
          }
        },
        error: (error) => {
          console.error('Papa parse error:', error);
          throw new Error(`Failed to parse CSV: ${error.message}`);
        },
      });
    } catch (error) {
      console.error('Top level error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to import trades',
        variant: 'destructive',
      });
    } finally {
      setImporting(false);
    }
  }, [onComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    maxFiles: 1,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        {importing ? (
          <p>Importing...</p>
        ) : isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <div>
            <p>Drag & drop your trade history CSV here, or click to select</p>
            <Button variant="outline" className="mt-4">
              Select File
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 