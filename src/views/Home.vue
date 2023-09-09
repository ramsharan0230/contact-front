<template>
  <div class="card border-success mb-3" style="max-width: 60rem;">
    <div class="card-header">
      <div class="row">
        <div class="col-sm-8">
          Contact List

        </div>
        <div class="col-sm-2">
          <router-link to="/add-contact" type="button" class="btn btn-success btn-sm"
            style="align: right">Add Contact</router-link>
        </div>
        <div class="col-sm-2">
          <!-- <button type="button" class="btn btn-primary btn-sm" style="margin-right: 5px">Upload CSV</button> -->
          <router-link to="/upload-csv" type="button" class="btn btn-primary btn-sm"
            style="align: right">Upload CSV</router-link>
        </div>
      </div>
    </div>
    <ContactList :contacts="contacts"/>
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue';

export default {
  name: "HomeComp",
  components: {
    ContactList
  },
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    fetchData() {
      const axiosInstance = this.$axiosReq();

      axiosInstance.get('/contacts')
        .then(response => {
          // Handle the response data
          response.data.data.forEach(item => {
            this.contacts.push(item);
          });
          console.log(this.contacts)
          
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
    },
  },

  mounted(){
    this.fetchData()
  }

}
</script>