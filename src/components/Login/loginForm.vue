<template>
  <form @submit.prevent="loginForm">
    <div class="container">
      <label for="username">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        v-model.trim="username"
        autocomplete="off"
        required
      />

      <label for="password">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        v-model.trim="password"
        autocomplete="off"
        required
      />

      <button>Login</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      validate: false,
    };
  },
  methods: {
    loginForm() {
      if (this.username == "Akshay123" && this.password == "1234") {
        console.log(this.username, this.password);
        this.validate = false;
        this.$router.push({ path: "homeComponent" });
        console.log("Hello");
      } else {
        this.validate = true;
      }
    },
  },
};
</script>

<style scoped>
form {
  border: 3px solid #f1f1f1;
  margin: 100px 200px 100px 300px;
  width: 300px;
  padding: 50px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 30px;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}
</style>
