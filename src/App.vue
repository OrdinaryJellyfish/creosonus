<template>
  <div>
    <button @click="playNoise">PLAY ME</button>
  </div>
</template>

<script>
import Wad from "web-audio-daw";

export default {
  name: "App",
  methods: {
    playNoise() {
      let wad = new Wad({ source: "sawtooth" });

      wad.play();
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
