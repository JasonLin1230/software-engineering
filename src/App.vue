<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Nav from './components/common/Nav.vue'
import Footer from './components/common/Footer.vue'
export default {
  name: 'App',
  components: {
      'my-nav': Nav,
      'my-footer': Footer
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
</style>
