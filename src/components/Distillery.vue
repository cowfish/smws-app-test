<template>
      <div v-if="currentDistillery" class="distillery">
        <h5>{{ currentDistillery.distillery }}</h5>
        <div>
          <label><strong>Country:</strong></label> {{ currentDistillery.country }}
        </div>
        <div>
          <label><strong>Style:</strong></label> {{ currentDistillery.style }}
        </div>
	
    </div>	
</template>

<script>
  import DistilleryDataService from "../services/DistilleryDataService";
  
  export default {
    name: "distillery",
    props: { distilleryNumber: String },
    data() {
      return {
        currentDistillery: null,
      };
    },
    methods: {
      getDistillery() {
        DistilleryDataService.findByNumber(this.distilleryNumber)
        .then(response => {
          this.currentDistillery = response.data[0];
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }},
    created: function() {
      this.getDistillery();
    },
    watch: {
      distilleryNumber() {
        this.getDistillery();
      }
    }
  
  };
</script>
    
<style>
.distillery {
  padding-top:20px;
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
