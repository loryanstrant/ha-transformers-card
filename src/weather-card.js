import { html, css } from 'lit';
import { TransformersBaseCard, baseStyles } from './base-card.js';

class TransformersWeatherCard extends TransformersBaseCard {
  static get styles() {
    return [
      baseStyles,
      css`
        .weather-container {
          padding: 12px;
        }

        .current-weather {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(227, 30, 36, 0.1) 0%,
            rgba(30, 58, 138, 0.05) 100%
          );
          border-left: 3px solid var(--transformers-border-color);
          margin-bottom: 16px;
        }

        .weather-icon {
          font-size: 3em;
        }

        .weather-info {
          flex: 1;
          margin-left: 20px;
        }

        .weather-temp {
          font-size: 2.5em;
          font-weight: bold;
          font-family: var(--transformers-font-family);
          text-shadow: 0 0 10px var(--transformers-glow-color);
        }

        .weather-condition {
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          font-size: 0.9em;
        }

        .weather-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .weather-detail {
          padding: 8px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--transformers-secondary-color);
          font-size: 0.85em;
        }

        .detail-label {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.8em;
          opacity: 0.8;
          margin-bottom: 4px;
        }

        .detail-value {
          font-family: var(--transformers-font-family);
          font-weight: bold;
        }

        .forecast-container {
          margin-top: 16px;
        }

        .forecast-title {
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--transformers-border-color);
        }

        .forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 8px;
        }

        .forecast-day {
          text-align: center;
          padding: 12px 8px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--transformers-secondary-color);
          clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
        }

        .forecast-date {
          font-size: 0.75em;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .forecast-icon {
          font-size: 1.5em;
          margin: 4px 0;
        }

        .forecast-temp {
          font-size: 0.85em;
          font-family: var(--transformers-font-family);
          margin-top: 4px;
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
            <div class="card-header">WEATHER ERROR</div>
            <div class="weather-container">UNAVAILABLE</div>
          </div>
        </div>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || 'WEATHER';
    const showForecast = this.config.show_forecast !== false;
    const forecastDays = this.config.forecast_days || 5;

    return html`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${name}</div>
          <div class="weather-container">
            ${this._renderCurrentWeather(entity)}
            ${showForecast ? this._renderForecast(entity, forecastDays) : ''}
          </div>
        </div>
      </div>
    `;
  }

  _renderCurrentWeather(entity) {
    const temp = entity.attributes.temperature;
    const tempUnit = this.hass.config.unit_system.temperature;
    const condition = entity.state;
    const humidity = entity.attributes.humidity;
    const pressure = entity.attributes.pressure;
    const windSpeed = entity.attributes.wind_speed;
    const windBearing = entity.attributes.wind_bearing;

    return html`
      <div class="current-weather">
        <div class="weather-icon">${this._getWeatherIcon(condition)}</div>
        <div class="weather-info">
          <div class="weather-temp">${temp}°${tempUnit}</div>
          <div class="weather-condition">${condition}</div>
        </div>
      </div>
      <div class="weather-details">
        ${humidity !== undefined ? html`
          <div class="weather-detail">
            <div class="detail-label">HUMIDITY</div>
            <div class="detail-value">${humidity}%</div>
          </div>
        ` : ''}
        ${pressure !== undefined ? html`
          <div class="weather-detail">
            <div class="detail-label">PRESSURE</div>
            <div class="detail-value">${pressure} hPa</div>
          </div>
        ` : ''}
        ${windSpeed !== undefined ? html`
          <div class="weather-detail">
            <div class="detail-label">WIND SPEED</div>
            <div class="detail-value">${windSpeed} ${this.hass.config.unit_system.wind_speed}</div>
          </div>
        ` : ''}
        ${windBearing !== undefined ? html`
          <div class="weather-detail">
            <div class="detail-label">WIND DIR</div>
            <div class="detail-value">${this._getWindDirection(windBearing)}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  _renderForecast(entity, days) {
    const forecast = entity.attributes.forecast || [];
    const limitedForecast = forecast.slice(0, days);

    if (limitedForecast.length === 0) {
      return html``;
    }

    return html`
      <div class="forecast-container">
        <div class="forecast-title">FORECAST</div>
        <div class="forecast-grid">
          ${limitedForecast.map(day => this._renderForecastDay(day))}
        </div>
      </div>
    `;
  }

  _renderForecastDay(day) {
    const date = new Date(day.datetime);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const tempUnit = this.hass.config.unit_system.temperature;

    return html`
      <div class="forecast-day">
        <div class="forecast-date">${dayName}</div>
        <div class="forecast-icon">${this._getWeatherIcon(day.condition)}</div>
        <div class="forecast-temp">
          ${day.temperature}°${tempUnit}
        </div>
      </div>
    `;
  }

  _getWeatherIcon(condition) {
    const icons = {
      'clear-night': '🌙',
      'cloudy': '☁️',
      'fog': '🌫️',
      'hail': '🧊',
      'lightning': '⚡',
      'lightning-rainy': '⛈️',
      'partlycloudy': '⛅',
      'pouring': '🌧️',
      'rainy': '🌦️',
      'snowy': '❄️',
      'snowy-rainy': '🌨️',
      'sunny': '☀️',
      'windy': '💨',
      'windy-variant': '🌬️',
      'exceptional': '⚠️'
    };
    return icons[condition] || '🌡️';
  }

  _getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const degreesPerDirection = 45;
    const numDirections = 8;
    const index = Math.round(((degrees % 360) / degreesPerDirection)) % numDirections;
    return directions[index];
  }

  static getStubConfig() {
    return {
      entity: '',
      name: '',
      show_forecast: true,
      forecast_days: 5
    };
  }
}

customElements.define('transformers-weather-card', TransformersWeatherCard);
