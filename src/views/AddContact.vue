<template>
    <div class="alert alert-dismissible alert-success" v-if="showMessage">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <h4 class="alert-heading">Add Contact</h4>
      <p class="mb-0">{{ message }}.</p>
    </div>
    <div class="card border-success mb-3" style="max-width: 60rem;">
      <div class="card-header">Add Contact</div>
      <div class="card-body">
        <form data-dashlane-rid="96a3f12bc54f53e7" data-form-type="other" @submit.prevent="submitForm">
          <fieldset>
            <div class="form-group">
              <label for="first_name" class="form-label mt-4">First Name</label>
              <input type="text" class="form-control" id="first_name" placeholder="First Name" v-model="contact.first_name">
            </div>
  
            <div class="form-group">
              <label for="last_name" class="form-label mt-4">Last Name</label>
              <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-model="contact.last_name">
            </div>
  
            <div class="form-group">
              <label for="email" class="form-label mt-4">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Email address" v-model="contact.email">
            </div>
  
            <div class="form-group mb-2">
              <label for="phone_number" class="form-label mt-4">Phone Number</label>
              <input class="form-control" type="text" id="phone_number" placeholder="Phone Number" v-model="contact.phone_number">
            </div>
  
            <button type="submit" class="btn btn-primary btn-sm" data-dashlane-rid="e374eb904048f445"
              data-dashlane-label="true" data-form-type="action">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </template>
  
  <script>
//   import { useRouter } from 'vue-router'; // Import the Vue Router

  export default {
    name: "AddContact",
    data() {
      return {
        contact: {
            email: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            // router: useRouter() // Access the Vue Router
        },
        message: "",
        showMessage: false
      };
    },
    methods: {
        
      submitForm() {
        const axiosInstance = this.$axiosReq();
  
        // Send the updated contact data to the server
        axiosInstance.post(`/contacts`, this.contact)
          .then(response => {
            this.message = response.data.message;
            this.showMessage = true;
            this.$router.push({ name: 'home' });
          })
          .catch(error => {
            // Handle any errors (e.g., display an error message)
            console.error('Error updating contact:', error);
          });
      }
    },
  
    mounted() {}
  };
  </script>
  