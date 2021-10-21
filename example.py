import requests
import json
from payloads import Light
import time


led = Light("192.168.1.45", "192.168.1.49:4040")

led.print_address()

led.state(1)




