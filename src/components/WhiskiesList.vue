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
      <h4>Whiskies List</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(whisky, index) in whiskies"
            :key="index"
            @click="setActiveWhisky(whisky, index)"
            >
          {{ whisky.number }}.{{ whisky.bottling }} &ndash; {{ whisky.name }}
        </li>
      </ul>
      
    </div>
    <div class="col-md-6">
      <div v-if="currentWhisky">
        <h4>{{currentWhisky.number}}.{{currentWhisky.bottling}} &ndash; {{ currentWhisky.name }}</h4>
        <div class="description">
      {{ currentWhisky.description }}
        </div>
        <div>
          <label><strong>Age:</strong></label> {{ currentWhisky.age }}
        </div>
        <div>
          <label><strong>ABV:</strong></label> {{ currentWhisky.abv }}
        </div>
        <div>
          <label><strong>Distilled:</strong></label> {{ currentWhisky.distilled }}
        </div>
        <div>
          <label><strong>Outturn:</strong></label> {{ currentWhisky.outturndate }}
        </div>
        <div>
          <label><strong>Flavour Profile:</strong></label> {{ currentWhisky.profile }}
        </div>
        <div>
          <label><strong>Price:</strong></label> £{{ currentWhisky.price }}
        </div>
	
	<div>
          <distillery v-bind:distilleryNumber="currentWhisky.number"></distillery>
	</div>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Whisky...</p>
      </div>
    </div>
  </div>
</template>

<script>
    import DistilleryDataService from "../services/DistilleryDataService";
    import distillery from "./Distillery"
    
export default {
    name: "whiskies-list",
    components: {distillery},
    data() {
      return {
          whiskies: [],
          currentWhisky: null,
          currentIndex: -1,
          number: ""
      };
    },
    methods: {
    retrieveWhiskies() {
        DistilleryDataService.getWhiskies()
        .then(response => {
            this.whiskies = response.data;
        })
        .catch(e => {
            console.log(e);
        });
    },
    
    refreshList() {
        this.retrieveWhiskies();
        this.currentWhisky = null;
        this.currentIndex = -1;
    },
    
    setActiveWhisky(whisky, index) {
        this.currentWhisky = whisky;
        this.currentIndex = index;
    },
    
    searchNumber() {
        DistilleryDataService.getWhisky(this.number)
        .then(response => {
            this.whiskies = response.data;
        })
        .catch(e => {
            console.log(e);
        });
    }
    },
    mounted() {
    this.retrieveWhiskies();
    }
};
</script>
    
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.description {
  padding-bottom:10px;
}
</style>
