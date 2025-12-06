import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersClockCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .clock-display {
          text-align: center;
          padding: 24px;
        }

        .time-display {
          font-size: 3.5em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 15px var(--transformers-glow-color);
          letter-spacing: 4px;
          margin: 16px 0;
        }

        .date-display {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 12px;
          opacity: 0.9;
        }

        .timezone-display {
          font-size: 0.9em;
          margin-top: 8px;
          opacity: 0.7;
        }

        .time-separator {
          animation: blink 1s infinite;
        }
      `,
    ];
  }

  constructor() {
    super();
    this._time = new Date();
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateTime();
    this._interval = setInterval(() => this._updateTime(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  _updateTime() {
    this._time = new Date();
    this.requestUpdate();
  }

  render() {
    if (!this.config) {
      return html``;
    }

    const title = this.config.title || 'SYSTEM TIME';
    const format24h = this.config.format_24h !== false;
    const showSeconds = this.config.show_seconds !== false;
    const showDate = this.config.show_date !== false;
    const showTimezone = this.config.show_timezone || false;

    const hours = format24h ? 
      String(this._time.getHours()).padStart(2, '0') : 
      String(this._time.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(this._time.getMinutes()).padStart(2, '0');
    const seconds = String(this._time.getSeconds()).padStart(2, '0');
    const ampm = format24h ? '' : (this._time.getHours() >= 12 ? ' PM' : ' AM');

    const dateStr = this._time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase();

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="clock-display">
            <div class="time-display">
              ${hours}<span class="time-separator">:</span>${minutes}${showSeconds ? html`<span class="time-separator">:</span>${seconds}` : ''}${ampm}
            </div>
            ${showDate ? html`<div class="date-display">${dateStr}</div>` : ''}
            ${showTimezone ? html`<div class="timezone-display">${timezone}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  static getStubConfig() {
    return {
      title: 'SYSTEM TIME',
      format_24h: true,
      show_seconds: true,
      show_date: true,
      show_timezone: false
    };
  }
}

customElements.define('transformers-clock-card', TransformersClockCard);
