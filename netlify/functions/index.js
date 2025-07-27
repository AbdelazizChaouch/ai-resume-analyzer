import { createRequestHandler } from "@react-router/node";
import * as build from "../../build/server/index.js";

const handleRequest = createRequestHandler(build);

export const handler = async (event, context) => {
  const url = new URL(event.rawUrl);
  
  const request = new Request(url.href, {
    method: event.httpMethod,
    headers: new Headers(event.headers),
    body: event.body && event.isBase64Encoded 
      ? Buffer.from(event.body, 'base64').toString()
      : event.body,
  });

  try {
    const response = await handleRequest(request);
    
    const body = await response.text();
    
    return {
      statusCode: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body,
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}; 