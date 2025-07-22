import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.ULTRAVOX_API_KEY;
const AGENT = process.env.ULTRAVOX_AGENT;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_request: NextRequest) {
  try {
    // Parse the request body (though currently not used, keeping for future)
    // const body = await request.json();
    
    const response = await fetch(`https://api.ultravox.ai/api/agents/${AGENT}/calls`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY as string,
      },
      body: JSON.stringify({}),
    });
    // Future: body: JSON.stringify({systemPrompt: body.systemPrompt, model: body.model, voice: body.voice})
    
    console.log('Ultravox API response status:', response.status);
    const data = await response.json();
    
    if (!response.ok) {
      console.error("Ultravox API error:", data);
      return NextResponse.json(data, { status: response.status });
    }
    
    console.log('Ultravox API response data:', data);
    return NextResponse.json(data, { status: 200 });
    
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "API error", details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 