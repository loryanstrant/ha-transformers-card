import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersSensorCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .sensor-display {
          text-align: center;
          padding: 20px;
        }

        .sensor-name {
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
          opacity: 0.9;
        }

        .sensor-value {
          font-size: 3em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 10px var(--transformers-glow-color);
          margin: 16px 0;
        }

        .sensor-unit {
          font-size: 1.2em;
          margin-left: 8px;
          opacity: 0.8;
        }

        .progress-container {
          margin-top: 20px;
          background: rgba(0, 0, 0, 0.4);
          height: 24px;
          border: 1px solid var(--transformers-border-color);
          position: relative;
          overflow: hidden;
          clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--transformers-border-color),
            var(--transformers-accent-color)
          );
          transition: width 0.3s ease;
          position: relative;
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entityId = this.config.entity;
    const entity = this.hass.states[entityId];
    
    if (!entity) {
      return html`
        <div class="card">
          <div class="card-content">
            <div class="card-header">SENSOR ERROR</div>
            <div class="sensor-display">
              <div class="sensor-value">UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || entityId;
    const value = parseFloat(entity.state) || 0;
    const unit = this.config.unit || entity.attributes.unit_of_measurement || '';
    const showGraph = this.config.show_graph !== false;
    const max = this.config.max || 100;
    const percentage = Math.min((value / max) * 100, 100);

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${name}</div>
          <div class="sensor-display">
            <div class="sensor-value">
              ${entity.state}
              <span class="sensor-unit">${unit}</span>
            </div>
            ${showGraph ? html`
              <div class="progress-container">
                <div class="progress-bar" style="width: ${percentage}%"></div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      unit: '',
      show_graph: true,
      max: 100
    };
  }
}

customElements.define('transformers-sensor-card', TransformersSensorCard);
