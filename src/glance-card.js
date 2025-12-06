import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersGlanceCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .glance-grid {
          display: grid;
          gap: 16px;
        }

        .glance-grid.columns-2 { grid-template-columns: repeat(2, 1fr); }
        .glance-grid.columns-3 { grid-template-columns: repeat(3, 1fr); }
        .glance-grid.columns-4 { grid-template-columns: repeat(4, 1fr); }
        .glance-grid.columns-5 { grid-template-columns: repeat(5, 1fr); }

        .glance-item {
          text-align: center;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.05) 100%
          );
          border: 1px solid var(--transformers-border-color);
          position: relative;
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .glance-item:hover {
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.2) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .glance-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: var(--transformers-accent-color);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .glance-icon {
          font-size: 1.8em;
          margin-bottom: 8px;
        }

        .glance-name {
          font-size: 0.75em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          opacity: 0.8;
        }

        .glance-state {
          font-size: 1.1em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          margin-top: 8px;
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'SYSTEM GLANCE';
    const entities = this.config.entities || [];
    const columns = Math.min(Math.max(this.config.columns || Math.min(entities.length, 4), 2), 5);

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="glance-grid columns-${columns}">
            ${entities.map(entityConfig => this._renderEntity(entityConfig))}
          </div>
        </div>
      </div>
    `;
  }

  _renderEntity(entityConfig) {
    const entityId = typeof entityConfig === 'string' ? entityConfig : entityConfig.entity;
    const entity = this.hass.states[entityId];
    
    if (!entity) {
      return html`
        <div class="glance-item">
          <div class="glance-state">N/A</div>
        </div>
      `;
    }

    const name = entityConfig.name || entity.attributes.friendly_name || entityId;
    const state = entity.state;
    const unit = entity.attributes.unit_of_measurement || '';
    const icon = entity.attributes.icon || this._getDefaultIcon(entityId);

    return html`
      <div class="glance-item" @click=${() => this._handleClick(entityId)}>
        ${icon ? html`<div class="glance-icon">${this._renderIcon(icon)}</div>` : ''}
        <div class="glance-state">${state}${unit}</div>
        ${this.config.show_name !== false ? html`<div class="glance-name">${name}</div>` : ''}
      </div>
    `;
  }

  _renderIcon(icon) {
    // Simple icon rendering - could be enhanced with icon libraries
    const iconMap = {
      'mdi:lightbulb': '💡',
      'mdi:thermometer': '🌡️',
      'mdi:water-percent': '💧',
      'mdi:motion-sensor': '🔍',
      'mdi:door': '🚪',
      'mdi:window': '🪟'
    };
    return iconMap[icon] || '⚡';
  }

  _getDefaultIcon(entityId) {
    if (entityId.startsWith('light.')) return 'mdi:lightbulb';
    if (entityId.startsWith('sensor.temperature')) return 'mdi:thermometer';
    if (entityId.startsWith('sensor.humidity')) return 'mdi:water-percent';
    if (entityId.startsWith('binary_sensor.motion')) return 'mdi:motion-sensor';
    return null;
  }

  _handleClick(entityId) {
    const event = new Event('hass-more-info', { bubbles: true, composed: true });
    event.detail = { entityId };
    this.dispatchEvent(event);
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM GLANCE',
      entities: [],
      columns: 4,
      show_name: true
    };
  }
}

customElements.define('transformers-glance-card', TransformersGlanceCard);
