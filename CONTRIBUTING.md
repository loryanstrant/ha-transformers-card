# Contributing to Transformers Cards

Thank you for your interest in contributing to Transformers Cards! This document provides guidelines and instructions for contributing to this project.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git
- A Home Assistant instance for testing (optional but recommended)

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ha-transformers-card.git
   cd ha-transformers-card
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Building the Project

To build the project once:
```bash
npm run build
```

To watch for changes and rebuild automatically:
```bash
npm run dev
```

### Code Quality

Before submitting your changes, ensure your code passes linting:
```bash
npm run lint
```

### Testing Your Changes

1. Copy the built file to your Home Assistant's `www` directory:
   ```bash
   cp dist/transformers-cards.js /path/to/homeassistant/www/
   ```

2. Add or update the resource in your Home Assistant configuration

3. Test your changes in the Home Assistant UI

### Code Style Guidelines

- Follow the existing code style (enforced by ESLint)
- Use single quotes for strings
- Use 2 spaces for indentation
- Add semicolons at the end of statements
- Keep lines under 100 characters when possible
- Use meaningful variable and function names
- Add comments for complex logic

### Commit Message Guidelines

Follow conventional commit format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add color picker to light card
fix: resolve issue with gauge card percentage calculation
docs: update README with new card examples
```

## Adding a New Card Type

If you want to add a new card type:

1. Create a new file in `src/` following the naming convention: `your-card.js`
2. Extend the `TransformersBaseCard` class
3. Implement the required methods: `render()`, `getStubConfig()`
4. Add appropriate styling following the Transformers aesthetic
5. Import and register your card in `src/transformers-cards.js`
6. Add documentation in README.md
7. Add usage examples

### Card Template

```javascript
import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersYourCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        /* Your custom styles here */
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    // Your card rendering logic here
    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${this.config.title || 'YOUR CARD'}</div>
          <!-- Card content -->
        </div>
      </div>
    `;
  }

  static getStubConfig() {
    return {
      // Default configuration
    };
  }
}

customElements.define('transformers-your-card', TransformersYourCard);
```

## Design Guidelines

### Visual Style

- Maintain the angular, tech-inspired Transformers aesthetic
- Use the defined color scheme (red/blue for Autobot, purple for Decepticon)
- Include tech panel effects and grid patterns where appropriate
- Keep the design consistent with existing cards
- Use the Transformers Movie font for headers

### Color Palette

Primary colors:
- Autobot Red: `#e31e24`
- Autobot Blue: `#1e3a8a`
- Accent Yellow: `#fbbf24`
- Background: `#0a0e27`
- Panel: `#1a1f3a`

### CSS Custom Properties

Use the defined CSS custom properties:
- `--transformers-primary-color`
- `--transformers-secondary-color`
- `--transformers-accent-color`
- `--transformers-background-color`
- `--transformers-border-color`
- `--transformers-text-color`
- `--transformers-glow-color`

## Documentation

When contributing, please update:
- README.md with new features or changes
- CHANGELOG.md following Keep a Changelog format
- Code comments for complex logic
- JSDoc comments for public methods

## Submitting Changes

1. Ensure all tests pass and code is linted
2. Update documentation
3. Commit your changes with a clear message
4. Push to your fork
5. Create a Pull Request with:
   - Clear title and description
   - Link to any related issues
   - Screenshots for UI changes
   - Testing steps

## Reporting Issues

When reporting issues, please include:
- Home Assistant version
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Card configuration (sanitized)

## Questions?

Feel free to open an issue for:
- Questions about contributing
- Clarification on features
- Discussion of potential changes

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help maintain a positive community

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Transformers Cards! Your efforts help make this project better for everyone.

**"Till all are one"** - Optimus Prime
