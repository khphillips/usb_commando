<template>
  <div class="home">
    <h1>
      OUTPUT
      <v-btn class="primary" @click="refresh">Refresh Devices<v-icon>fas fa-refresh</v-icon></v-btn>
    </h1>
    <v-container>
      <v-row dense>
        <v-col cols="8">
          <v-select label="Select USB Commando" dark outlined v-model="current_commando" :item-text="getCommandoLabel" return-object :items="commandos"></v-select>
        </v-col>
        <v-col cols="4">
          <v-switch v-model="offsetByteRange" label="Offset Byte Range"></v-switch>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row dense>
        <v-col v-for="(i, k) in outputs" cols="4" :key="k">
          <v-card dark class="device-card">
            <v-card-text>
              <div class="attr">
              Device ID : <strong>{{ device_id }} : {{ k }}</strong><br>
              <span v-if="!offsetByteRange">
                Byte Range : {{ k * 2 + 1 }} - {{ k * 2 + 2 }}
              </span>
              <span v-else>
                Byte Range : {{ k * 2 + 3 }} - {{ k * 2 + 4 }}
              </span>
              </div>
              <h2 class="output">{{ i }}</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <h4>USB Devices</h4>
    <v-container>
      <v-row dense>
        <v-col v-for="device in devices" cols="4" :key="device.path">
          <v-card dark class="device-card">
            <v-card-text>
              <div class="attr" v-for="(v, k) in device" :key="k">
              {{k}} : <strong>{{maybeHexValue(v)}}</strong>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import USBCommando from '../plugins/usb_commando';

export default {
  name: 'home',
  data : function(){
    return {
      devices : [],
      commandos : [],
      outputs : [null,null,null],
      current_commando : {},
      device_id : null,
      offsetByteRange : false,
    }
  },
  mounted: function(){
    this.refresh()
  },
  computed: {

  },
  methods : {
    refresh : function(){
      this.devices = USBCommando.getDevices();
      this.commandos = USBCommando.getUSBCommandos();
    },
    getCommandoLabel : function(c){
      return c.product + " : " + c.path
    },
    updateOutputs : function(data){
      if (!this.offsetByteRange){
        this.outputs = [
          data[1] * 256 + data[2],
          data[3] * 256 + data[4],
          data[5] * 256 + data[6]
        ]
      }else{
        data[3] * 256 + data[4],
        data[5] * 256 + data[6],
        data[7] * 256 + data[8]
      }
      //var d4 = data[7] * 256 + data[8];
      this.device_id = data[0];
    },
    maybeHexValue : function(n){
      if (!isNaN(parseFloat(n)) && isFinite(n)){
        return n.toString(16);
      }
      return n;
    }
  },
  components : {

  },
  watch : {
    'current_commando' : function(newV){
      USBCommando.listen(newV, this.updateOutputs);
    }
  }
}
</script>
