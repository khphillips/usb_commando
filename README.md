# USB Commando
Requires nodejs and npm to be installed. 

Testing app for connecting to USB Commando. Reads the 3 analog outputs and display integer readins for each. 

http://www.exhibit-control.net/wordpress/products/inputs-sensors/customize-usb-input-hid/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run electron:build
```

Primary code is at:
https://github.com/khphillips/usb_commando/blob/master/src/views/Home.vue
https://github.com/khphillips/usb_commando/blob/master/src/plugins/usb_commando.js

Get's all USB commandos on the USB bus. This will return an object that contains all info related to each device, including the "path". Send one of these objects to the listen command and pass a callback function to process the streaming data. 
```
import USBCommando from '../plugins/usb_commando';
var commandos = USBCommando.getUSBCommandos();
USBCommando.listen(commandos[0], function(data){
    console.log(data); // an array of data from the commando. 
    //data[0] is the device id (1-3 commandos can be attached)
    //data[1-6] is the analog out pairs
    //data[7] is the digital outs (bit flags)
);

//also sends data... not tested yet. 
USBCommando.listen(commandos[0], [0, 1, 0, 0, 0, 0, 0, 0]);
//see commando documentation for byte sequence. 
```
