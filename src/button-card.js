import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersButtonCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .buttons-container {
          display: grid;
          gap: 12px;
        }

        .buttons-container.columns-1 { grid-template-columns: 1fr; }
        .buttons-container.columns-2 { grid-template-columns: repeat(2, 1fr); }
        .buttons-container.columns-3 { grid-template-columns: repeat(3, 1fr); }

        .button {
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.3) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 0.9em;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }

        .button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .button::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .button:hover {
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.5) 0%,
            rgba(30, 58, 138, 0.4) 100%
          );
          box-shadow: 0 0 15px var(--transformers-glow-color);
          transform: translateY(-2px);
        }

        .button:active {
          transform: translateY(0);
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .button.active {
          background: linear-gradient(
            135deg,
            var(--transformers-border-color) 0%,
            var(--transformers-secondary-color) 100%
          );
          box-shadow: 0 0 20px var(--transformers-glow-color);
        }

        .button-icon {
          margin-right: 8px;
          font-size: 1.2em;
        }

        .button-state {
          display: block;
          font-size: 0.75em;
          margin-top: 4px;
          opacity: 0.8;
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'CONTROL PANEL';
    const columns = Math.min(Math.max(this.config.columns || 1, 1), 3);
    const buttons = this.config.buttons || [];

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="buttons-container columns-${columns}">
            ${buttons.map(btn => this._renderButton(btn))}
          </div>
        </div>
      </div>
    `;
  }

  _renderButton(buttonConfig) {
    const name = buttonConfig.name || 'BUTTON';
    const icon = buttonConfig.icon || '';
    const showState = buttonConfig.show_state || false;
    
    let isActive = false;
    let stateText = '';

    if (buttonConfig.entity) {
      const entity = this.hass.states[buttonConfig.entity];
      if (entity) {
        isActive = entity.state === 'on';
        stateText = entity.state.toUpperCase();
      }
    }

    return html`
      <button 
        class="button ${isActive ? 'active' : ''}"
        @click=${() => this._handleButtonClick(buttonConfig)}
      >
        ${icon ? html`<span class="button-icon">${icon}</span>` : ''}
        ${name}
        ${showState && stateText ? html`<span class="button-state">${stateText}</span>` : ''}
      </button>
    `;
  }

  _handleButtonClick(buttonConfig) {
    if (buttonConfig.tap_action) {
      this._handleTapAction(buttonConfig.tap_action, buttonConfig);
    } else if (buttonConfig.service) {
      const [domain, service] = buttonConfig.service.split('.');
      this.hass.callService(domain, service, buttonConfig.service_data || {});
    } else if (buttonConfig.entity) {
      const action = buttonConfig.action || 'toggle';
      if (action === 'toggle') {
        this.hass.callService('homeassistant', 'toggle', { entity_id: buttonConfig.entity });
      } else if (action === 'turn_on') {
        this.hass.callService('homeassistant', 'turn_on', { entity_id: buttonConfig.entity });
      } else if (action === 'turn_off') {
        this.hass.callService('homeassistant', 'turn_off', { entity_id: buttonConfig.entity });
      }
    }
  }

  _handleTapAction(action, buttonConfig) {
    if (action.action === 'navigate') {
      window.history.pushState(null, '', action.navigation_path);
      window.dispatchEvent(new CustomEvent('location-changed'));
    } else if (action.action === 'url') {
      window.open(action.url_path, '_blank');
    } else if (action.action === 'more-info' && buttonConfig.entity) {
      const event = new Event('hass-more-info', { bubbles: true, composed: true });
      event.detail = { entityId: buttonConfig.entity };
      this.dispatchEvent(event);
    } else if (action.action === 'call-service') {
      const [domain, service] = action.service.split('.');
      this.hass.callService(domain, service, action.service_data || {});
    } else if (action.action === 'toggle' && buttonConfig.entity) {
      this.hass.callService('homeassistant', 'toggle', { entity_id: buttonConfig.entity });
    }
  }

  static getStubConfig() {
    return {
      title: 'CONTROL PANEL',
      columns: 1,
      buttons: []
    };
  }
}

customElements.define('transformers-button-card', TransformersButtonCard);
