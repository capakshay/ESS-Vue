<template>
  <div class="main">
    <form @submit.prevent="">
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
      <div class="grid" :class="{ invalid: error.pError }">
        <label for="project" class="colspan-2">Project</label>
        <div class="colspan-10">
          <select id="project" v-model.trim="form.project">
            <option selected>---Select---</option>
            <option>TeleForg</option>
            <option>Art</option>
            <option>TelJoy</option>
          </select>
          <small v-if="error.pError">Project Name Required</small>
        </div>
      </div>
      <div class="grid" :class="{ invalid: error.aError }">
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
          <small v-if="error.aError">Activity Name Required</small>
        </div>
      </div>
      <div class="grid" :class="{ invalid: error.dError }">
        <label for="date" class="colspan-2">Date</label>
        <div class="colspan-10">
          <input
            type="date"
            placeholder=""
            id="date"
            autocomplete="off"
            v-model="form.date"
          />
          <small v-if="error.dError">Date Required</small>
        </div>
      </div>
      <div class="grid" :class="{ invalid: error.tsError }">
        <label for="timeSpent" class="colspan-2">TimeSpent</label>
        <div class="sub-grid">
          <div class="sub-grid2">
            <label for="">Hrs</label>
            <input type="number" v-model="form.timeSpent.hrs" />
            <small v-if="error.tsError">Time Required</small>
          </div>
          <div class="sub-grid2">
            <label for="">Min</label>
            <input type="number" v-model="form.timeSpent.min" />
          </div>
        </div>
      </div>
      <div class="grid" :class="{ invalid: error.desError }">
        <label for="description" class="colspan-2">Description</label>
        <div class="colspan-10">
          <textarea
            id="description"
            type="textarea"
            v-model="form.description"
          ></textarea>
          <small v-if="error.desError">Description Required</small>
        </div>
      </div>

      <div class="grid">
        <label for="description" class="colspan-2"></label>
        <div class="colspan-10">
          <button v-if="submitButton" @click="formData">Submit</button>
          <button v-if="!submitButton" @click="updateData">Update</button>
          <button>Cancel</button>
        </div>
      </div>
    </form>
  </div>

  <div class="showdata">
    <div class="d-flex justify-content-start dateparent">
      <div class="date">Date</div>
    </div>
    <ul>
      <li v-for="(date, index) in allDate[0]" :key="date">
        <fa
          icon="square-plus"
          size="2x"
          v-if="!(index == particularObj.id)"
          @click="changeIcon(date, index, 1)"
        />
        <fa
          icon="square-minus"
          size="2x"
          v-if="index == particularObj.id"
          @click="changeIcon(date, index, -1)"
        />
        <span>{{ date[0]?.date }}</span>
        <table v-if="index == particularObj.id">
          <thead>
            <tr>
              <th scope="col">Edit</th>
              <th scope="col">Project</th>
              <th scope="col">Activity</th>
              <th scope="col">TimeSpent</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="obj in particularObj" :key="obj">
              <th scope="col"><a @click="editData(obj)">edit</a></th>
              <th scope="col">{{ obj.project }}</th>
              <th scope="col">{{ obj.activity }}</th>
              <th scope="col">
                {{ obj.timeSpent?.hrs }} : {{ obj.timeSpent?.min }}
              </th>
              <th scope="col">{{ obj.description }}</th>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
  <!-- <show-record :formObject="this.data"></show-record> -->
</template>

