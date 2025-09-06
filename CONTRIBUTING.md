# 🤝 Contributing to @pinkpixel/datetime-mcp

Thank you for your interest in contributing to the datetime-mcp project! We welcome contributions from the community and appreciate your effort to make this MCP server better. ✨

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Code Style](#code-style)
- [Issue Reporting](#issue-reporting)
- [Contact](#contact)

## 🤖 Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to [admin@pinkpixel.dev](mailto:admin@pinkpixel.dev).

### Our Standards ⭐

- **Be Respectful**: Treat everyone with kindness and respect
- **Be Inclusive**: Welcome newcomers and help them learn
- **Be Collaborative**: Work together to solve problems
- **Be Professional**: Keep discussions focused and constructive

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager
- TypeScript knowledge (helpful but not required)
- Basic understanding of MCP (Model Context Protocol)

### First Contribution
1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. 💻 Make your changes
4. ✅ Test your changes
5. 📝 Update documentation if needed
6. 🔄 Submit a pull request

## 🛠️ Development Setup

### 1. Clone Your Fork
```bash
git clone https://github.com/your-username/datetime-mcp.git
cd datetime-mcp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Project
```bash
npm run build
```

### 4. Test the Server
```bash
# Test with MCP Inspector
npm run inspector

# Or run directly
node build/index.js
```

### 5. Development Workflow
```bash
# Watch mode for development
npm run watch

# Build for production
npm run build

# Prepare for publishing
npm run prepare
```

## 📖 Contributing Guidelines

### What We're Looking For 🔍

#### High Priority
- 🐛 **Bug Fixes**: Resolve issues with existing functionality
- 📚 **Documentation**: Improve or expand documentation
- 🧪 **Testing**: Add test coverage for existing features
- 🏗️ **Code Quality**: Refactor or optimize existing code

#### Medium Priority  
- ✨ **New Features**: Enhance datetime functionality (timezone support, formatting)
- 🔧 **Developer Experience**: Improve debugging, development tools
- 🌍 **Internationalization**: Locale-aware datetime formatting
- ⚡ **Performance**: Optimize server performance

#### Low Priority
- 🎨 **UI/UX**: Improve error messages and user experience
- 📦 **Dependencies**: Update or optimize dependencies
- 🔒 **Security**: Security improvements and hardening

### What We're NOT Looking For ❌

- Breaking changes without strong justification
- Features that significantly increase complexity
- Changes that break MCP compliance
- Contributions without proper testing
- Large-scale refactoring without discussion

## 🔄 Pull Request Process

### Before You Submit
1. ✅ Ensure your code follows our style guidelines
2. 📝 Update documentation for any new features
3. 🧪 Add or update tests as appropriate
4. 🔍 Run the full test suite
5. 📋 Update CHANGELOG.md if applicable

### PR Requirements
- **Clear Title**: Describe what the PR does
- **Detailed Description**: Explain the changes and reasoning
- **Issue Reference**: Link to related issues if applicable
- **Screenshots**: For UI changes (if any)
- **Breaking Changes**: Clearly marked if applicable

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature  
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added (if applicable)
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
```

## 🧪 Testing

### Current Testing Strategy
Currently, the project uses manual testing with the MCP Inspector. We welcome contributions to add automated testing!

### Manual Testing
```bash
# Test the server
npm run inspector

# Test specific functionality
# Use the inspector web interface to call get_current_datetime
```

### Future Testing Goals
- Unit tests for core functionality
- Integration tests with MCP clients
- Automated CI/CD pipeline
- Performance testing

## 🎨 Code Style

### TypeScript Guidelines
- Use **strict mode** TypeScript configuration
- Prefer **explicit types** over `any`
- Use **async/await** over Promises where possible
- Follow **MCP SDK patterns** for consistency

### Formatting Rules
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings
- **Semicolons**: Always use semicolons
- **Line Length**: Max 100 characters
- **Naming**: camelCase for variables, PascalCase for classes

### Code Organization
```typescript
// Good: Clear imports and organization
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Good: Descriptive function names
async function handleDateTimeRequest() {
  // Implementation
}

// Good: Clear error handling
try {
  const result = await someOperation();
  return result;
} catch (error) {
  throw new McpError(ErrorCode.InternalError, `Failed: ${error.message}`);
}
```

## 🐛 Issue Reporting

### Bug Reports
When reporting bugs, please include:

- **Environment**: OS, Node.js version, MCP client
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Steps to Reproduce**: Detailed steps
- **Screenshots**: If applicable
- **Logs**: Relevant error messages

### Feature Requests
For feature requests, please include:

- **Use Case**: Why is this needed?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other solutions considered
- **Impact**: Who would benefit from this?

### Issue Templates
We provide issue templates to help you create detailed reports. Please use the appropriate template when creating issues.

## 📞 Contact & Support

### Getting Help
- 📧 **Email**: [admin@pinkpixel.dev](mailto:admin@pinkpixel.dev)
- 🌐 **Website**: [pinkpixel.dev](https://pinkpixel.dev)
- 💬 **Discord**: @sizzlebop
- 🐙 **GitHub**: [github.com/pinkpixel-dev](https://github.com/pinkpixel-dev)

### Response Times
- **Bug Reports**: Within 48 hours
- **Feature Requests**: Within 1 week  
- **Pull Reviews**: Within 72 hours
- **Questions**: Within 24 hours

## 🎉 Recognition

Contributors will be recognized in:
- Project README
- CHANGELOG.md for significant contributions
- GitHub contributor graphs
- Special thanks in release notes

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License that covers the project.

---

## 🌟 Thank You!

Every contribution, no matter how small, helps make this project better. Whether you're fixing a typo, reporting a bug, or adding a major feature, your help is appreciated! 

**Together, let's make datetime-mcp the best MCP server it can be!** 🚀

---

*Made with ❤️ by Pink Pixel*
*Dream it, Pixel it ✨*
