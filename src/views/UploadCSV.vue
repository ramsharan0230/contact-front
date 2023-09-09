<template>
    <div class="alert alert-dismissible alert-success" v-if="showMessage">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <h4 class="alert-heading">Upload CSV</h4>
        <p class="mb-0">{{ message }}.</p>
    </div>
    <div class="card border-success mb-3" style="max-width: 60rem;">
        <div class="card-header">Upload CSV</div>
        <div class="card-body">
            <form data-dashlane-rid="96a3f12bc54f53e7" data-form-type="other" @submit.prevent="submitForm">
                <fieldset>

                    <div class="form-group">
                        <label for="csv_file" class="form-label mt-4">Upload CSV</label>
                        <input type="file" class="form-control" id="csv_file" placeholder="First Name"
                            @change="handleFileUpload" accept=".csv">
                    </div>

                    <button type="submit" class="btn btn-primary btn-sm" data-dashlane-rid="e374eb904048f445"
                        data-dashlane-label="true" data-form-type="action" @click="uploadCSV()">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>
  
<script>
//   import { useRouter } from 'vue-router'; // Import the Vue Router

export default {
    name: "UploadCSV",
    data() {
        return {
            contact: {
                csv_file: "",
            },
            message: "",
            showMessage: false
        };
    },
    methods: {

        handleFileUpload(event) {
            const selectedFile = event.target.files[0];
            this.contact.csv_file = selectedFile;
        },

        async uploadCSV(){
            const axiosInstance = this.$axiosReq();
            
            var form = new FormData();
            form.append("csv_file", this.contact.csv_file);
            var config = {
                header: { "Contect-type": "multipart/form-data" },
            };
            
            try {
                const response = await axiosInstance.post(`/upload-csv`, form, config);

                this.message = response.data.message;
                this.showMessage = true;
                // this.$router.push({ name: 'home' });
            } catch (error) {
                // Handle any errors (e.g., display an error message)
                console.error('Error uploading CSV:', error);
            }
        }
    },

    mounted() { }
};
</script>
  