const express = require('express');

module.exports = function(app) {
    var ledController = require('../controllers/ledController.js');

    app.route('/').get((_, res) => {
        res.json({online: true, availableCommands: [{discover: "/discover - discover all magic-home leds in the network", headers: "none", type: "GET"},
                                                    {leds: "/leds - get addresses of all discovered leds", headers: "none", type: "GET"}, 
                                                    {setPower: "/setPower - set the powerstate of discovered leds", headers: {address: "all / <ip>", state: "on / off"}, type: "POST"},
                                                    {setColor: "/setColor - set the color of discovered leds", headers: {address: "all / <ip>", r: "0-255", g: "0-255", b: "0-255"}, type: "POST"},
                                                    {setColorAndWW: "/setColorAndWW - set the color of discovered leds including warm-white", headers: {address: "all / <ip>", r: "0-255", g: "0-255", b: "0-255", ww: "0-255"}, type: "POST"}]});
    });

    app.route('/leds').get(ledController.getIPs);
    app.route('/discover').get(ledController.discover);
    app.route('/setPower').post(ledController.setPower);
    app.route('/setColor').post(ledController.setColor);
    app.route('/setColorAndWW').post(ledController.setColorAndWW);
};