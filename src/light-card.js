import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersLightCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .light-container {
          padding: 16px;
        }

        .light-status {
          text-align: center;
          margin-bottom: 20px;
        }

        .light-icon {
          font-size: 3em;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .light-icon.on {
          filter: drop-shadow(0 0 15px var(--transformers-accent-color));
          color: var(--transformers-accent-color);
        }

        .light-name {
          font-size: 1.1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .light-state {
          font-size: 0.9em;
          opacity: 0.8;
        }

        .light-controls {
          margin-top: 20px;
        }

        .toggle-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.3) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 1em;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
          transition: all 0.2s ease;
        }

        .toggle-button:hover {
          box-shadow: 0 0 15px var(--transformers-glow-color);
        }

        .toggle-button.on {
          background: linear-gradient(
            135deg,
            var(--transformers-border-color) 0%,
            var(--transformers-secondary-color) 100%
          );
        }

        .brightness-control {
          margin-top: 16px;
        }

        .brightness-label {
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }

        .brightness-slider {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          appearance: none;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
          border: 1px solid var(--transformers-border-color);
        }

        .brightness-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--transformers-border-color);
          cursor: pointer;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          box-shadow: 0 0 8px var(--transformers-glow-color);
        }

        .brightness-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--transformers-border-color);
          cursor: pointer;
          border: none;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          box-shadow: 0 0 8px var(--transformers-glow-color);
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
            <div class="card-header">LIGHT ERROR</div>
            <div class="light-container">
              <div class="light-status">UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || entityId;
    const isOn = entity.state === 'on';
    const brightness = entity.attributes.brightness || 0;
    const brightnessPercent = Math.round((brightness / 255) * 100);
    const supportsBrightness = entity.attributes.supported_features & 1;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${name}</div>
          <div class="light-container">
            <div class="light-status">
              <div class="light-icon ${isOn ? 'on' : ''}">💡</div>
              <div class="light-name">${name}</div>
              <div class="light-state">${isOn ? 'ONLINE' : 'OFFLINE'}</div>
            </div>
            <div class="light-controls">
              <button 
                class="toggle-button ${isOn ? 'on' : ''}"
                @click=${() => this._toggleLight()}
              >
                ${isOn ? 'DEACTIVATE' : 'ACTIVATE'}
              </button>
              ${isOn && supportsBrightness ? html`
                <div class="brightness-control">
                  <div class="brightness-label">
                    <span>BRIGHTNESS</span>
                    <span>${brightnessPercent}%</span>
                  </div>
                  <input 
                    type="range" 
                    class="brightness-slider"
                    min="0" 
                    max="100" 
                    .value=${brightnessPercent}
                    @input=${(e) => this._setBrightness(e.target.value)}
                  />
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _toggleLight() {
    this.hass.callService('light', 'toggle', {
      entity_id: this.config.entity
    });
  }

  _setBrightness(value) {
    const brightness = Math.round((value / 100) * 255);
    this.hass.callService('light', 'turn_on', {
      entity_id: this.config.entity,
      brightness: brightness
    });
  }

  static getStubConfig() {
    return {
      entity: '',
      name: ''
    };
  }
}

customElements.define('transformers-light-card', TransformersLightCard);
