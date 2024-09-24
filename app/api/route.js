import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ name: 'ash gole' }, { status: 500 })
}