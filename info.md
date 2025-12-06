# Transformers Cards

![Transformers Logo](https://img.shields.io/badge/Transformers-Cards-red?style=flat-square)

Transform your Home Assistant dashboard with cards inspired by the Transformers franchise and the iconic Teletraan-I computer system.

## Features

🤖 **Authentic Transformers Aesthetic** - Angular design with red/blue color schemes and tech panel styling  
📊 **Multiple Card Types** - Status, Sensor, Button, Text, and more  
⌨️ **Transformers Font** - Official Transformers Movie font included  
🎨 **Customizable Themes** - Autobot (red/blue) and Decepticon (purple) color schemes  
⚙️ **Fully Featured** - 11 different card types for all your needs  
⚡ **Lightweight** - Built with Lit for optimal performance

## Available Cards

### Status Card
Display multiple entity states with Transformers-style status indicators.

### Sensor Card  
Show individual sensor values with tech panel visualization.

### Button Card
Control entities with angular, tech-inspired buttons.

### Text Card
Display custom messages in Transformers terminal format.

### And 7 More!
Including Gauge, Clock, Glance, Light, Picture, Weather, and Alarm cards.

## Quick Start

After installation, add a card to your dashboard:

```yaml
type: custom:transformers-status-card
title: SYSTEM STATUS
entities:
  - sensor.temperature
  - binary_sensor.motion
message: ALL SYSTEMS OPERATIONAL
```

## Documentation

Full documentation and examples available in the [README](https://github.com/loryanstrant/ha-transformers-card).

---

*"More than meets the eye"*
