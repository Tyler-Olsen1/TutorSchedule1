<template>
    <div>
<<<<<<< HEAD
        <h3>New Student</h3>
=======
        <h3>Edit Student</h3>
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
        <div class="row">
            <form @submit.prevent="saveStudent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="student_id" required>
                        <label>Student id#</label>
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
                        <input type="text" v-model="grade" required>
                        <label>Grade</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
<<<<<<< HEAD
                <router-link to="/dashboard" class="btn grey">Back</router-link>
=======
                <router-link to="/" class="btn grey">Back</router-link>
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
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
            grade: null,
            language: null
<<<<<<< HEAD
=======
        }
    },
    methods: {
    saveStudent() {
        db.collection('students').add({
            student_id: this.student_id,
            name: this.name,
            language: this.language,
            grade: this.grade
        })
        .then(docRef => this.$router.push('/'))
        .catch(error => console.log(err))
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
        }
    },
    methods: {
    saveStudent() {
        db.collection('students').add({
            student_id: this.student_id,
            name: this.name,
            language: this.language,
            grade: this.grade
        })
        .then(docRef => this.$router.push('/dashboard'))
        .catch(error => console.log(err))
        },

    }
}
</script>
