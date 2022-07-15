<template>
  <div class="flex">
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/timesheet">Timesheet</router-link></li>
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
}
div {
  border: 1px solid black;
  margin: 0 5px;
  padding: 0px;
  height: 50px;
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
</style>
