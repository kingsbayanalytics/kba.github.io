import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  console.log('API GET: Starting request');
  try {
    const trades = await prisma.trade.findMany({
      orderBy: {
        entryDate: 'desc'
      }
    });
    
    console.log('API GET: Found trades:', trades.length);
    return NextResponse.json(trades);
    
  } catch (error) {
    console.error('API GET Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trades' },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler to handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
} 