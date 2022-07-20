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
@media only screen and (max-width: 1025px) and (min-width: 746px) {
  .first {
    border: 2px solid black;
    margin: 5px 40px 0 0;
    width: 95%;
  }
  .second {
    width: 40rem;
  }
  .third {
    font-size: 10px;
  }
  h1 {
    font-size: 17px;
    margin: 14px;
  }
  img {
    width: 40px;
  }
}
@media only screen and (max-width: 745px) and (min-width: 480px) {
  .first {
    border: 2px solid black;
    margin: 5px 40px 0 0;
    width: 90%;
  }
  .second {
    width: 27rem;
  }
  .third {
    font-size: 7px;
  }
  h1 {
    font-size: 13px;
    margin: 10px;
  }
  img {
    width: 30px;
  }
}
@media only screen and (max-width: 480px) and (min-width: 320px) {
  .first {
    border: 2px solid black;
    margin: 5px 40px 0 0;
    width: 270px;
  }
  .second {
    width: 353px;
  }
  .third {
    font-size: 7px;
  }
  h1 {
    font-size: 8px;
    margin: 10px;
  }
  img {
    width: 20px;
  }
}
</style>
