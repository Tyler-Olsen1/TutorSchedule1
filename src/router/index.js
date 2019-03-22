import Vue from 'vue';
import Router from 'vue-router';
import FrontEnd from '@/components/FrontEnd/FrontEnd';
import FrontEndIndex from '@/components/FrontEnd/FrontEndIndex';
import Dashboard from '@/components/Dashboard';
import NewStudent from '@/components/NewStudent';
import NewTeacher from '@/components/NewTeacher';
import ViewStudent from '@/components/ViewStudent';
import ViewTeacher from '@/components/ViewTeacher';
import ViewStudents from '@/components/ViewStudents';
import ViewTeachers from '@/components/ViewTeachers';
import EditStudent from '@/components/EditStudent';
import EditTeacher from '@/components/EditTeacher';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/FrontEnd',
      name: 'FrontEnd',
      component: FrontEnd
    },
    {
      path: '/FrontEndIndex',
      name: 'FrontEndIndex',
      component: FrontEndIndex
    },
    {
      path: '/newTeacher',
      name: 'NewTeacher',
      component: NewTeacher
    },
    {
      path: '/newStudent',
      name: 'NewStudent',
      component: NewStudent
    },
    {
      path: '/EditTeacher/:employee_id',
      name: 'EditTeacher',
      component: EditTeacher
    },
    {
      path: '/EditStudent/:student_id',
      name: 'EditStudent',
      component: EditStudent
    },
    {
      path: '/ViewTeacher/:employee_id',
      name: 'ViewTeacher',
      component: ViewTeacher
    },
    {
      path: '/ViewStudent/:student_id',
      name: 'ViewStudent',
      component: ViewStudent
    },
    {
      path: '/ViewTeachers',
      name: 'ViewTeachers',
      component: ViewTeachers
    },
    {
      path: '/ViewStudents',
      name: 'ViewStudents',
      component: ViewStudents
    },
  ]
});