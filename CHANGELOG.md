# 📝 Changelog

All notable changes to the **@pinkpixel/datetime-mcp** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-09-06 🌍

### Added
- 🌍 **Comprehensive Timezone Support**: Full IANA timezone support with configurable defaults
- ⚙️ **Optional Tool Parameter**: `timezone` parameter for per-request timezone specification
- 🔧 **Environment Configuration**: Set default timezone via `TZ` environment variable
- ✅ **Robust Validation**: Timezone validation using `Intl.supportedValuesOf` with fallback
- 📚 **date-fns-tz Integration**: Professional timezone handling and formatting library
- 🌐 **Smart Fallbacks**: Automatic fallback to UTC when no timezone is configured
- 📝 **Enhanced Documentation**: Comprehensive timezone examples and configuration guides

### Enhanced
- 🔧 **Tool Schema**: Updated to accept optional timezone parameter with clear descriptions
- 📤 **Response Format**: Now includes timezone information in response messages
- ⚠️ **Error Handling**: Improved error messages for invalid timezone identifiers
- 📊 **Type Safety**: Full TypeScript interfaces for configuration and validation

### Technical Details
- Built with `date-fns-tz` v3.0.0 for robust timezone operations
- Maintains full backward compatibility - existing usage unchanged
- Uses `Intl.supportedValuesOf('timeZone')` for modern timezone validation
- ISO-compatible datetime formatting with timezone offset information
- Comprehensive error handling with helpful user guidance

### Configuration Examples
```json
// Basic usage (UTC default)
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": ["-y", "@pinkpixel/datetime-mcp"]
    }
  }
}

// With default timezone
{
  "mcpServers": {
    "datetime": {
      "command": "npx",
      "args": ["-y", "@pinkpixel/datetime-mcp"],
      "env": { "TZ": "America/New_York" }
    }
  }
}
```

---

## [0.1.0] - 2025-09-06 🎉

### Added
- ✨ Initial release of datetime-mcp MCP server
- ⏰ `get_current_datetime` tool that returns current server date and time
- 📦 TypeScript implementation with MCP SDK 0.6.0
- 🚀 NPM package publication as `@pinkpixel/datetime-mcp`
- 🎯 Smithery platform integration for easy installation
- 🐳 Docker containerization support
- 📖 Comprehensive README with installation instructions
- 🔧 MCP Inspector integration for debugging
- ⚖️ MIT License
- 🏗️ TypeScript build system with ES modules support
- 📋 Package configuration for global CLI usage

### Features
- **Zero Configuration**: No setup required, works out of the box
- **ISO 8601 Format**: Returns standardized datetime strings
- **MCP Compliance**: Follows Model Context Protocol specifications
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Multiple Installation Options**: NPM, Smithery, and local development

### Technical Details
- Built with `@modelcontextprotocol/sdk` v0.6.0
- TypeScript 5.3.3 with strict mode enabled
- Node.js 20+ support with ES2022 target
- Stdio transport for broad client compatibility
- Proper error handling with McpError

---

## Release Notes

### v0.1.0 - Initial Launch 🚀
This is the first public release of the datetime-mcp server. The server provides a simple but essential functionality for LLMs to access current date and time information. Perfect for:

- 📅 Date-aware AI interactions
- ⏱️ Time-sensitive AI applications
- 🤖 LLM context enhancement
- 🔧 MCP server development reference

### Installation
```bash
# Via NPM
npm install -g @pinkpixel/datetime-mcp

# Via Smithery
npx -y @smithery/cli install @pinkpixel-dev/datetime-mcp --client claude
```

### Compatibility
- ✅ Claude Desktop
- ✅ Any MCP-compatible client
- ✅ Node.js 20+
- ✅ Windows, macOS, Linux

---

## Upcoming Features 🔮

Future versions may include:
- 📅 **Custom Date Formats**: Flexible date/time formatting options beyond ISO 8601
- 🕐 **Time Calculations**: Utilities for time arithmetic and duration calculations
- 📊 **Datetime Parsing**: Tools to parse and validate datetime strings
- 🌐 **Locale Formatting**: Locale-aware datetime display options
- 🗺️ **Timezone Lists**: Tool to list available timezones and their details
- ⏱️ **Multiple Timezones**: Single call to get time in multiple timezones
- 📝 **Business Hours**: Tools for business day and hour calculations

---

*Made with ❤️ by Pink Pixel*
*For updates and support, visit: [pinkpixel.dev](https://pinkpixel.dev)*
