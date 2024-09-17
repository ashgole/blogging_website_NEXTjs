// pages/api/hello.js
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // Specifies that this route should use the Edge runtime
};

export default async function handler() {
  return NextResponse.json({ message: 'Hello, World!' });
}
