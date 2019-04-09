<template>
    <nav>
        <div class="nav-wrapper green" id="Navbar">
            <div>
                <img src="../assets/logo.png" alt="Tyler' Tutors">
            </div>
            <div class="banner">
                <router-link to="/dashboard" class='brand-logo'>Teacher / Student Manager</router-link>
            </div>
            <div>
                <a class='dropdown-trigger btn' dropdown-content="dropdown1" data-activates='dropdown1'>Students:</a>
                    <ul id='dropdown1' class='dropdown-content'>
                        <li id="student"><router-link to="./ViewStudents">View Students</router-link></li>
                        <li id="student"><router-link to="./NewStudent">New Student</router-link></li>
                    </ul>
                <a class='dropdown-trigger btn' dropdown-content="dropdown2" data-activates='dropdown2'>Teachers:</a>
                    <ul id='dropdown2' class='dropdown-content'>
                        <li><router-link to="./ViewTeachers">View Teachers</router-link></li>
                        <li><router-link to="./NewTeacher">New Teacher</router-link></li>
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
#dropdownList{
    display: flex;
    flex-direction: row;
}
/* #students{
    display: flex;
} */
#student{
    flex-direction: column;
    display: flex;
    visibility: hidden;
}

#student:hover{
    visibility: visible;
}
#teacher{
    display: flex;
    flex-direction: column;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
    });
export default {

}
</script>
