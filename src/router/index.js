import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Select from '../views/select.vue'
import marketIndex from '../views/marketingPersonnel/index.vue'
import personalInfo from '../views/marketingPersonnel/personalInfo.vue'
import studentInfo from '../views/marketingPersonnel/studentInfo.vue'
import insertStudentInfo from '../views/marketingPersonnel/insertStudentInfo.vue'
import insertPayInfo from '../views/marketingPersonnel/insertPayInfo.vue'
import bulletin from '../views/marketingPersonnel/bulletin.vue'
import message from '../views/marketingPersonnel/message.vue'
import personalPerformance from '../views/marketingPersonnel/personalPerformance.vue'
import avatarReset from '../views/marketingPersonnel/avatarReset.vue'
import bind from '../views/marketingPersonnel/bind.vue'
import major from '../views/marketingPersonnel/major.vue'
import classSet from '../views/marketingPersonnel/class.vue'
import wall from '../views/marketingPersonnel/wall.vue'

// import directorIndex from '../views/director/index.vue'
// import directorPersonalInfo from '../views/director/personalInfo.vue'
// import teamInfo from '../views/director/teamInfo.vue'
// import allTeamInfo from '../views/director/allTeamInfo.vue'

// import academicStaffIndex from '../views/academicStaff/index.vue'
// import academicStaffPersonalInfo from '../views/academicStaff/personalInfo.vue'

// import financialOfferIndex from '../views/financialOfficer/index.vue'
// import financialOfferPersonalInfo from '../views/financialOfficer/personalInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/select',
    name: 'Select',
    component: Select
  }, {
    path: '/marketIndex',
    name: 'marketIndex',
    component: marketIndex,
    redirect: '/marketIndex/personalPerformance',
    children: [
      {
        path: '/marketIndex/personalInfo',
        name: 'personalInfo',
        component: personalInfo
      }, {
        path: '/marketIndex/studentInfo',
        name: 'studentInfo',
        component: studentInfo
      }, {
        path: '/marketIndex/insertStudentInfo',
        name: 'insertStudentInfo',
        component: insertStudentInfo
      }, {
        path: '/marketIndex/insertPayInfo',
        name: 'insertPayInfo',
        component: insertPayInfo
      }, {
        path: '/marketIndex/bulletin',
        name: 'bulletin',
        component: bulletin
      }, {
        path: '/marketIndex/message',
        name: 'message',
        component: message
      }, {
        path: '/marketIndex/personalPerformance',
        name: 'personalPerformance',
        component: personalPerformance
      }, {
        path: '/marketIndex/avatarReset',
        name: 'avatarReset',
        component: avatarReset
      }, {
        path: '/marketIndex/bind',
        name: 'bind',
        component: bind
      }, {
        path: '/marketIndex/major',
        name: 'major',
        component: major
      }, {
        path: '/marketIndex/class',
        name: 'class',
        component: classSet
      }, {
        path: '/marketIndex/wall',
        name: 'wall',
        component: wall
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
