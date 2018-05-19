<template>
  <div class="col-lg-3 col-md-4 col-sm-6" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div class="card border-success">
      <div class="card-header bg-success">
        {{list}}
      </div>
      <div class="card-body">
        <Card v-for="(item, i) in card" :key="i" :item="item" v-if="item.status==list"/>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "@/components/Card.vue";
  import store from "@/store.js";
  export default {
    props: ["list", "card"],
    components: {
      Card
    },
  };
</script>

<style>
  
</style>
