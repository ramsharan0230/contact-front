<template>
    <div class="card-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">SN. </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(item, index) in contacts" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.first_name }} {{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone_number }}</td>
            <td>
                <router-link :to="{ name: 'edit-contact', params: { id: item.id } }" type="button" class="btn btn-success btn-sm"
                style="margin-right: 5px">Edit</router-link>
              <button type="button" class="btn btn-warning btn-sm" @click="deleteContact(item.id)">Delete</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
</template>

<script>
export default{
    name: "ContactList",
    props:['contacts'],

    data(){
        return{

        }
    },
    methods:{
        deleteContact(id){
            const axiosInstance = this.$axiosReq();

            // Send the updated contact data to the server
            axiosInstance.delete(`/contacts/${id}`)
                .then(response => {
                    this.message = response.data.message
                    this.showMessage = true 
                })
                .catch(error => {
                    // Handle any errors (e.g., display an error message)
                    console.error('Error deleting contact:', error);
                });
        }
    }

}
</script>