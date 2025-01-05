// src/app/api/sanity/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const query = '*[_type == "product"]';
    const response = await fetch(`https://your-sanity-api-url/v1/data/query?query=${encodeURIComponent(query)}`, {
      headers: {
        'Authorization': `Bearer your-sanity-api-token`, // If authentication is required
      },
    });
    const products = await response.json();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.error();
  }
}
