import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // Log the incoming request
    const body = await request.json();
    console.log('Received request body:', body);

    if (!body.trades || !Array.isArray(body.trades)) {
      return NextResponse.json(
        { success: false, error: 'Invalid request format: trades array is required' },
        { status: 400 }
      );
    }

    // Create trades in the database
    const importedTrades = await prisma.trade.createMany({
      data: body.trades.map((trade: any) => ({
        symbol: trade.symbol,
        entryDate: new Date(trade.entryDate),
        exitDate: trade.exitDate ? new Date(trade.exitDate) : null,
        entryPrice: parseFloat(trade.entryPrice),
        exitPrice: trade.exitPrice ? parseFloat(trade.exitPrice) : null,
        quantity: parseInt(trade.quantity),
        tradeType: trade.tradeType,
        strategyId: '1', // Make sure this matches your strategy ID
        notes: trade.notes || null,
      })),
    });

    console.log('Successfully imported trades:', importedTrades);

    return NextResponse.json({ 
      success: true, 
      count: importedTrades.count 
    });
  } catch (error) {
    console.error('Server error during import:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown server error during import'
      }, 
      { status: 500 }
    );
  }
} 