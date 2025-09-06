# @pinkpixel/datetime-mcp MCP Server ⏰

[![smithery badge](https://smithery.ai/badge/@pinkpixel-dev/datetime-mcp)](https://smithery.ai/server/@pinkpixel-dev/datetime-mcp)

A powerful MCP server that provides LLMs with current date and time context with comprehensive timezone support. Get the current time in any timezone, with configurable defaults and intelligent fallbacks.

This is a TypeScript-based MCP server built with the Model Context Protocol that demonstrates timezone-aware datetime functionality.

## Features ✨

### Tools
- **`get_current_datetime`**: Returns the current date and time with full timezone support
  - **Optional timezone parameter**: Specify any IANA timezone (e.g., `America/New_York`, `Europe/London`, `Asia/Tokyo`)
  - **Configurable defaults**: Set server default timezone via environment variables
  - **Smart fallbacks**: Automatically falls back to UTC if no timezone is configured
  - **Robust validation**: Validates timezone identifiers and provides helpful error messages
  - **ISO-compatible format**: Returns properly formatted datetime strings with timezone information

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

#### Basic Configuration (Uses UTC)
```json
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": [
        "-y",
        "@pinkpixel/datetime-mcp"
      ]
    }
  }
}
```

#### Configuration with Default Timezone
```json
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": [
        "-y",
        "@pinkpixel/datetime-mcp"
      ],
      "env": {
        "TZ": "America/New_York"
      }
    }
  }
}
```

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

    #### Basic Local Configuration
    ```json
    {
      "mcpServers": {
        "datetime-local": {
          "command": "node",
          "args": ["/path/to/datetime-mcp/build/index.js"],
        }
      }
    }
    ```

    #### Local Configuration with Timezone
    ```json
    {
      "mcpServers": {
        "datetime-local": {
          "command": "node",
          "args": ["/path/to/datetime-mcp/build/index.js"],
          "env": {
            "TZ": "Europe/London"
          }
        }
      }
    }
    ```
*(Restart your MCP client application after updating the settings)*

## 🌍 Timezone Configuration Examples

### Common Timezone Identifiers

#### United States
```json
"TZ": "America/New_York"      // Eastern Time (EST/EDT)
"TZ": "America/Chicago"       // Central Time (CST/CDT)
"TZ": "America/Denver"        // Mountain Time (MST/MDT)
"TZ": "America/Los_Angeles"   // Pacific Time (PST/PDT)
"TZ": "America/Phoenix"       // Arizona (no DST)
"TZ": "America/Anchorage"     // Alaska Time
"TZ": "America/Honolulu"      // Hawaii Time
```

#### Europe
```json
"TZ": "Europe/London"         // GMT/BST (Greenwich Mean Time)
"TZ": "Europe/Paris"          // CET/CEST (Central European Time)
"TZ": "Europe/Berlin"         // CET/CEST
"TZ": "Europe/Rome"           // CET/CEST
"TZ": "Europe/Madrid"         // CET/CEST
"TZ": "Europe/Amsterdam"      // CET/CEST
"TZ": "Europe/Stockholm"      // CET/CEST
"TZ": "Europe/Moscow"         // MSK (Moscow Time)
```

#### Asia
```json
"TZ": "Asia/Tokyo"            // JST (Japan Standard Time)
"TZ": "Asia/Shanghai"         // CST (China Standard Time)
"TZ": "Asia/Seoul"            // KST (Korea Standard Time)
"TZ": "Asia/Kolkata"          // IST (India Standard Time)
"TZ": "Asia/Dubai"            // GST (Gulf Standard Time)
"TZ": "Asia/Singapore"        // SGT (Singapore Time)
"TZ": "Asia/Bangkok"          // ICT (Indochina Time)
```

#### Other Regions
```json
"TZ": "Australia/Sydney"      // AEST/AEDT (Australian Eastern)
"TZ": "Australia/Melbourne"   // AEST/AEDT
"TZ": "Australia/Perth"       // AWST (Australian Western)
"TZ": "Pacific/Auckland"      // NZST/NZDT (New Zealand)
"TZ": "Africa/Cairo"          // EET (Eastern European Time)
"TZ": "America/Sao_Paulo"     // BRT (Brazil Time)
"TZ": "UTC"                   // Coordinated Universal Time
```

### Usage Examples

#### Tool Usage Without Timezone Parameter
```
User: What time is it?
Assistant: (calls get_current_datetime with no parameters)
Response: "The current date and time is: 2025-09-06T19:30:00.000-04:00 (America/New_York)"
```

#### Tool Usage With Timezone Parameter
```
User: What time is it in Tokyo?
Assistant: (calls get_current_datetime with timezone: "Asia/Tokyo")
Response: "The current date and time in Asia/Tokyo is: 2025-09-07T08:30:00.000+09:00"
```

#### Multiple Timezone Queries
```
User: What time is it in London and Los Angeles?
Assistant: 
- London: (calls with timezone: "Europe/London")
- Los Angeles: (calls with timezone: "America/Los_Angeles")
```

### 2. Local Development Setup

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.

## License 📄

MIT License - Copyright (c) 2025 Pink Pixel