<script>
// import {required ,minLength} from 'vuelidate/lib/validators';
// import ShowRecord from "../body/showRecord.vue";
export default {
  components: {
    // ShowRecord,
  },
  data() {
    return {
      data: {},
      submitButton: true,
      particularObj: [],
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
      error: {
        pError: false,
        aError: false,
        dError: false,
        tsError: false,
        desError: false,
      },
      validity: Boolean,
      allDate: [
        {
          "2022-06-09": [
            {
              id: 0,
              name: "Akshay Nikam",
              project: "Art",
              activity: "Daily StandUp Meeting",
              date: "2022-06-09",
              timeSpent: { hrs: 2, min: 22 },
              description: "Hey there Today I complete .....",
            },
            {
              id: 1,
              name: "Akshay Nikam",
              project: "Art",
              activity: "Daily StandUp Meeting",
              date: "2022-06-09",
              timeSpent: { hrs: 1, min: 22 },
              description: "Hi there Today I complete .....",
            },
          ],
          "2022-06-08": [
            {
              id: 0,
              name: "Akshay Nikam",
              project: "TeleForg",
              activity: "Daily StandUp Meeting",
              date: "2022-06-08",
              timeSpent: { hrs: 2, min: 22 },
              description: "Hey there Today I complete .....",
            },
            {
              id: 1,
              name: "Akshay Nikam",
              project: "TeleForg",
              activity: "Daily StandUp Meeting",
              date: "2022-06-08",
              timeSpent: { hrs: 1, min: 22 },
              description: "Hi there Today I complete .....",
            },
          ],
        },
      ],
    };
  },
  methods: {
    formData(e) {
      this.error.pError = false;
      this.error.aError = false;
      this.error.dError = false;
      this.error.tsError = false;
      this.error.desError = false;

      let validateAllField = this.validateForm(this.form);
      this.validity = validateAllField;
      if (validateAllField == true) {
        console.log("Hey Validate", this.form);
        let currentDate = this.form.date;
        if (`${currentDate}` in this.allDate[0]) {
          let id = this.allDate[0][`${currentDate}`].length;
          this.form.id = id;
          this.allDate[0][`${currentDate}`].push(this.form);

          this.form = null;
        } else {
          this.allDate[0][currentDate] = [];
          this.allDate[0][`${currentDate}`].push(this.form);
        }
        e.preventDefault();
        this.resetForm();
      }
    },
    changeIcon(obj, idx, check) {
      console.log(idx, check);
      this.particularObj = obj;
      this.particularObj.id = idx;
      if (check == 1) {
        this.particularObj.id = idx;
      }
      if (check == -1) {
        this.particularObj = -1;
      }
    },
    editData(editObj) {
      console.log(editObj);
      this.submitButton = false;
      this.form = {
        name: "Akshay Nikam",
        project: editObj.project,
        activity: editObj.activity,
        date: editObj.date,
        timeSpent: {
          hrs: editObj.timeSpent.hrs,
          min: editObj.timeSpent.min,
        },
        description: editObj.description,
      };
    },
    updateData() {
      this.submitButton = true;
      let updatedDate = this.form.date;
      if (`${updatedDate}` in this.allDate[0]) {
        let id = this.allDate[0][`${updatedDate}`].length;
        this.form.id = id;
        console.log(this.allDate[0][`${updatedDate}`][id - 1]);
        this.allDate[0][`${updatedDate}`][id - 1] = this.form;
        // this.updateAllData();
        this.form = null;
      } else {
        this.allDate[0][updatedDate] = [];
        this.allDate[0][`${updatedDate}`].push(this.form);
      }
      this.resetForm();
    },
    validateForm(valForm) {
      if (valForm.project == "") {
        this.error.pError = true;
        return false;
      } else if (valForm.activity == "") {
        this.error.aError = true;
        return false;
      } else if (valForm.date == "") {
        this.error.dError = true;
        return false;
      } else if (valForm.timeSpent.hrs == "" && valForm.timeSpent.min == "") {
        this.error.tsError = true;
        return false;
      } else if (valForm.description == "") {
        this.error.desError = true;
        return false;
      } else {
        return true;
      }
    },
    resetForm() {
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
.grid.invalid {
  color: red;
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
.showdata {
  border: 1px solid black;
  background-color: rgba(112, 227, 247, 0.459);
}
.date {
  border: 1px solid rgba(112, 227, 247, 0.329);
  background-color: rgba(112, 227, 247, 0.459);
  margin-left: 10px;
  padding: 5px;
  font-size: 20px;
}
ul {
  margin: 5px;
}
li {
  margin: 5px;
  padding: 10px;
  list-style-type: none;
}
span {
  padding: 1rem;
  width: 10px;
}
small {
  display: block;
  margin-top: 4px;
}
table {
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
}
thead {
  background-color: rgba(2, 154, 180, 0.952);
  color: white;
}
th,
td {
  border: 1px solid black;
  padding: 4px;
}
thead th {
  width: 10%;
}
a {
  text-decoration: none;
  color: blue;
}
a:hover {
  color: rgb(1, 155, 22);
  font-size: 20px;
}
.fa-2x {
  font-size: 20px;
}
</style>
