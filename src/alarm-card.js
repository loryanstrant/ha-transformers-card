import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersAlarmCard extends TransformersBaseCard {
  constructor() {
    super();
    this._code = '';
  }

  static get styles() {
    return [
      baseStyles,
      css`
        .alarm-container {
          padding: 16px;
        }

        .alarm-status {
          text-align: center;
          padding: 20px;
          margin-bottom: 20px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.2) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          border: 2px solid var(--transformers-border-color);
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }

        .alarm-status.armed {
          background: linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.3) 0%,
            rgba(153, 27, 27, 0.2) 100%
          );
          border-color: #dc2626;
        }

        .alarm-status.pending {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.3) 0%,
            rgba(217, 119, 6, 0.2) 100%
          );
          border-color: #fbbf24;
        }

        .alarm-status.triggered {
          background: linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.5) 0%,
            rgba(153, 27, 27, 0.3) 100%
          );
          border-color: #dc2626;
          animation: alarm-flash 1s infinite;
        }

        @keyframes alarm-flash {
          0%, 50% { opacity: 1; }
          25%, 75% { opacity: 0.5; }
        }

        .alarm-state {
          font-size: 2em;
          font-weight: bold;
          font-family: var(--transformers-header-font);
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .code-display {
          margin: 16px 0;
          padding: 12px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid var(--transformers-border-color);
          text-align: center;
          font-family: var(--transformers-font-family);
          font-size: 1.5em;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 16px;
        }

        .key {
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.2) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          border: 2px solid var(--transformers-border-color);
          color: var(--transformers-text-color);
          font-family: var(--transformers-font-family);
          font-size: 1.3em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
        }

        .key:hover {
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.4) 0%,
            rgba(30, 58, 138, 0.2) 100%
          );
          box-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .key:active {
          transform: scale(0.95);
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 16px;
        }

        .action-button {
          padding: 14px;
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
          cursor: pointer;
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
          transition: all 0.2s ease;
        }

        .action-button:hover {
          box-shadow: 0 0 15px var(--transformers-glow-color);
        }

        .action-button.arm {
          background: linear-gradient(
            135deg,
            rgba(220, 38, 38, 0.4) 0%,
            rgba(153, 27, 27, 0.3) 100%
          );
          border-color: #dc2626;
        }

        .action-button.disarm {
          background: linear-gradient(
            135deg,
            rgba(16, 185, 129, 0.3) 0%,
            rgba(5, 150, 105, 0.2) 100%
          );
          border-color: #10b981;
        }
      `,
    ];
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'SECURITY SYSTEM';
    const entityId = this.config.entity;
    const entity = this.hass.states[entityId];
    const showKeypad = this.config.show_keypad !== false;

    if (!entity) {
      return html`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${title}</div>
            <div class="alarm-container">
              <div class="alarm-status">
                <div class="alarm-state">UNAVAILABLE</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    const state = entity.state;
    const stateClass = this._getStateClass(state);

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="alarm-container">
            <div class="alarm-status ${stateClass}">
              <div class="alarm-state">${this._formatState(state)}</div>
            </div>
            
            ${showKeypad ? html`
              <div class="code-display">
                ${this._code ? '•'.repeat(this._code.length) : 'ENTER CODE'}
              </div>
              
              <div class="keypad">
                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 0, 'OK'].map(key => html`
                  <button class="key" @click=${() => this._handleKeyPress(key)}>
                    ${key}
                  </button>
                `)}
              </div>
            ` : ''}

            <div class="action-buttons">
              ${state === 'disarmed' ? html`
                <button class="action-button arm" @click=${() => this._armAway()}>
                  ARM AWAY
                </button>
                <button class="action-button arm" @click=${() => this._armHome()}>
                  ARM HOME
                </button>
              ` : html`
                <button class="action-button disarm" @click=${() => this._disarm()}>
                  DISARM
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _getStateClass(state) {
    if (state === 'triggered') return 'triggered';
    if (state.includes('pending') || state.includes('arming')) return 'pending';
    if (state.includes('armed')) return 'armed';
    return '';
  }

  _formatState(state) {
    return state.replace(/_/g, ' ').toUpperCase();
  }

  _handleKeyPress(key) {
    if (key === 'CLR') {
      this._code = '';
    } else if (key === 'OK') {
      // Code entered, ready for action
      this.requestUpdate();
    } else {
      this._code += key.toString();
    }
    this.requestUpdate();
  }

  _armAway() {
    this.hass.callService('alarm_control_panel', 'alarm_arm_away', {
      entity_id: this.config.entity,
      code: this._code || undefined
    });
    this._code = '';
    this.requestUpdate();
  }

  _armHome() {
    this.hass.callService('alarm_control_panel', 'alarm_arm_home', {
      entity_id: this.config.entity,
      code: this._code || undefined
    });
    this._code = '';
    this.requestUpdate();
  }

  _disarm() {
    this.hass.callService('alarm_control_panel', 'alarm_disarm', {
      entity_id: this.config.entity,
      code: this._code || undefined
    });
    this._code = '';
    this.requestUpdate();
  }

  static getStubConfig() {
    return {
      title: 'SECURITY SYSTEM',
      entity: '',
      show_keypad: true
    };
  }
}

customElements.define('transformers-alarm-card', TransformersAlarmCard);
