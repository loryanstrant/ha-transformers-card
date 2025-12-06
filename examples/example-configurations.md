# Example Configurations

This directory contains example configurations for all Transformers card types.

## Complete Dashboard Example

```yaml
# Complete Transformers-themed dashboard
title: AUTOBOT COMMAND CENTER
views:
  - title: MAIN
    path: main
    cards:
      # Mission Briefing
      - type: custom:transformers-text-card
        title: MISSION BRIEFING
        content: |
          WELCOME TO AUTOBOT COMMAND CENTER
          
          ALL SYSTEMS ONLINE
          AWAITING ORDERS
          
          - OPTIMUS PRIME
        size: large
        align: center

      # System Status
      - type: custom:transformers-status-card
        title: SYSTEM STATUS
        entities:
          - entity: binary_sensor.front_door
            name: MAIN ENTRANCE
          - entity: binary_sensor.garage_door
            name: GARAGE
          - entity: binary_sensor.motion_entrance
            name: MOTION DETECT
          - entity: sensor.temperature_outside
            name: EXTERIOR TEMP
        message: ALL SYSTEMS OPERATIONAL
        
      # Climate Control
      - type: horizontal-stack
        cards:
          - type: custom:transformers-sensor-card
            entity: sensor.temperature_living_room
            name: AMBIENT TEMP
            show_graph: true
            max: 40
          - type: custom:transformers-sensor-card
            entity: sensor.humidity_living_room
            name: HUMIDITY
            show_graph: true
            max: 100

      # Control Panel
      - type: custom:transformers-button-card
        title: CONTROL PANEL
        columns: 3
        buttons:
          - entity: light.living_room
            name: LIVING AREA
            icon: 💡
            show_state: true
          - entity: light.kitchen
            name: GALLEY
            icon: 💡
            show_state: true
          - entity: light.bedroom
            name: QUARTERS
            icon: 💡
            show_state: true
          - entity: switch.coffee_maker
            name: BEVERAGE SYS
            icon: ☕
          - entity: script.movie_time
            name: ENTERTAINMENT
            icon: 🎬
          - entity: script.goodnight
            name: SHUTDOWN
            icon: 🌙

  - title: SECURITY
    path: security
    cards:
      # Security System
      - type: custom:transformers-alarm-card
        title: SECURITY PROTOCOL
        entity: alarm_control_panel.home
        show_keypad: true

      # Surveillance
      - type: custom:transformers-picture-card
        title: MAIN ENTRANCE
        entity: camera.front_door
        caption: SURVEILLANCE FEED ALPHA
        show_timestamp: true
        camera_refresh_interval: 5

      - type: custom:transformers-picture-card
        title: REAR ACCESS
        entity: camera.back_door
        caption: SURVEILLANCE FEED BETA
        show_timestamp: true
        camera_refresh_interval: 5

  - title: MONITORING
    path: monitoring
    cards:
      # System Time
      - type: custom:transformers-clock-card
        title: SYSTEM TIME
        format_24h: true
        show_seconds: true
        show_date: true

      # System Resources
      - type: horizontal-stack
        cards:
          - type: custom:transformers-gauge-card
            entity: sensor.processor_use
            name: CPU LOAD
            severity:
              yellow: 70
              red: 90
          - type: custom:transformers-gauge-card
            entity: sensor.memory_use_percent
            name: MEMORY
            severity:
              yellow: 80
              red: 95

      # Quick Glance
      - type: custom:transformers-glance-card
        title: SYSTEM OVERVIEW
        entities:
          - sensor.processor_temperature
          - sensor.disk_use_percent
          - binary_sensor.internet_connection
          - switch.backup_system
        columns: 4

      # Weather
      - type: custom:transformers-weather-card
        entity: weather.home
        name: ATMOSPHERIC CONDITIONS
        show_forecast: true
        forecast_days: 5
```

## Individual Card Examples

### Status Card with Themes

```yaml
# Autobot theme (red/blue - default)
type: custom:transformers-status-card
title: AUTOBOT STATUS
entities:
  - sensor.temperature
  - binary_sensor.motion
theme: autobot

# Decepticon theme (purple)
type: custom:transformers-status-card
title: DECEPTICON STATUS
entities:
  - sensor.temperature
  - binary_sensor.motion
theme: decepticon

# Warning theme (yellow)
type: custom:transformers-status-card
title: CAUTION STATUS
entities:
  - sensor.temperature
  - binary_sensor.motion
theme: yellow

# Error theme (red)
type: custom:transformers-status-card
title: ALERT STATUS
entities:
  - sensor.temperature
  - binary_sensor.motion
theme: red
```

