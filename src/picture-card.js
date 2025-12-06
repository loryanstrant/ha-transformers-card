import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersPictureCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .picture-container {
          position: relative;
          overflow: hidden;
        }

        .picture-image {
          width: 100%;
          height: auto;
          display: block;
          filter: 
            contrast(1.2)
            brightness(0.9)
            sepia(0.1)
            hue-rotate(-10deg);
          border: 2px solid var(--transformers-border-color);
        }

        .picture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.1) 100%
          );
          pointer-events: none;
        }

        .picture-caption {
          margin-top: 12px;
          padding: 8px;
          background: rgba(0, 0, 0, 0.5);
          border-left: 3px solid var(--transformers-border-color);
          font-family: var(--transformers-font-family);
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .picture-timestamp {
          margin-top: 8px;
          font-size: 0.75em;
          opacity: 0.7;
          text-align: right;
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.config?.camera_refresh_interval) {
      this._startRefresh();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopRefresh();
  }

  _startRefresh() {
    this._stopRefresh();
    const interval = this.config.camera_refresh_interval * 1000;
    this._refreshInterval = setInterval(() => {
      this.requestUpdate();
    }, interval);
  }

  _stopRefresh() {
    if (this._refreshInterval) {
      clearInterval(this._refreshInterval);
      this._refreshInterval = null;
    }
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const title = this.config.title || 'VISUAL FEED';
    const caption = this.config.caption || '';
    const showTimestamp = this.config.show_timestamp || false;

    let imageUrl = '';
    if (this.config.entity) {
      const entity = this.hass.states[this.config.entity];
      if (entity && entity.attributes.entity_picture) {
        imageUrl = entity.attributes.entity_picture;
        // Add timestamp to force refresh
        if (this.config.camera_refresh_interval) {
          imageUrl += (imageUrl.includes('?') ? '&' : '?') + 't=' + Date.now();
        }
      }
    } else if (this.config.image) {
      imageUrl = this.config.image;
    }

    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${title}</div>
          <div class="picture-container">
            ${imageUrl ? html`
              <img class="picture-image" src="${imageUrl}" alt="${caption || title}" />
              <div class="picture-overlay"></div>
            ` : html`
              <div style="padding: 40px; text-align: center; opacity: 0.5;">
                NO IMAGE SOURCE
              </div>
            `}
          </div>
          ${caption ? html`
            <div class="picture-caption">> ${caption}</div>
          ` : ''}
          ${showTimestamp ? html`
            <div class="picture-timestamp">CAPTURED: ${timestamp}</div>
          ` : ''}
        </div>
      </div>
    `;
  }

  static getStubConfig() {
    return {
      title: 'VISUAL FEED',
      entity: '',
      image: '',
      caption: '',
      show_timestamp: false,
      camera_refresh_interval: 0
    };
  }
}

customElements.define('transformers-picture-card', TransformersPictureCard);
