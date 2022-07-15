<template>
  <div class="main">
    <form @submit.prevent="formData">
      <div class="grid">
        <label for="name" class="colspan-2">Employee</label>
        <div class="colspan-10">
          <input
            type="text"
            placeholder="Akshay Nikam"
            id="name"
            v-model="form.name"
            readonly
            autocomplete="off"
          />
        </div>
      </div>
      <div class="grid">
        <label for="project" class="colspan-2">Project</label>
        <div class="colspan-10">
          <select id="project" v-model="form.project">
            <option selected>---Select---</option>
            <option>TeleForg</option>
            <option>Art</option>
            <option>TelJoy</option>
          </select>
        </div>
      </div>
      <div class="grid">
        <label for="activity" class="colspan-2">Activity</label>
        <div class="colspan-10">
          <select id="activity" v-model="form.activity">
            <option selected>---Select---</option>
            <option>Coding & Implementation</option>
            <option>Client Interaction</option>
            <option>Daily StandUp Meeting</option>
            <option>Documentation</option>
            <option>Research & Development</option>
          </select>
        </div>
      </div>
      <div class="grid">
        <label for="date" class="colspan-2">Date</label>
        <div class="colspan-10">
          <input
            type="date"
            placeholder=""
            id="date"
            autocomplete="off"
            v-model="form.date"
          />
        </div>
      </div>
      <div class="grid">
        <label for="timeSpent" class="colspan-2">TimeSpent</label>
        <div class="sub-grid">
          <div class="sub-grid2">
            <label for="">Hrs</label>
            <input type="number" v-model="form.timeSpent.hrs" />
          </div>
          <div class="sub-grid2">
            <label for="">Min</label>
            <input type="number" v-model="form.timeSpent.min" />
          </div>
        </div>
      </div>
      <div class="grid">
        <label for="description" class="colspan-2">Description</label>
        <div class="colspan-10">
          <textarea
            id="description"
            type="textarea"
            v-model="form.description"
          ></textarea>
        </div>
      </div>

      <div class="grid">
        <label for="description" class="colspan-2"></label>
        <div class="colspan-10">
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    </form>
  </div>
  <show-record v-bind="this.data" v-model="this.send"></show-record>
</template>

<script>
import ShowRecord from "../body/showRecord.vue";
export default {
  components: {
    ShowRecord,
  },
  data() {
    return {
      data: {},
      send: false,
      form: {
        name: "Akshay Nikam",
        project: "",
        activity: "",
        date: "",
        timeSpent: {
          hrs: "",
          min: "",
        },
        description: "",
      },
    };
  },
  methods: {
    formData() {
      this.data = this.form;
      this.send = true;
      this.form = {
        name: "Akshay Nikam",
        project: "",
        activity: "",
        date: "",
        timeSpent: {
          hrs: "",
          min: "",
        },
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.main {
  border: 1px solid black;
}
.grid {
  display: grid;
  grid: 100% / 20% 80%;
  padding: 4px 10px 4px 4px;
}
.sub-grid {
  display: grid;
  grid: 100%/50% 50%;
  padding: 0;
}
#name {
  background-color: rgba(128, 128, 128, 0.486);
}
label {
  font-weight: bold;
  padding: 6px;
}
input {
  border: 1px solid black;
  padding: 10px;
  width: 50%;
  border-radius: 5px;
}
input[type="text"],
input[type="date"] {
  padding: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}
input[type="date"] {
  width: 50%;
}
select {
  border: 1px solid black;
  padding: 5px;
  width: 52%;
  border-radius: 5px;
}
textarea {
  border: 1px solid black;
  padding: 10px;
  width: 50%;
  border-radius: 5px;
}
button {
  margin: 5px 10px 5px 0;
}
</style>
