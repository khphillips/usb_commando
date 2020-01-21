var HID = require('node-hid');
//HID.setDriverType('libusb');

export default {
	current_commando : null,
	init(){
		
	},
	setDevice(usb_commando){
		if (this.current_commando != null){
			this.current_device.close();
		}
		this.current_device = new HID.HID( usb_commando.path );
	},
	getDevices(){
		this.init();
		return HID.devices();
	},
	getUSBCommandos(){
		var commandos = [];
		var devices = this.getDevices();
		for (var i = 0; i < devices.length; i++){
			if (devices[i].product == 'USB Commando'){
				commandos.push(devices[i]);
			}
		}
		return commandos;
	},
	listen(usb_commando, callback){
		this.setDevice(usb_commando);
		this.current_device.on("data", function(data) {
			callback(data);
			console.log("#" + data[0], data[1] * 256 + data[2], data[3] * 256 + data[4], data[5] * 256 + data[6], data[7] * 256 + data[8], data[9])
		});
	},
	send(usb_commando, data){
		this.setDevice(usb_commando);
		this.current_device.write(data); //[0, d, i, 0, 0, 0, 0, 0]
	}
}







