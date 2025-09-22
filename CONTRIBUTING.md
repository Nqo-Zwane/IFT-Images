# Contributing to IFT Images

Thank you for your interest in contributing to IFT Images! This document provides guidelines for contributing to this project.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/IFT-Images.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

## Code Standards

### Commit Messages
We use [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Code Quality
- All code must pass ESLint checks: `npm run lint`
- All code must pass TypeScript checks: `npm run type-check`
- Format code with Prettier: `npm run format`
- Pre-commit hooks will automatically run these checks

### TypeScript Guidelines
- Use explicit return types for functions
- Avoid `any` type - use proper typing
- Use strict null checks
- Import React explicitly when using JSX

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the code standards
3. Ensure all checks pass locally
4. Commit using conventional commit format
5. Push to your fork and create a Pull Request
6. Provide clear description of changes and reasoning

## Code Review

- All PRs require review before merging
- Address feedback promptly and professionally
- Keep PRs focused and reasonably sized
- Update documentation if needed

## Issues

- Use clear, descriptive titles
- Provide steps to reproduce for bugs
- Include relevant system information
- Search existing issues before creating new ones

## Questions?

Feel free to open an issue for questions about contributing or reach out to the maintainers.

---

By contributing, you agree that your contributions will be licensed under the MIT License.
