<template>
  <v-app dark id="inspire" class="text3--text">
    <v-app-bar dense app clipped-right class="primary text3--text" dark>
      <v-toolbar-title>ECE - USB Commando</v-toolbar-title>
      <v-spacer />
      <v-btn small dark class="primary" :to="{ name: 'home'}">Output</v-btn>
      <v-btn small dark class="primary darken-1" :to="{ name: 'help'}">Help</v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="primary fill-height d-flex align-start" fluid>
        <router-view class="text1--text"></router-view>
      </v-container>
    </v-content>
  </v-app>

  
</template>

<script>


export default {
  props: {

  },
  data: () => ({

  }),
  created () {

  },
  components : {

  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto+Slab&display=swap');
body .v-application{
  font-family: 'Nunito Sans', serif;
  font-size: 80%;
  letter-spacing: .05em;
  line-height: 1.5em;
}
body h1,
body h2,
body h3,
body h4,
body h5,
body h6{
  line-height: 1.5em;
  margin : 2em 0 .25em;
}
body h1,body h4{
  text-transform: uppercase;
  letter-spacing: .14em
}
body .v-application code {
    background-color: #16130e;
    color: #cdc7bb;
    padding:10px;
}
body .v-application .device-card {
  background-color: #16130e;
  color: #ffffff;
}
body .v-application .attr{
  display:block;
  width:100%;
  font-size:.7em;
}
body .v-application .dark a{
  color: #9999ff;
}
body h2.output{
  font-size: 3.5em;
  margin-top: 0;
}
body .v-application .theme--light.v-label{
  color: #c5bcab 
}
</style>
