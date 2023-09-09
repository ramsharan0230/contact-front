<template>
    <div class="alert alert-dismissible alert-success" v-if="showMessage">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <h4 class="alert-heading">Contact Update</h4>
        <p class="mb-0">{{ this.message }}.</p>
    </div>
    <div class="card border-success mb-3" style="max-width: 60rem;">
        <div class="card-header">Update Contact</div>
        <div class="card-body">
            <form data-dashlane-rid="96a3f12bc54f53e7" data-form-type="other" @submit.prevent="submitForm">
                <fieldset>
                    <div class="form-group">
                        <label for="first_name" class="form-label mt-4">First Name</label>
                        <input type="text" class="form-control" id="first_name" placeholder="First Name" v-bind="first_name"
                            v-model="contact.first_name">
                    </div>

                    <div class="form-group">
                        <label for="last_name" class="form-label mt-4">Last Name</label>
                        <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-bind="last_name"
                            v-model="contact.last_name">
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label mt-4">Email address</label>
                        <input type="email" class="form-control" id="email" v-bind="email" v-model="contact.email">
                    </div>

                    <div class="form-group mb-2">
                        <label for="phone_number" class="form-label mt-4">Phone Number</label>
                        <input class="form-control" type="text" id="phone_number" v-bind="phone_number"
                            v-model="contact.phone_number">
                    </div>

                    <button type="submit" class="btn btn-primary btn-sm" data-dashlane-rid="e374eb904048f445"
                        data-dashlane-label="true" data-form-type="action" @click="submitForm">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateContact",
    data() {
        return {
            contact: "",
            email: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            message: "",
            showMessage: false
        }
    },
    methods: {
        fetchContact() {
            const axiosInstance = this.$axiosReq();
            axiosInstance.get(`/contacts/${this.$route.params.id}`)
                .then(response => {
                    this.contact = response.data.data;
                })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                });
        },
        submitForm() {
            const axiosInstance = this.$axiosReq();

            // Send the updated contact data to the server
            axiosInstance.put(`/contacts/${this.$route.params.id}`, this.contact)
                .then(response => {
                    this.message = response.data.message
                    this.showMessage = true
                })
                .catch(error => {
                    // Handle any errors (e.g., display an error message)
                    console.error('Error updating contact:', error);
                });
        }
    },

    mounted() {
        this.fetchContact()
    }

}
</script>