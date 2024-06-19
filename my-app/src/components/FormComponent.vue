<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name:</label>
            <input id="name" v-model="form.name" type="text">
            <span>{{ validation.name }}</span>
        </div>
        <div>
            <label for="email">Email:</label>
            <input id="email" v-model="form.email" type="email">
            <span>{{ validation.email }}</span>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            form: {
                name: '',
                email: ''
            },
            validation: {
                name: '',
                email: ''
            }
        };
    },
    methods: {
        validateForm() {
            let isValid = true;
            // Name validation
            if (!this.form.name) {
                this.validation.name = 'Name is required.';
                isValid = false;
            } else {
                this.validation.name = '';
            }
            // Email validation
            if (!this.form.email) {
                this.validation.email = 'Email is required.';
                isValid = false;
            } else if (!this.form.email.includes('@')) {
                this.validation.email = 'Email is invalid.';
                isValid = false;
            } else {
                this.validation.email = '';
            }
            return isValid;
        },
        submitForm() {
            if (this.validateForm()) {
                // fetch('https://your-api-endpoint.com/submit', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(this.form)
                // })
                //     .then(response => response.json())
                //     .then(data => console.log(data))
                //     .catch(error => console.error('Error:', error));

                console.log('Form submitted:', this.form);
                this.form = {
                    name: '',
                    email: ''
                };
                this.validation = {
                    name: '',
                    email: ''
                };
            }
        }
    }
}
</script>