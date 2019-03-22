<template>
    <nav>
        <div class="nav-wrapper green" id="Navbar" display="flex" flex-direnction>
            <div>
                <img src="../assets/logo.png" alt="Tyler' Tutors">
            </div>
            <div class="banner">
                <router-link to="/dashboard" class='brand-logo'>Teacher / Student Manager</router-link>
            </div>
            <div class="input-field col s12" display="block">
                <ul>
                    <li>
                        <router-link to="./ViewStudents">View Students</router-link>
                    </li>
                    <li>
                        <router-link to="./NewStudent">New Student</router-link>
                    </li>
                    <li>
                        <router-link to="./ViewTeachers">View Teachers</router-link>
                    </li>
                    <li>
                        <router-link to="./NewTeacher">New Teacher</router-link>
                    </li>
                    <li>
                        <router-link to="./Dashboard">Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.banner{
    width: 400px;
}
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
