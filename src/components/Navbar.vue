<template>
    <nav>
        <div class="nav-wrapper green" id="Navbar" display="flex" flex-direnction>
            <div>
                <img src="../assets/logo.png" alt="Tyler' Tutors">
            </div>
            <div class="container">
                <router-link to="/dashboard" class='brand-logo'>Teacher / Student Manager</router-link>
            </div>
            <div class="input-field col s12" display="block">
                <select id="mySelect" class="input-field col s12">
                    <optgroup label="students">
                        <option value="ViewStudents"><router-link to="/ViewStudents.vue">Students</router-link></option>
                        <option value="NewStudent"><router-link to="/NewStudent.vue">New Student</router-link></option>
                    </optgroup>
                    <optgroup label="teachers">
                        <option value="ViewTeachers"><router-link to="/ViewTeachers.vue">View Teachers</router-link></option>
                        <option value="NewTeacher"><router-link to="/NewTeacher.vue">New Teacher</router-link></option>
                    </optgroup>
                    <optgroup label="Frontend">
                        <option value="Frontend"><router-link to="/Frontend.vue">Frontend</router-link></option>
                    </optgroup>
                </select>
            </div>
        </div>
    </nav>
</template>

<style>
#Navbar{
    display: flex;
    flex-direction: row;
}
.select{
    align-self: flex-end;
    display: block;
}
#mySelect{
    display: block;
}
</style>

<script>
export default {
    
}
</script>
