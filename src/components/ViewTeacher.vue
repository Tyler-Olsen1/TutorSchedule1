<template>
    <div id="view-teacher">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{name}}</h4>
            </li>
            <li class="collection-item">Employee id#: {{employee_id}}</li>
            <li class="collection-item">College: {{college}}</li>
            <li class="collection-item">Language: {{language}}</li>
        </ul>
        <router-link class="btn grey" to="/">Back</router-link>
        <button @click="deleteTeacher" class="btn red">Delete</button>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-teacher',
    data() {
        return {
            employee_id: null,
            name: null, 
            dept: null, 
            position: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('teachers').where('employee_id', '==', to.params.employee_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.employee_id = doc.data().employee_id
                    vm.name = doc.data().name
                    vm.college = doc.data().college
                    vm.language = doc.data().language
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('teachers').where('employee_id', '==', this.$route.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.employee_id = doc.data().employee_id
                    this.name = doc.data().name
                    this.language = doc.data().language
                    this.collection = doc.data().college
                })
            })
        },
        deleteTeacher () {
            if(confirm("Are you sure?")) {
            db.collection('teachers').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                doc.ref.delete()
                this.$router.push('/')
                })
                })
            }
        }
    }}
</script>