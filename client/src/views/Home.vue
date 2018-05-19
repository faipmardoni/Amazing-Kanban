<template>
  <div class="home container.fluid">
    <div class="row">
      <List v-for="(item, i) in list" :key="i" :list="item" :card="Cards" />
    </div>
    <b-modal id="modalEditCard" ref="modal" title="Edit Card" @ok="handleOk" @shown="clearForm">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-group label="Title:">
          <b-form-input type="text" v-model="taskName" required>
          </b-form-input>
        </b-form-group>
        <b-form-group label="Description:">
          <b-form-textarea id="textarea1" v-model="description" :rows="3" :max-rows="6">
          </b-form-textarea>
        </b-form-group>
        <b-form-group label="Status:">
          <b-form-select class="mb-2 mr-sm-2 mb-sm-0" :value="null" :options="{ 'BackLog': 'Back Log', 'ToDo': 'To Do', 'Doing': 'Doing', 'Done': 'Done' }" v-model="status">
            <option slot="first" :value="null">Choose...</option>
          </b-form-select>
        </b-form-group>
      </form>
        <b-btn class="mt-3" variant="outline-danger" block @click="deleteCard">Delete</b-btn>
    </b-modal>
  </div>
</template>

<script>
  import List from "@/components/List.vue";
  import Swal from 'sweetalert2'  
  import {
    db
  } from "@/firebase.js";
  import store from "@/store.js";
  
  const cardRef = db.ref("Card");
  export default {
    name: "home",
    components: {
      List
    },
    firebase: {
      Cards: cardRef
    },
    created() {
      store.commit("addCards", this.Cards)
    },
    data() {
      return {
        list: ["BackLog", "ToDo", "Doing", "Done"],
        taskName: null,
        description: null,
        status: null,
        card: null,
        id: null
      };
    },
    computed: {
      test() {
        this.card = store.state.card
      }
    },
    methods: {
      clearForm() {
        this.taskName = store.state.card.name
        this.description = store.state.card.description
        this.status = store.state.card.status
        this.id = store.state.card['.key']
      },
      handleOk(evt) {
        evt.preventDefault()
        if (!this.taskName || !this.description || !this.status) {
          Swal('Oops...', 'Please fill all fields!', 'error')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        let newCard = {
          name: this.taskName,
          description: this.description,
          status: this.status
        }
        cardRef.child(this.id).update(newCard)
        store.commit('editCard', [])
        this.$refs.modal.hide()
      },
      deleteCard() {
        cardRef.child(this.id).remove()
        this.$refs.modal.hide()
      }
    },
  };
</script>
