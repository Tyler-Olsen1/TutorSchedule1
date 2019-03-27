<template>
    <div id="container" class="collection with-header">
        <h3>New Student</h3>
        <div class="row">
            <form @submit.prevent="saveStudent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="student_id" required>
                        <label>Random Student ID</label>
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
                        <input type="text" v-model="age" required>
                        <label>Age</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/Dashboard" class="btn grey">Back</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'NewStudent',
    data() {
        return {
            student_id: null,
            name: null,
            age: null,
            language: null
        }
    },
    methods: {
        saveStudent() {
            db.collection('students').add({
                student_id: this.student_id,
                name: this.name,
                language: this.language,
                age: this.age
            })
        .then(docRef => this.$router.push('/Dashboard'))
        // v-bind:to="{name: 'ViewStudent', params: {student_id: student.student_id}}
        .catch(error => console.log(err))
        },
    
    }
}
</script>
<style>
#container{
    background-color: white;
}
</style>
