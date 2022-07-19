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

nav a {
  font-weight: bold;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #076df3;
}
img {
  width: 4rem;
}
.first {
  border: 2px solid black;
  margin: 10px 64px 0 0;
}
.second {
  margin-left: -25px;
}
.third {
  display: grid;
  grid: 100% /70% 30%;
}
h1 {
  margin: 20px 28px;
}
</style>
