import { LitElement, css } from 'lit';

// Base card styling inspired by Transformers and Teletraan-I
// Features angular design, tech panel aesthetic, red/blue color schemes
export const baseStyles = css`
  :host {
    --transformers-primary-color: #e31e24;
    --transformers-secondary-color: #1e3a8a;
    --transformers-accent-color: #fbbf24;
    --transformers-background-color: #0a0e27;
    --transformers-panel-color: #1a1f3a;
    --transformers-border-color: #e31e24;
    --transformers-text-color: #ffffff;
    --transformers-glow-color: rgba(227, 30, 36, 0.6);
    --transformers-font-family: 'Transformers Movie', 'Arial Black', sans-serif;
    --transformers-header-font: 'Transformers Movie', 'Arial Black', sans-serif;
    --transformers-grid-opacity: 0.15;
  }

  .card {
    background: linear-gradient(135deg, var(--transformers-background-color) 0%, #0f1632 100%);
    color: var(--transformers-text-color);
    border: 3px solid var(--transformers-border-color);
    border-left: 6px solid var(--transformers-border-color);
    box-shadow: 
      0 0 20px var(--transformers-glow-color),
      inset 0 0 30px rgba(227, 30, 36, 0.1),
      inset 4px 0 8px rgba(30, 58, 138, 0.3);
    padding: 20px;
    position: relative;
    overflow: hidden;
    clip-path: polygon(
      0 0,
      calc(100% - 12px) 0,
      100% 12px,
      100% 100%,
      12px 100%,
      0 calc(100% - 12px)
    );
  }

  /* Angular corner accents */
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(90deg, var(--transformers-border-color) 1px, transparent 1px),
      linear-gradient(0deg, var(--transformers-border-color) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: var(--transformers-grid-opacity);
    pointer-events: none;
    z-index: 1;
  }

  /* Tech panel effect */
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(30, 58, 138, 0.3),
      rgba(30, 58, 138, 0.2)
    );
    pointer-events: none;
    z-index: 1;
  }

  .card-content {
    position: relative;
    z-index: 2;
  }

  .card-header {
    font-family: var(--transformers-header-font);
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--transformers-border-color);
    font-weight: bold;
    text-shadow: 
      0 0 10px var(--transformers-glow-color),
      2px 2px 4px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    position: relative;
  }

  .card-header::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 8px solid var(--transformers-border-color);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    margin-right: 12px;
    filter: drop-shadow(0 0 4px var(--transformers-glow-color));
  }

  .card-header::after {
    content: '';
    position: absolute;
    right: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--transformers-accent-color),
      transparent
    );
  }

  .status-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 8px;
    position: relative;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }

  .status-indicator::before {
    content: '';
    position: absolute;
    inset: 0;
    background: currentColor;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .status-ok {
    color: #10b981;
    filter: drop-shadow(0 0 4px #10b981);
  }

  .status-warning {
    color: var(--transformers-accent-color);
    filter: drop-shadow(0 0 4px var(--transformers-accent-color));
  }

  .status-error {
    color: var(--transformers-primary-color);
    filter: drop-shadow(0 0 4px var(--transformers-primary-color));
  }

  /* Decepticon theme variant */
  .card.theme-decepticon {
    --transformers-primary-color: #7c3aed;
    --transformers-secondary-color: #4c1d95;
    --transformers-accent-color: #a78bfa;
    --transformers-border-color: #7c3aed;
    --transformers-glow-color: rgba(124, 58, 237, 0.6);
  }

  /* Autobot theme variant (default red/blue) */
  .card.theme-autobot {
    --transformers-primary-color: #e31e24;
    --transformers-secondary-color: #1e3a8a;
    --transformers-border-color: #e31e24;
    --transformers-glow-color: rgba(227, 30, 36, 0.6);
  }

  /* Icon styling */
  .transformers-icon {
    display: inline-block;
    filter: drop-shadow(0 0 2px var(--transformers-glow-color));
  }

  /* Blinking cursor for terminal effects */
  .blinking-cursor {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Tech panel divider */
  .tech-divider {
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--transformers-border-color),
      var(--transformers-accent-color),
      var(--transformers-border-color),
      transparent
    );
    margin: 16px 0;
    position: relative;
  }

  .tech-divider::before,
  .tech-divider::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--transformers-accent-color);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    top: -2px;
  }

  .tech-divider::before {
    left: 0;
  }

  .tech-divider::after {
    right: 0;
  }
`;

export class TransformersBaseCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  setConfig(config) {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this.config = config;
  }

  getCardSize() {
    return 3;
  }
}
