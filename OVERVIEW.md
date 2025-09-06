# 📊 @pinkpixel/datetime-mcp - Project Overview

> **Last Updated**: September 6, 2025 ⏰

## 🎯 Project Purpose

**@pinkpixel/datetime-mcp** is a powerful Model Context Protocol (MCP) server that provides Large Language Models (LLMs) with timezone-aware access to current date and time information. This server demonstrates comprehensive MCP tool implementation with configurable timezone support, serving as both a production-ready utility and an advanced reference implementation for MCP servers.

## 🏗️ Architecture

### Technology Stack
- **Language**: TypeScript 5.3.3
- **Runtime**: Node.js 20+ (ES Modules)
- **MCP SDK**: @modelcontextprotocol/sdk v0.6.0
- **Timezone Library**: date-fns-tz v3.0.0
- **Transport**: stdio (Standard Input/Output)
- **Build System**: TypeScript Compiler (tsc)

### Project Structure
```
datetime-mcp/
├── src/
│   └── index.ts           # Main server implementation
├── build/                 # Compiled JavaScript output
├── package.json           # Node.js package configuration
├── tsconfig.json          # TypeScript configuration
├── README.md              # Installation & usage guide
├── LICENSE                # MIT License
├── Dockerfile             # Container configuration
├── smithery.yaml          # Smithery platform integration
└── .gitignore            # Git ignore rules
```

### Core Components

#### MCP Server Configuration
- **Name**: `datetime-mcp`
- **Version**: `0.2.0`
- **Capabilities**: Tools only (no resources or prompts)
- **Transport**: StdioServerTransport
- **Configuration**: ServerConfig interface for timezone settings

#### Tool Implementation
- **Tool Name**: `get_current_datetime`
- **Input Schema**: Optional timezone parameter (IANA timezone identifier)
- **Output**: Timezone-aware formatted date/time string with timezone information
- **Default Behavior**: Uses configured default timezone or UTC fallback
- **Validation**: Robust timezone validation using Intl.supportedValuesOf
- **Error Handling**: Comprehensive McpError handling with helpful error messages

## 🛠️ Core Functionality

### Primary Feature
The server exposes a timezone-aware tool that returns current date and time:

```typescript
// Basic usage (uses default timezone):
{
  content: [{
    type: "text",
    text: "The current date and time is: 2025-09-06T19:34:05.886-04:00 (America/New_York)"
  }]
}

// With timezone parameter:
{
  content: [{
    type: "text",
    text: "The current date and time in Asia/Tokyo is: 2025-09-07T08:34:05.886+09:00"
  }]
}
```

### Key Features
- 🌍 **Timezone Support**: Full IANA timezone support with parameter and configuration options
- ⏰ **Real-time Date/Time**: Returns current time in any timezone with proper formatting
- 🔧 **Configurable Defaults**: Set default timezone via environment variables or server config
- ✅ **Smart Validation**: Robust timezone validation with helpful error messages
- 🔄 **Flexible Usage**: Optional timezone parameter for per-request timezone selection
- 📡 **MCP Compliant**: Follows Model Context Protocol standards with enhanced capabilities
- 🚀 **Easy Installation**: Available via NPM and Smithery with backward compatibility
- 🐳 **Containerized**: Docker support for deployment with timezone configuration
- 🔍 **Debuggable**: MCP Inspector integration for testing timezone functionality

## 🔌 Integration Options

### Installation Methods
1. **NPM Global Install**: `npm install -g @pinkpixel/datetime-mcp`
2. **Smithery Platform**: `npx -y @smithery/cli install @pinkpixel-dev/datetime-mcp --client claude`
3. **Local Development**: Clone, build, and run directly

### Client Configuration

#### Basic Configuration (UTC default)
```json
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": ["-y", "@pinkpixel/datetime-mcp"],
      "alwaysAllow": ["get_current_datetime"]
    }
  }
}
```

#### With Default Timezone Configuration
```json
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": ["-y", "@pinkpixel/datetime-mcp"],
      "env": {
        "TZ": "America/New_York"
      },
      "alwaysAllow": ["get_current_datetime"]
    }
  }
}
```

## 📋 Dependencies

### Production Dependencies
- `@modelcontextprotocol/sdk`: ^0.6.0 - Core MCP framework
- `date-fns-tz`: ^3.0.0 - Robust timezone handling and formatting

### Development Dependencies
- `@types/node`: ^20.11.24 - Node.js type definitions
- `typescript`: ^5.3.3 - TypeScript compiler

### Build Dependencies
- Node.js 20+ runtime environment
- npm/yarn package manager

## 🚀 Build & Deployment

### Build Process
1. TypeScript compilation: `src/` → `build/`
2. Executable permissions set on `build/index.js`
3. Package preparation with `npm run prepare`

### Available Scripts
- `npm run build` - Compile TypeScript and set permissions
- `npm run prepare` - Pre-publication build
- `npm run watch` - Development mode with file watching
- `npm run inspector` - Launch MCP Inspector for debugging

### Deployment Targets
- **NPM Registry**: Published as `@pinkpixel/datetime-mcp`
- **Smithery Platform**: Available as `@pinkpixel-dev/datetime-mcp`
- **Docker Hub**: Containerized deployment option
- **Local Development**: Direct execution from build

## 📖 Documentation

### Available Documentation
- `README.md` - Comprehensive installation and usage guide
- `LICENSE` - MIT License terms
- `package.json` - Package metadata and dependencies
- `OVERVIEW.md` - This architectural overview (current file)

### Documentation Quality
- ✅ Installation instructions (multiple methods)
- ✅ Configuration examples for MCP clients
- ✅ Debugging guidelines with MCP Inspector
- ✅ Development setup instructions
- ✅ License and legal information

## 🎨 Design Patterns

### MCP Implementation Patterns
1. **Server Initialization**: Standard MCP server setup with capabilities
2. **Tool Registration**: ListToolsRequestSchema handler
3. **Tool Execution**: CallToolRequestSchema handler with error handling
4. **Transport Layer**: Stdio transport for broad client compatibility
5. **Error Handling**: Proper McpError usage for protocol compliance

### Code Organization
- Single-file implementation for simplicity
- Clear separation of concerns (server setup, tool handlers, transport)
- Comprehensive error handling and logging
- TypeScript strict mode for type safety

## 🔄 Version Information

- **Current Version**: 0.2.0
- **MCP SDK Version**: 0.6.0
- **Timezone Library**: date-fns-tz 3.0.0
- **Node.js Support**: 20+
- **TypeScript Target**: ES2022

## 👤 Authorship

- **Author**: Pink Pixel (pinkpixel.dev)
- **License**: MIT License
- **Copyright**: 2025 Pink Pixel
- **Signature**: Made with ❤️ by Pink Pixel

---

*This overview was generated on September 6, 2025, as part of the project documentation initiative.*
