<template>
    <nav>
        <div class="nav-wrapper green" id="Navbar">
            <div>
                <img src="../assets/logo.png" alt="Tyler' Tutors">
            </div>
            <div class="banner">
                <router-link to="/dashboard" class='brand-logo'>Teacher / Student Manager</router-link>
            </div>
            <div id="dropdownList">
                <!-- <div id="students"> -->
                    <ul id="students">
                        <li>
                            Students
                        </li>
                        <li>
                            <router-link to="./ViewStudents">View Students</router-link>
                        </li>
                        <li>
                            <router-link to="./NewStudent">New Student</router-link>
                        </li>
                    </ul>
                <!-- </div>
                <div id="teachers"> -->
                    <ul id="teachers">
                        <li>
                            Teachers
                        </li>
                        <li>
                            <router-link to="./ViewTeachers">View Teachers</router-link>
                        </li>
                        <li>
                            <router-link to="./NewTeacher">New Teacher</router-link>
                        </li>
                    </ul>
                <!-- </div> -->
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
#dropdownList{
    display: flex;
    flex-direction: row;
}
#student{
    display: flex;
    flex-direction: column;
    visibility: hidden;
}
#student:hover{
    visibility: visible
}
#teacher{
    display: flex;
    flex-direction: column;
}
</style>

<script>
export default {

}
</script>
