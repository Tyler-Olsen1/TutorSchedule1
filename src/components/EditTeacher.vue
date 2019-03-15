<template>
    <div>
        <h3>Edit Teacher</h3>
        <div class="row">
            <form @submit.prevent="updateEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="employee_id" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="language" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="college" required>
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
    name: 'editTeacher',
    data() {
        return {
            employee_id: null,
            name: null,
            college: null,
            language: null
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
            db.collection('teachers').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.employee_id = doc.data().employee_id
                    this.name = doc.data().name
                    this.language = doc.data().language
                    this.college = doc.data().college
                })
            })
        },
        updateEmployee () {
            db.collection('teachers').where('employee_id', '==',
            this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        employee_id: this.employee_id,
                        name: this.name,
                        college: this.college, 
                        language: this.language
                    })
                    .then(() => {
                        this.$router.push({name: 'ViewTeacher', params: {employee_id: this.employee_id}})
                    })
                })
            })
        }
    }
}
</script>
