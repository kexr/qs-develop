<template>
  <div id="app" @focusout="filterHtmlTag">
    <RkHeader></RkHeader>
    <div class="center">
      <router-view />
    </div>
    <RkFooter></RkFooter>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    filterHtmlTag(ev){
      ev.target.innerHTML = ev.target.innerText;
    }
  }  
}
</script>

<style>
@import './assets/styles/reset.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #eff2f5;
  font-variant-caps: normal;
  font-size: 16px;
}
header,footer{
  height: 35px;
}
.center{
  flex: 1;
  overflow: auto;
}
</style>
