// Transformers Cards for Home Assistant
// Inspired by Transformers and Teletraan-I computer systems

import './status-card.js';
import './sensor-card.js';
import './button-card.js';
import './text-card.js';
import './gauge-card.js';
import './clock-card.js';
import './glance-card.js';
import './light-card.js';
import './picture-card.js';
import './weather-card.js';
import './alarm-card.js';

// Register cards with Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'transformers-status-card',
  name: 'Transformers Status Card',
  description: 'Display system status in Transformers style',
  preview: true,
});
window.customCards.push({
  type: 'transformers-sensor-card',
  name: 'Transformers Sensor Card',
  description: 'Display sensor data with Transformers aesthetics',
  preview: true,
});
window.customCards.push({
  type: 'transformers-button-card',
  name: 'Transformers Button Card',
  description: 'Control entities with Transformers-style buttons',
  preview: true,
});
window.customCards.push({
  type: 'transformers-text-card',
  name: 'Transformers Text Card',
  description: 'Display text messages in Transformers format',
  preview: true,
});
window.customCards.push({
  type: 'transformers-gauge-card',
  name: 'Transformers Gauge Card',
  description: 'Display gauge visualization for numeric sensors',
  preview: true,
});
window.customCards.push({
  type: 'transformers-clock-card',
  name: 'Transformers Clock Card',
  description: 'Display current time in Transformers format',
  preview: true,
});
window.customCards.push({
  type: 'transformers-glance-card',
  name: 'Transformers Glance Card',
  description: 'Compact multi-entity overview in Transformers style',
  preview: true,
});
window.customCards.push({
  type: 'transformers-light-card',
  name: 'Transformers Light Card',
  description: 'Control lights with Transformers-style interface',
  preview: true,
});
window.customCards.push({
  type: 'transformers-picture-card',
  name: 'Transformers Picture Card',
  description: 'Display images and camera feeds in Transformers style',
  preview: true,
});
window.customCards.push({
  type: 'transformers-weather-card',
  name: 'Transformers Weather Card',
  description: 'Display weather information in Transformers format',
  preview: true,
});
window.customCards.push({
  type: 'transformers-alarm-card',
  name: 'Transformers Alarm Card',
  description: 'Control alarm systems with Transformers-style keypad',
  preview: true,
});

console.info(
  '%c TRANSFORMERS CARDS %c v1.0.0 ',
  'color: #e31e24; background: #000; font-weight: bold;',
  'color: #000; background: #e31e24; font-weight: bold;'
);
console.info('More than meets the eye - Transformers');
