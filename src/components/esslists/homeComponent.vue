<template>
  <div>
    <div class="first">
      <h1><img src="../../assets/winjit.png" alt="winjit logo" /> Timesheet</h1>
    </div>
    <div class="second">
      <nav>
        <the-navigation></the-navigation>
      </nav>
    </div>
    <div class="third">
      <main-content></main-content>
      <right-side-bar></right-side-bar>
    </div>
  </div>
</template>
<script>
import TheNavigation from "../../components/nav/theNavigation.vue";
import MainContent from "../../components/body/mainContent.vue";
import RightSideBar from "../../components/body/rightSideBar.vue";
export default {
  name: "HomeComponent",
  components: {
    TheNavigation,
    MainContent,
    RightSideBar,
  },
};
</script>

<style scoped>
img {
  width: -webkit-fill-available;
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
