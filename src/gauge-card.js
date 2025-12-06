import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersGaugeCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .gauge-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .gauge-svg {
          width: 200px;
          height: 200px;
        }

        .gauge-background {
          fill: none;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 12;
        }

        .gauge-progress {
          fill: none;
          stroke: var(--transformers-border-color);
          stroke-width: 12;
          stroke-linecap: round;
          filter: drop-shadow(0 0 8px var(--transformers-glow-color));
          transition: stroke-dashoffset 0.5s ease;
        }

        .gauge-progress.severity-yellow {
          stroke: var(--transformers-accent-color);
          filter: drop-shadow(0 0 8px var(--transformers-accent-color));
        }

        .gauge-progress.severity-red {
          stroke: #dc2626;
          filter: drop-shadow(0 0 8px #dc2626);
        }

        .gauge-value {
          font-size: 2.5em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 10px var(--transformers-glow-color);
          margin-top: 16px;
        }

        .gauge-unit {
          font-size: 0.4em;
          margin-left: 4px;
        }

        .gauge-name {
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 8px;
          opacity: 0.9;
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
            <div class="card-header">GAUGE ERROR</div>
            <div class="gauge-container">
              <div class="gauge-value">N/A</div>
            </div>
          </div>
        </div>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || entityId;
    const value = parseFloat(entity.state) || 0;
    const unit = this.config.unit || entity.attributes.unit_of_measurement || '';
    const min = this.config.min || 0;
    const max = this.config.max || 100;
    const decimals = this.config.decimals !== undefined ? this.config.decimals : 1;
    
    const gaugeRadius = 80;
    const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);
    const circumference = 2 * Math.PI * gaugeRadius;
    const strokeDashoffset = circumference * (1 - percentage);

    let severityClass = '';
    if (this.config.severity) {
      if (this.config.severity.red && value >= this.config.severity.red) {
        severityClass = 'severity-red';
      } else if (this.config.severity.yellow && value >= this.config.severity.yellow) {
        severityClass = 'severity-yellow';
      }
    }

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${name}</div>
          <div class="gauge-container">
            <svg class="gauge-svg" viewBox="0 0 200 200">
              <circle
                class="gauge-background"
                cx="100"
                cy="100"
                r="${gaugeRadius}"
              />
              <circle
                class="gauge-progress ${severityClass}"
                cx="100"
                cy="100"
                r="${gaugeRadius}"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${strokeDashoffset}"
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div class="gauge-value">
              ${value.toFixed(decimals)}
              <span class="gauge-unit">${unit}</span>
            </div>
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
      min: 0,
      max: 100,
      decimals: 1,
      severity: {}
    };
  }
}

customElements.define('transformers-gauge-card', TransformersGaugeCard);
