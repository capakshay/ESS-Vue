<template>
  <router-view></router-view>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 164px;
}

html {
  font-family: sans-serif;
}
body {
  margin: 0;
  background-color: #f8f8f8;
}

nav {
  padding: 20px;
}
a {
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #076df3;
}
@media only screen and (max-width: 480px) and (min-width: 320px) {
  #app {
    margin: 0px 50px;
  }
}
@media only screen and (max-width: 745px) and (min-width: 480px) {
  #app {
    margin: 0px 100px;
  }
}
</style>
