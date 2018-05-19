<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top " id="top-nav">
    <a class="navbar-brand" href="#">iTrellu</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <form class="form-inline navbar-nav mr-auto mt-2 mt-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search">
        <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Search</button>
      </form>
  
  
      <b-btn v-b-modal.modalAddCard class="btn btn-outline-default btn-danger my-2 my-sm-0" style="margin-right: 10px;">Add Card</b-btn>
      <div class="dropdown">
        <a href="#">
          <img src="https://lh3.googleusercontent.com/-hgovM5xAaCo/AAAAAAAAAAI/AAAAAAAACG0/vj7PUkheY0o/s120-p-rw-no/photo.jpg" alt="Faip Mardoni" class="rounded-circle dropdown-toggle" style="width: 50px;">
        </a>
      </div>
    </div>
    <!-- Modal Component -->
    <b-modal id="modalAddCard" ref="modal" title="Add Card" @ok="handleOk" @shown="clearForm">
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
    </b-modal>
  </nav>
</template>

<script>
  import {
    db
  } from "@/firebase.js";
  import Swal from 'sweetalert2'
  
  const cardRef = db.ref("Card");
  
  export default {
    data() {
      return {
        taskName: null,
        description: null,
        status: null,
      }
    },
    methods: {
      clearForm() {
        this.taskName = null
        this.description = null
        this.status = null
      },
      handleOk(evt) {
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
        };
        cardRef.push(newCard);
        this.clearForm()
        this.$refs.modal.hide()
      }
    }
  }
</script>

<style>
  
</style>
