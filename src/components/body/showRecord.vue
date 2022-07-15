<template>
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
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    project: {
      type: String,
    },
    activity: {
      type: String,
    },
    date: {
      type: String,
    },
    timeSpent: {
      type: Object,
    },
    description: {
      type: String,
    },
    sendData: Boolean,
  },
  data() {
    return {
      data: {},
      particularObj: [],
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
              id: 0,
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
              id: 0,
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
  beforeUpdate() {
    this.data = {
      name: this.name,
      project: this.project,
      activity: this.activity,
      date: this.date,
      timeSpent: this.timeSpent,
      description: this.description,
    };
    console.log(this.sendData);
    if (this.sendData == false) {
      this.addData(this.data);
    }
  },

  methods: {
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
    addData(currentData) {
      console.log("Inside AddData");
      let currentDate = currentData.date;
      if (`${currentDate}` in this.allDate[0]) {
        // console.log(this.allDate[0][`${currentDate}`]);
        let id = this.allDate[0][`${currentDate}`].length;
        currentData.id = id;
        if (this.data?.date != undefined) {
          console.log("Else....");
          this.allDate[0][`${currentDate}`].push(currentData);
        }
        currentData = null;
      } else {
        this.allDate[0][currentDate] = [];
        if (this.data?.date != undefined) {
          this.allDate[0][`${currentDate}`].push(currentData);
        }
      }
    },
    editData(editData) {
      console.log(editData);
    },
  },
};
</script>

<style scoped>
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
