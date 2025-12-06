import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersStatusCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .status-grid {
          display: grid;
          gap: 12px;
        }

        .status-item {
          display: flex;
          align-items: center;
          padding: 10px 12px;
          background: linear-gradient(
            90deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.05) 100%
          );
          border-left: 3px solid var(--transformers-border-color);
          position: relative;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }

        .status-item::after {
          content: '';
          position: absolute;
          right: 8px;
          top: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          opacity: 0.3;
        }

        .status-label {
          flex: 1;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.85em;
          letter-spacing: 1.5px;
          font-family: var(--transformers-font-family);
        }

        .status-value {
          font-family: var(--transformers-font-family);
          font-size: 1.1em;
          margin-left: 8px;
          text-shadow: 0 0 4px var(--transformers-glow-color);
        }

        .system-status {
          margin-top: 16px;
          padding: 14px;
          border: 2px solid var(--transformers-secondary-color);
          background: linear-gradient(
            135deg,
            rgba(30, 58, 138, 0.2) 0%,
            rgba(227, 30, 36, 0.1) 100%
          );
          position: relative;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }

        .system-status::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .system-status::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: var(--transformers-accent-color);
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .system-status-header {
          font-size: 0.75em;
          margin-bottom: 8px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .system-message {
          font-family: var(--transformers-font-family);
          line-height: 1.6;
          font-weight: bold;
        }

        /* Red/Warning theme styles */
        .card.theme-red {
          --transformers-primary-color: #dc2626;
          --transformers-border-color: #dc2626;
          --transformers-glow-color: rgba(220, 38, 38, 0.6);
        }

        /* Yellow/Caution theme styles */
        .card.theme-yellow {
          --transformers-primary-color: #fbbf24;
          --transformers-border-color: #fbbf24;
          --transformers-glow-color: rgba(251, 191, 36, 0.6);
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entities = this.config.entities || [];
    const title = this.config.title || 'SYSTEM STATUS';
    const message = this.config.message || 'ALL SYSTEMS OPERATIONAL';
    const showMessage = this.config.show_message !== false;
    const theme = this.config.theme || 'autobot';

    return html`
      <div class="card theme-${theme}">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="status-grid">
            ${entities.map(entityConfig => this._renderEntity(entityConfig))}
          </div>
          ${showMessage ? html`
            <div class="system-status">
              <div class="system-status-header">SYSTEM MESSAGE</div>
              <div class="system-message">> ${message}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  _renderEntity(entityConfig) {
    const entityId = typeof entityConfig === 'string' ? entityConfig : entityConfig.entity;
    const entity = this.hass.states[entityId];
    
    if (!entity) {
      return html`
        <div class="status-item">
          <span class="status-indicator status-error"></span>
          <span class="status-label">${entityId}</span>
          <span class="status-value">UNAVAILABLE</span>
        </div>
      `;
    }

    const name = entityConfig.name || entity.attributes.friendly_name || entityId;
    const statusClass = this._getStatusClass(entity);

    return html`
      <div class="status-item">
        <span class="status-indicator ${statusClass}"></span>
        <span class="status-label">${name}</span>
        <span class="status-value">${this._formatState(entity)}</span>
      </div>
    `;
  }

  _getStatusClass(entity) {
    const state = entity.state.toLowerCase();
    
    if (state === 'on' || state === 'open' || state === 'active' || state === 'home') {
      return 'status-ok';
    } else if (state === 'unavailable' || state === 'unknown' || state === 'problem') {
      return 'status-error';
    } else if (state === 'warning' || state === 'low') {
      return 'status-warning';
    }
    
    return 'status-ok';
  }

  _formatState(entity) {
    const state = entity.state;
    const unit = entity.attributes.unit_of_measurement || '';
    
    if (state === 'on' || state === 'off') {
      return state.toUpperCase();
    }
    
    return `${state}${unit}`.toUpperCase();
  }

  static getConfigElement() {
    return document.createElement('transformers-status-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM STATUS',
      entities: [],
      message: 'ALL SYSTEMS OPERATIONAL',
      show_message: true,
      theme: 'autobot'
    };
  }
}

customElements.define('transformers-status-card', TransformersStatusCard);
