<template>
    <div id="new-teacher">
        <h3>New Teacher</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="employee_id" required>
                        <label>Employee id#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label>Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="language" required>
                        <label>Language</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="college" required>
                        <label>College</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Back</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'new-teacher',
    data() {
        return {
            employee_id: null,
            name: null,
            college: null,
            language: null
        }
    },
    methods: {
        saveEmployee() {
            db.collection('teachers').add({
                employee_id: this.employee_id,
                name: this.name,
                language: this.language,
                college: this.college
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
        }
    }
}
</script>
