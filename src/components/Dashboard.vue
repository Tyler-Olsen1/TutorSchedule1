<template>
    <div id="dashboard">
        <div class="teachers">
            <ul class="collection with-header">
                <li class="collection-header">
                    <h4>Teachers</h4>
                </li>
                <li v-for="teacher in teachers.slice(0,3)" v-bind:key="teacher.employee_id" class="collection-item">
                    <div class="chip">{{teacher.college}}</div>{{teacher.name}} | Employee#: {{teacher.employee_id}} | {{teacher.language}}
                    <router-link class="secondary-content" v-bind:to="{name: 'ViewTeacher', params: {employee_id: teacher.employee_id}}">
                        <i class="fa fa-eye"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="students">
            <ul class="collection with-header">
                <li class="collection-header">
                    <h4>Students</h4>
                </li>
                <li v-for="student in students.slice(0,3)" v-bind:key="student.student_id" class="collection-item">
                    <div class="chip">{{student.age}}</div>{{student.name}} | ({{student.language}})
                    <router-link class="secondary-content" v-bind:to="{name: 'ViewStudent', params: {student_id: student.student_id}}">
                        <i class="fa fa-eye"></i>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="fixed-action-btn">
            <label for="NewStudent">New Student</label>
            <router-link to='/NewStudent' id="NewStudent" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
            <label for="NewTeacher">New Teacher</label>
            <router-link to='/NewTeacher' id="NewTeacher" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>

    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            teachers: [],
            students: []
        }
    },
    created () {
        db.collection('teachers').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'employee_id': doc.data().employee_id,
                    'name': doc.data().name,
                    'college': doc.data().college,
                    'language': doc.data().language
                }
                this.teachers.push(data)
            })
        }),
        db.collection('students').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'student_id': doc.data().student_id,
                    'name': doc.data().name,
                    'age': doc.data().age,
                    'language': doc.data().language
                }
                this.students.push(data)
            })
        })
    },
}
</script>
