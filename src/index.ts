#!/usr/bin/env node

/**
 * This MCP server provides the current date and time.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * Create an MCP server with capabilities for tools.
 */
const server = new Server(
  {
    name: "datetime-mcp",
    version: "0.1.0",
    description: "A simple MCP server that provides LLMs with the current date and time context.", // Added description from create step
  },
  {
    capabilities: {
      // resources: {}, // Removed as we don't have static resources
      tools: {},
      // prompts: {}, // Removed as we don't have prompts
    },
  }
);

/**
 * Handler that lists available tools.
 * Exposes a single "get_current_datetime" tool.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_current_datetime",
        description: "Get the current server date and time",
        inputSchema: { // No input needed, so empty properties
          type: "object",
          properties: {},
        }
      }
    ]
  };
});

/**
 * Handler for the get_current_datetime tool.
 * Returns the current date and time as an ISO 8601 string.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case "get_current_datetime": {
      const now = new Date();
      const dateTimeString = now.toISOString(); // Format as YYYY-MM-DDTHH:mm:ss.sssZ

      return {
        content: [{
          type: "text",
          text: `The current date and time is: ${dateTimeString}`
        }]
      };
    }

    default:
      // Use McpError for standard MCP errors
      throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${request.params.name}`);
  }
});

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output streams.
 */
async function main() {
  const transport = new StdioServerTransport();
  // Add error handler
  server.onerror = (error) => console.error('[MCP Error]', error);
  await server.connect(transport);
  // Log that the server is running to stderr so it doesn't interfere with stdout JSON communication
  console.error('DateTime MCP server running on stdio');
}

main().catch((error) => {
  console.error("Server failed to start:", error);
  process.exit(1);
});
