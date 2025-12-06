import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersTextCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .text-content {
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--transformers-secondary-color);
          font-family: var(--transformers-font-family);
          line-height: 1.8;
          position: relative;
        }

        .text-content.size-small { font-size: 0.85em; }
        .text-content.size-medium { font-size: 1em; }
        .text-content.size-large { font-size: 1.2em; }

        .text-content.align-left { text-align: left; }
        .text-content.align-center { text-align: center; }
        .text-content.align-right { text-align: right; }

        .text-prompt {
          color: var(--transformers-accent-color);
          margin-right: 8px;
        }

        .text-line {
          margin: 4px 0;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40);
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'MESSAGE';
    const size = this.config.size || 'medium';
    const align = this.config.align || 'left';
    const showPrompt = this.config.show_prompt !== false;
    const typingEffect = this.config.typing_effect || false;

    let content = this.config.content || '';

    // Handle dynamic content based on entity state
    if (this.config.entity && this.config.state_content) {
      const entity = this.hass.states[this.config.entity];
      if (entity) {
        const state = entity.state;
        content = this.config.state_content[state] || this.config.state_content.default || content;
        
        // Replace template variables
        content = content
          .replace(/\{\{state\}\}/g, entity.state)
          .replace(/\{\{friendly_name\}\}/g, entity.attributes.friendly_name || this.config.entity)
          .replace(/\{\{unit\}\}/g, entity.attributes.unit_of_measurement || '');
        
        // Handle attributes
        const attrMatches = Array.from(content.matchAll(/\{\{attribute\.([^}]+)\}\}/g));
        for (const match of attrMatches) {
          const attrName = match[1];
          const attrValue = entity.attributes[attrName] || '';
          content = content.replace(match[0], attrValue);
        }
      }
    } else if (this.config.entity) {
      const entity = this.hass.states[this.config.entity];
      if (entity && content) {
        content = content
          .replace(/\{\{state\}\}/g, entity.state)
          .replace(/\{\{friendly_name\}\}/g, entity.attributes.friendly_name || this.config.entity)
          .replace(/\{\{unit\}\}/g, entity.attributes.unit_of_measurement || '');
        
        const attrMatches = Array.from(content.matchAll(/\{\{attribute\.([^}]+)\}\}/g));
        for (const match of attrMatches) {
          const attrName = match[1];
          const attrValue = entity.attributes[attrName] || '';
          content = content.replace(match[0], attrValue);
        }
      }
    }

    const lines = content.split('\n');

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="text-content size-${size} align-${align} ${typingEffect ? 'typing-effect' : ''}">
            ${lines.map(line => html`
              <div class="text-line">
                ${showPrompt && line.trim() ? html`<span class="text-prompt">></span>` : ''}
                ${line}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  static getStubConfig() {
    return {
      title: 'MESSAGE',
      content: 'System message here',
      size: 'medium',
      align: 'left',
      show_prompt: true,
      typing_effect: false
    };
  }
}

customElements.define('transformers-text-card', TransformersTextCard);
