# MAGIC HOME API

Current Progress: 

Discover and connect automatically to magic-home controllers.
Turn all or individual controllers on and off.
Send RGB and RGBWW values to all or individual controllers.

---

Control all magic-home type controllers in the home network via an api.

Uses the node.js module [node-magichome](https://github.com/jangxx/node-magichome) to send the correct packets over the network. 

node-magichome was build by reverse engineering the magichome wifi app.

---

#### Requirements:

node.js

---

#### Usage:
To start the api enter: 
```javascript
npm run start
```
This will start the api on localhost:4040. 
All the available commands are listed when no path is given.

---

#### Commands:
(headers are send as x-www-form-urlencoded within the body)

- <b>"/"</b>: Test if the API is running and list all available commands with their parameters
- <b>"/discover"</b>: discover all magic-home leds in the network
    - headers: none 
    - type: GET
- <b>"/leds"</b>: get addresses of all discovered leds
    - headers: none 
    - type: GET
- <b>"/setPower"</b>: set the powerstate of discovered leds
    - headers:
        - address: all / ip (eg. 192.168.0.20)
        - state: on / off 
    - type: POST
- <b>"/setColor"</b>: set the color of discovered leds
    - headers:
        - address: all / ip (eg. 192.168.0.20)
        - r: 0-255
        - g: 0-255
        - b: 0-255
    - type: POST
- <b>"/setColorAndWW"</b>: set the color of discovered leds including warm white
    - headers:
        - address: all / ip (eg. 192.168.0.20)
        - r: 0-255
        - g: 0-255
        - b: 0-255
        - ww: 0-255 
    - type: POST

---

### Example Controllers:

1. Wifi RGB (with IR): [Amazon](https://www.amazon.de/WiFi-Controller-RGB-LED-Lichtleisten-RF-Controller-kompatibel-Assistant-Android/dp/B083V5559G/ref=sr_1_2_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=magic+home+wifi&qid=1604690644&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTjNXU1ZBVjRBOEdSJmVuY3J5cHRlZElkPUEwMjUyMDg5MVZMOEM5TTI0WTQwTyZlbmNyeXB0ZWRBZElkPUEwMzY5MTU3MkxTS083TDg2SktCRSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)

2. Wifi RGB (without IR): [Amazon](https://www.amazon.de/Controller-Sprachsteuerung-LED-Streifenlichter-dynamische-Kostenlose/dp/B07GS1DM21/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=magic+home+wifi&qid=1604691115&sr=8-7)

2. Wifi RGBW (with IR): [Amazon](https://www.amazon.de/Kontroller-Fernbedienung-Steuerung-Controller-Kompatibel/dp/B083V571VZ/ref=sr_1_1_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=magic+home+wifi+rgbw&qid=1604690701&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySEtTVlJaOTBRMTNSJmVuY3J5cHRlZElkPUEwNDk4ODY3R1RVSUM3SlUwNE1ZJmVuY3J5cHRlZEFkSWQ9QTA1MjE4MzAzUlpLN0RSWVU2OU5VJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)