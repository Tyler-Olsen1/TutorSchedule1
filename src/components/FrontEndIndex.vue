<template>
    <div id="ViewStudent">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{name}}</h4>
            </li>
            <li class="collection-item">Grade: {{grade}}</li>
            <li class="collection-item">Language: {{language}}</li>
        </ul>
        Student information: 
        <div class="studentInfo">
            <span>{{ studentInfo }}</span>
        </div>
        <!-- <br> -->
        <!-- <div class="buttons" align="right"> -->
        <!-- <router-link class="btn grey" to="/dashboard">Back</router-link> -->
        <!-- <button @click="deleteStudent" class="btn red">Delete</button> -->
        <!-- <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'EditStudent', params: {student_id: student_id}}" class="btn-floating btn-large red">
                <i class="fa fa-pencil"></i>
            </router-link>
        </div> -->
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'ViewStudent',
    data() {
        return {
            student_id: null,
            name: null, 
            language: null, 
            grade: null,
            studentInfo: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('students').where('student_id', '==', to.params.student_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.student_id = doc.data().student_id
                    vm.name = doc.data().name
                    vm.grade = doc.data().grade
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
            db.collection('students').where('student_id', '==', this.$route.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.student_id = doc.data().student_id
                    this.name = doc.data().name
                    this.language = doc.data().language
                    this.grade = doc.data().grade
                    this.studentInfo = doc.data().studentInfo
                })
            })
        }
    }
}
</script>

<style scoped>
.studentInfo {
    border: 5px solid grey;
    padding: 5px;
}

</style>