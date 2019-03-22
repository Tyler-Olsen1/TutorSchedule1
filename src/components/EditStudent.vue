<template>
    <div>
        <h3>Edit Student</h3>
<<<<<<< HEAD
        <div class="collection with-header">
=======
        <div class="row">
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
            <form @submit.prevent="updateStudent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="student_id" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
<<<<<<< HEAD
                        <input type="text" v-model="name" disabled>
=======
                        <input type="text" v-model="name" required>
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="language" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
<<<<<<< HEAD
                        <input type="text" v-model="grade" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                        <textarea name="studentInfo" id="studentInfo" cols="30" rows="10" v-model="studentInfo"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/dashboard" class="btn grey">Back</router-link>
=======
                        <input type="text" v-model="grade" required>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Back</router-link>
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'editStudent',
    data() {
        return {
            student_id: null,
            name: null,
            grade: null,
            language: null
        }
    },
    beforeRouteEnter (to, from, next) {
<<<<<<< HEAD
        db.collection('students').where('student_id', '==', to.params.student_id).get()
=======
        db.collection('teachers').where('employee_id', '==', to.params.employee_id).get()
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.student_id = doc.data().student_id
                    vm.name = doc.data().name
<<<<<<< HEAD
                    vm.grade = doc.data().grade
                    vm.language = doc.data().language
                    vm.studentInfo = doc.data().studentInfo
=======
                    vm.grade = doc.data().college
                    vm.language = doc.data().language
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
                })
            })
        })

    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('students').where('student_id', '==', this.$route.params.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.student_id = doc.data().student_id
                    this.name = doc.data().name
                    this.language = doc.data().language
                    this.grade = doc.data().grade
<<<<<<< HEAD
                    this.studentInfo = doc.data().studentInfo
=======
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
                })
            })
        },
        updateStudent () {
            db.collection('students').where('student_id', '==',
            this.$route.params.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        student_id: this.student_id,
                        name: this.name,
                        grade: this.grade, 
<<<<<<< HEAD
                        language: this.language,
                        studentInfo: this.studentInfo
=======
                        language: this.language
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
                    })
                    .then(() => {
                        this.$router.push({name: 'ViewStudent', params: {student_id: this.student_id}})
                    })
                })
            })
        }
    }
}
</script>
