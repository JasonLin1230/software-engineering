<template>
  <div id="app">
    <head-nav></head-nav>
    <router-view></router-view>
    <p id="copy">版权所有 © JasonLin. 2018</p>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
      'head-nav': Nav
    }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  color: white;
  text-decoration: none;
}
.right{
  float: right!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main_title{
  width: 100%;
  display: block;
}
#copy{
  width:100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
</style>