### Button Card with Tap Actions

```yaml
type: custom:transformers-button-card
title: ADVANCED CONTROLS
columns: 2
buttons:
  # Navigate to view
  - name: SECURITY
    icon: 🔒
    tap_action:
      action: navigate
      navigation_path: /lovelace/security
  
  # Open more info
  - entity: light.living_room
    name: LIGHT INFO
    tap_action:
      action: more-info
  
  # Open URL
  - name: DOCS
    icon: 📚
    tap_action:
      action: url
      url_path: https://www.home-assistant.io
  
  # Call service
  - name: ANNOUNCE
    icon: 📢
    tap_action:
      action: call-service
      service: tts.google_say
      service_data:
        message: "Transformers, roll out!"
```

### Text Card with Dynamic Content

```yaml
type: custom:transformers-text-card
title: SECURITY STATUS
entity: alarm_control_panel.home
state_content:
  disarmed: |
    SECURITY SYSTEM: DISARMED
    ALL ZONES INACTIVE
    PERIMETER OPEN
  armed_away: |
    ⚠ SECURITY ACTIVE ⚠
    ALL ZONES ARMED
    PERIMETER SECURED
  armed_home: |
    SECURITY ACTIVE
    INTERIOR ZONES INACTIVE
    PERIMETER SECURED
  triggered: |
    🚨 ALARM TRIGGERED 🚨
    SECURITY BREACH DETECTED
    INITIATING PROTOCOLS
  default: |
    SYSTEM STATUS: UNKNOWN
    AWAITING INPUT
```

### Text Card with Templates

```yaml
type: custom:transformers-text-card
title: CLIMATE REPORT
entity: sensor.living_room_temperature
content: |
  LOCATION: {{friendly_name}}
  CURRENT TEMP: {{state}}{{unit}}
  STATUS: NOMINAL
  
  HUMIDITY: {{attribute.humidity}}%
  LAST UPDATE: {{attribute.last_changed}}
```

### Picture Card with Auto-Refresh

```yaml
type: custom:transformers-picture-card
title: LIVE SURVEILLANCE
entity: camera.front_door
caption: MAIN ENTRANCE - REAL TIME
show_timestamp: true
camera_refresh_interval: 3  # Refresh every 3 seconds
```

### Gauge Card with Multiple Severities

```yaml
type: horizontal-stack
cards:
  - type: custom:transformers-gauge-card
    entity: sensor.temperature_outside
    name: EXTERIOR
    min: -20
    max: 50
    decimals: 1
    severity:
      yellow: 30
      red: 40
  
  - type: custom:transformers-gauge-card
    entity: sensor.battery_level
    name: ENERGON
    min: 0
    max: 100
    decimals: 0
    severity:
      yellow: 30
      red: 15
```

## Automation Examples

Integrate with Home Assistant automations:

```yaml
# Automation to show alert on motion
automation:
  - alias: "Motion Alert on Dashboard"
    trigger:
      - platform: state
        entity_id: binary_sensor.motion_entrance
        to: 'on'
    action:
      - service: input_text.set_value
        target:
          entity_id: input_text.dashboard_message
        data:
          value: |
            ⚠ MOTION DETECTED ⚠
            LOCATION: MAIN ENTRANCE
            TIME: {{ now().strftime('%H:%M:%S') }}
            
            INITIATING SURVEILLANCE

# Use in text card
type: custom:transformers-text-card
title: SECURITY ALERTS
entity: input_text.dashboard_message
content: "{{state}}"
```

## Styling Examples

Custom theme integration:

```yaml
# In your theme
transformers-autobot:
  # Use default Autobot colors
  transformers-primary-color: '#e31e24'
  transformers-secondary-color: '#1e3a8a'
  transformers-accent-color: '#fbbf24'

transformers-decepticon:
  # Decepticon purple variant
  transformers-primary-color: '#7c3aed'
  transformers-secondary-color: '#4c1d95'
  transformers-accent-color: '#a78bfa'
  transformers-border-color: '#7c3aed'
  transformers-glow-color: 'rgba(124, 58, 237, 0.6)'
```

---

For more examples and detailed documentation, see the [README](../README.md).
