<template>
  <ul>
    <li>Timesheet</li>
    <li>Leave Management</li>
    <li>Gatepass</li>
    <li>PunchSlip</li>
    <li>Posco</li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
  border: 1px solid black;
  padding: 0;
  width: 15rem;
}
li {
  margin: 10px 10px;
}
li:hover {
  background-color: antiquewhite;
}
@media only screen and (max-width: 480px) and (min-width: 320px) {
  ul {
    width: 6rem;
    height: 50%;
  }
}
@media only screen and (max-width: 745px) and (min-width: 480px) {
  ul {
    width: 6rem;
    height: 50%;
    margin-top: 0;
  }
}
@media only screen and (max-width: 1025px) and (min-width: 746px) {
  ul {
    width: 8rem;
    height: 50%;
    margin-top: 0;
  }
}
</style>
