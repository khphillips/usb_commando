<template>
  <div class="about dark">
    <h1>Help</h1>
    <h3>Linux</h3>
    <p>You may need to modify permissions on a Linux computer for the usb port. First find the path for the USB commando using the output window. Then run:</p>
    <code>chmod a+rw /dev/hidraw3</code>
    <p>Replace /dev/hidraw3 with the path in the display window. Also see the Linux suggestions here <a href="https://github.com/node-hid/node-hid#devices--hiddevices">node-hid</a></p>
  </div>
</template>

<script>

export default{
	props:[],
	data: function(){
		return {

		}
	},
	computed : {
		
	},
	mounted : function(){

	},
}

</script>
