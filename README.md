# @pinkpixel/datetime-mcp MCP Server ⏰

[![smithery badge](https://smithery.ai/badge/@pinkpixel-dev/datetime-mcp)](https://smithery.ai/server/@pinkpixel-dev/datetime-mcp)

A simple MCP server that provides LLMs with the current date and time context based on the server's system clock.

This is a TypeScript-based MCP server that demonstrates a basic tool implementation for the Model Context Protocol.

## Features ✨

### Tools
- **`get_current_datetime`**: Returns the current date and time of the server as an ISO 8601 formatted string (e.g., `2025-04-05T22:30:00.000Z`).
  - Takes no input parameters.

## Installation 🚀

There are two ways to install and configure this MCP server:

### Installing via Smithery

To install datetime-mcp for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@pinkpixel-dev/datetime-mcp):

```bash
npx -y @smithery/cli install @pinkpixel-dev/datetime-mcp --client claude
```

### 1. Installation from NPM (Recommended)

Install the package globally using npm:
```bash
npm install -g @pinkpixel/datetime-mcp
```

Then, add the following configuration to your MCP client's settings file.

```json
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": [
        "-y",
        "@pinkpixel/datetime-mcp"
      ],
      "disabled": false,
      "alwaysAllow": [
        "get_current_datetime"
      ]
    }
  }
}
```
*(Restart your MCP client application after updating the settings)*

### 2. Local Development Setup

If you want to run the server directly from a cloned repository for development or testing:

1.  Clone the repository:
    ```bash
    # git clone https://github.com/pinkpixel/datetime-mcp.git
    cd datetime-mcp
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the server:
    ```bash
    npm run build
    ```
4.  Add the following configuration to your MCP client's settings file, **making sure to replace `/path/to/datetime-mcp` with the actual absolute path** to where you cloned the repository:

    ```json
    {
      "mcpServers": {
        "datetime-local": {
          "command": "node",
          "args": ["/path/to/datetime-mcp/build/index.js"],
          "disabled": false,
          "alwaysAllow": [
            "get_current_datetime"
          ]
        }
        
      }
    }
    ```
    *(Restart your MCP client application after updating the settings)*

### Debugging 🐞

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.

## License 📄

MIT License - Copyright (c) 2025 Pink Pixel
