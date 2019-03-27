<template>
    <div>
        <h3>Edit Student</h3>
        <div class="collection with-header">
            <form @submit.prevent="updateStudent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="student_id" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="language" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="age" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                        <textarea name="studentInfo" id="studentInfo" cols="30" rows="10" v-model="studentInfo"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/dashboard" class="btn grey">Back</router-link>
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
        db.collection('students').where('student_id', '==', to.params.student_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.student_id = doc.data().student_id
                    vm.name = doc.data().name
                    vm.age = doc.data().age
                    vm.language = doc.data().language
                    vm.studentInfo = doc.data().studentInfo
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
                    this.age = doc.data().age
                    this.studentInfo = doc.data().studentInfo
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
                        age: this.age, 
                        language: this.language,
                        studentInfo: this.studentInfo
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
