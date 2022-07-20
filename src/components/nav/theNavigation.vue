<template>
  <div class="flex">
    <div>
      <ul>
        <li><router-link to="/homeComponent">Home</router-link></li>
        <li>
          <router-link to="/homeComponent/timesheet">Timesheet</router-link>
        </li>
        <li>Leave Management</li>
        <li>Posco</li>
        <li>Form and Docs</li>
        <li>Paysquare</li>
        <!-- <li><router-link>Leave Management</router-link></li>
            <li><router-link>Posco</router-link></li>
            <li><router-link>Form and Docs</router-link></li>
            <li><router-link>Paysquare</router-link></li> -->
      </ul>
    </div>
    <div>
      <p>Akshay Nikam</p>
    </div>
    <div>
      <p><fa icon="fa-solid fa-gear"></fa></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex {
  display: flex;
  font-size: 20px;
  background-color: rgba(95, 90, 90, 0.39);
  justify-content: space-between;
}
div {
  border: 1px solid black;
  margin: 0 5px;
  padding: 0px;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
}
li {
  padding: 0 2px;
  margin-right: 10px;
  height: auto;
  word-wrap: break-word;
}
li:hover {
  background-color: rgb(201, 198, 193);
  border: 1px solid black;
  border-radius: 5px;
}
p {
  padding: 5px;
  margin: 10px;
}
@media only screen and (max-width: 1302px) and (min-width: 1025px) {
  .flex {
    font-size: 12px;
    width: 94%;
    justify-content: space-between;
  }
  li {
    margin-right: 7px;
  }
}
@media only screen and (max-width: 1025px) and (min-width: 746px) {
  .flex {
    font-size: 8px;
    width: 90%;
    justify-content: space-between;
  }
  li {
    margin-right: 5px;
  }
}
@media only screen and (max-width: 745px) and (min-width: 480px) {
  .flex {
    font-size: 6px;
    width: 86%;
    justify-content: space-between;
  }
  ul {
    margin: 8px 0 0 0;
  }
  li {
    margin-right: 3px;
  }
  p {
    padding: 0;
    margin: 7px;
    text-align: center;
  }
}
@media only screen and (max-width: 480px) and (min-width: 320px) {
  .flex {
    font-size: 5px;
    width: 84%;
    justify-content: space-between;
  }
  ul {
    margin: 6px 0 0 0;
  }
  li {
    margin-right: 2px;
  }
  p {
    padding: 0;
    margin: 5px;
    text-align: center;
  }
}
@media only screen and (max-width: 320px) {
}
</style>
