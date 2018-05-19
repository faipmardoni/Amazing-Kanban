<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" @click="editCard" v-b-modal.modalEditCard>
      <div class="float-left">
        <h5 class="mb-1">{{ item.name }}</h5>
        <p class="mb-1">{{ item.description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import store from "@/store.js";
const cardRef = db.ref("Card");
export default {
  props: ["item"],
  data() {
    return {
      taskName: this.item.name,
      description: this.item.description,
      status: this.item.status
    };
  },
  methods: {
    editCard() {
      store.commit("editCard", this.item);
    }
  }
};
</script>

<style>
</style>
