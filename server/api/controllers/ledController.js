const {Control, Discovery} = require("magic-home"); 
let discovery = new Discovery();

let G_LIGHTS;
let G_CLIENTS;
let G_ADDRESSES;

exports.getIPs = function(req, res){
    var clients = G_CLIENTS;
    var addresses = [];
    if(typeof(clients) != 'undefined'){
        for(i = 0; i < clients.length; i++){
            addresses.push(clients[i].address);
        }
        res.json({addresses: addresses});
    }else{
        res.json({addresses: false});
       
    }
    
}

exports.discover = function(req, res){
    discovery.scan(500).then(devices =>{
        var clients = [];
        var dclients = discovery.clients;
        var addresses = [];
        G_LIGHTS = [];
        for(i = 0; i < dclients.length; i++){
            if(addresses.indexOf(dclients[i].address) == -1){
                addresses.push(dclients[i].address);
                clients.push(dclients[i]);
            }
        }
        for(i = 0; i < addresses.length; i++){
            G_LIGHTS.push(new Control(addresses[i]));
        }
        G_ADDRESSES = addresses;
        G_CLIENTS = clients;
        res.json({clients});
    });
}

exports.setPower = function(req, res){
    var lights = G_LIGHTS;
    if(typeof(lights) != 'undefined'){
        const {address, state} = req.body;
        if(address && state){
            if(state == "on" || state == "off"){
                var powerstate;
                if(state == "on"){
                    powerstate = true;
                }else{
                    powerstate = false;
                }
                if(address == "all"){
                    for(i = 0; i < lights.length; i++){
                        lights[i].setPower(powerstate);
                    }
                    res.json({success: `all leds turned ${state}`});
                }else{
                    for(i = 0; i < lights.length; i++){
                        if(lights[i]._address == address){
                            lights[i].setPower(powerstate);
                            res.json({success: `${address} turned ${state}`});
                        }
                        
                    }
                }
            }else{
                res.json({error: "invalid state (state == on || state == off)"});
            }
        }else{
            res.json({error: "address or state unspecified"});
        }
    }else{
        res.json({error: "run /discover first"});
    }
}

exports.setColor = function(req, res){
    var lights = G_LIGHTS;
    if(typeof(lights) != 'undefined'){
        const {address, r, g, b} = req.body;
        if(address && r && g && b){
            if(r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255){
                if(address == "all"){
                    for(i = 0; i < lights.length; i++){
                        lights[i].setColor(r, g, b, function response(){});
                    }
                    res.json({success: `all colors set to rgb ${r} ${g} ${b}`})
                }else{
                    for(i = 0; i < lights.length; i++){
                        if(lights[i]._address == address){
                            lights[i].setColor(r, g, b, function response(){});
                            res.json({success: `${address} set to rgb ${r} ${g} ${b}`});
                        }
                    }
                }
            }else{
                res.json({error: "color values out of range (0 - 255)"});
            }
        }else{
            res.json({error: "not all parameters provided: (address, r, g, b)"});
        }
    }else{
        res.json({error: "run /discover first"});
    }
}

exports.setColorAndWW = function(req, res){
    var lights = G_LIGHTS;
    if(typeof(lights) != 'undefined'){
        const {address, r, g, b, ww} = req.body;
        if(address && r && g && b && ww){
            if(r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255 && ww >= 0 && ww <= 255){
                if(address == "all"){
                    for(i = 0; i < lights.length; i++){
                        lights[i].setColorAndWarmWhite(r, g, b, ww, function response(){});
                    }
                    res.json({success: `all colors set to rgbww ${r} ${g} ${b} ${ww}`})
                }else{
                    for(i = 0; i < lights.length; i++){
                        if(lights[i]._address == address){
                            lights[i].setColorAndWarmWhite(r, g, b, ww, function response(){});
                            res.json({success: `${address} set to rgbww ${r} ${g} ${b} ${ww}`});
                        }
                    }
                }
            }else{
                res.json({error: "color values out of range (0 - 255)"});
            }
        }else{
            res.json({error: "not all parameters provided: (address, r, g, b, ww)"});
        }
    }else{
        res.json({error: "run /discover first"});
    }
}