import requests
import json
from module import Light
import time


led = Light("0.0.0.0", "192.168.1.49:4040")
led.discover()



