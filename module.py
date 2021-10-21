import requests


class Light:
    def __init__(self, ledaddress, serveraddress):
        self.ledaddress = ledaddress
        self.serveraddress = serveraddress
        self.on = {
                "address": f"{self.ledaddress}",
                "state":"on"
                }

        self.off = {
                "address": f"{self.ledaddress}",
                "state":"off"
            }

    def return_packets(self):
        self.on = {
                "address": f"{self.ledaddress}",
                "state":"on"
                }

        self.off = {
                "address": f"{self.ledaddress}",
                "state":"off"
            }

        return self.on, self.off

    def print_address(self):
        print(self.ledaddress)

    def check_connection(self):
        r = requests.get(f"http://{self.serveraddress}")
      
    def setColor(self, r , g , b):            
        self.rgb = {
            "address": f"{self.ledaddress}",
            "r": f"{r}",
            "g": f"{g}",
            "b": f"{b}"
        }
        print(self.rgb)
        requests.post("http://192.168.1.49:4040/setColor",data=self.rgb)


    def state(self,state):
        if state == 0:
            requests.post("http://192.168.1.49:4040/setPower",data=self.off)

        if state == 1:
            requests.post("http://192.168.1.49:4040/setPower",data=self.on)

