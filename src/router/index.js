import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';
import NewStudent from '@/components/NewStudent';
import NewTeacher from '@/components/NewTeacher';
import ViewStudent from '@/components/ViewStudent';
import ViewTeacher from '@/components/ViewTeacher';
import EditStudent from '@/components/EditStudent';
import EditTeacher from '@/components/EditTeacher';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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
    }
  ]
});