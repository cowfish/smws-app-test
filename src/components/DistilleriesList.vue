<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by number"
          v-model="number"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchNumber"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Distilleries List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(distillery, index) in distilleries"
          :key="index"
          @click="setActiveDistillery(distillery, index)"
        >
          {{ distillery.distillery ? distillery.distillery : distillery.number }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentDistillery">
        <h4>{{currentDistillery.number}} &ndash; {{ currentDistillery.distillery }}</h4>
        <div>
          <label><strong>Country:</strong></label> {{ currentDistillery.country }}
        </div>
        <div>
          <label><strong>Style:</strong></label> {{ currentDistillery.style }}
        </div>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import DistilleryDataService from "../services/DistilleryDataService";

export default {
  name: "distilleries-list",
  data() {
    return {
      distilleries: [],
      currentDistillery: null,
      currentIndex: -1,
      number: ""
    };
  },
  methods: {
    retrieveDistilleries() {
      DistilleryDataService.getAll()
        .then(response => {
          this.distilleries = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveDistilleries();
      this.currentDistillery = null;
      this.currentIndex = -1;
    },

    setActiveDistillery(distillery, index) {
      this.currentDistillery = distillery;
      this.currentIndex = index;
    },

    searchNumber() {
      DistilleryDataService.findByNumber(this.number)
        .then(response => {
          this.distilleries = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveDistilleries();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>