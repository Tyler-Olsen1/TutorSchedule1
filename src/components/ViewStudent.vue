<template>
<<<<<<< HEAD
    <div id="ViewStudent">
=======
    <div id="viewStudent">
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{name}}</h4>
            </li>
            <li class="collection-item">Student id#: {{student_id}}</li>
            <li class="collection-item">Grade: {{grade}}</li>
            <li class="collection-item">Language: {{language}}</li>
        </ul>
<<<<<<< HEAD
        Student information: 
        <div class="studentInfo">
            <span>{{ studentInfo }}</span>
        </div>
        <br>
        <div class="buttons" align="right">
        <router-link class="btn grey" to="/dashboard">Back</router-link>
=======
        <router-link class="btn grey" to="/">Back</router-link>
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
        <button @click="deleteStudent" class="btn red">Delete</button>
        <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'EditStudent', params: {student_id: student_id}}" class="btn-floating btn-large red">
                <i class="fa fa-pencil"></i>
            </router-link>
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
<<<<<<< HEAD
    name: 'ViewStudent',
=======
    name: 'viewStudent',
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
    data() {
        return {
            student_id: null,
            name: null, 
            language: null, 
<<<<<<< HEAD
            grade: null,
            studentInfo: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('students').where('student_id', '==', to.params.student_id).get()
=======
            grade: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('teachers').where('student_id', '==', to.params.student_id).get()
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.student_id = doc.data().student_id
                    vm.name = doc.data().name
                    vm.grade = doc.data().grade
                    vm.language = doc.data().language
<<<<<<< HEAD
                    vm.studentInfo = doc.data().studentInfo
=======
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
<<<<<<< HEAD
            db.collection('students').where('student_id', '==', this.$route.student_id).get()
=======
            db.collection('teachers').where('student_id', '==', this.$route.student_id).get()
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.student_id = doc.data().student_id
                    this.name = doc.data().name
                    this.language = doc.data().language
                    this.grade = doc.data().grade
<<<<<<< HEAD
                    this.studentInfo = doc.data().studentInfo
                })
            })
        },
        deleteStudent () {
=======
                })
            })
        },
        deleteTeacher () {
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
            if(confirm("Are you sure?")) {
            db.collection('students').where('student_id', '==', this.$route.params.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                doc.ref.delete()
<<<<<<< HEAD
                this.$router.push('/dashboard')
=======
                this.$router.push('/')
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
                })
                })
            }
        }
    }}
<<<<<<< HEAD
</script>

<style scoped>
.studentInfo {
    border: 5px solid grey;
    padding: 5px;
}

</style>
=======
</script>
>>>>>>> 00bdd6b2fdcf92b8d5b5c9f7b17f12a405084554
