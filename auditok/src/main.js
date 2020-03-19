// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import * as firebase from 'firebase'
import AlertCmp from './components/Alert.vue'
import EditAuditDetailsDialog from './components/DoAudit/Edit/EditAuditDetailsDialog'
import QuestionDialog from './components/DoAudit/QuestionDialog'
import ScaleComponent from './components/DoAudit/ScaleComponent'
import deleteDialog from './components/DoAudit/Delete/DeleteAuditDialog'
import deleteCompDialog from './components/CompAudits/Delete/DeleteCompAuditDialog.vue'
import JsonExcel from 'vue-json-excel'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VForm,
  VTextField,
  transitions,
  VCard,
  VAlert,
  VDataTable,
  VDialog,
  VSelect,
  VRadioGroup,
  VDivider
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import '../node_modules/vuetify/src/stylus/theme.styl'
import '../node_modules/vuetify/src/stylus/main.styl'
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VForm,
    transitions,
    VTextField,
    VCard,
    VAlert,
    VDataTable,
    VDialog,
    VSelect,
    VRadioGroup,
    VDivider,
  }
})

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-audit-details-dialog', EditAuditDetailsDialog)
Vue.component('question-dialog', QuestionDialog)
Vue.component('scale-component', ScaleComponent)
Vue.component('delete-dialog', deleteDialog)
Vue.component('downloadExcel', JsonExcel)
Vue.component('delete-comp-dialog', deleteCompDialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAKrRHb0uRmgiKOz9wBfzg7vkBorAja81w',
      authDomain: 'uucheckin-c2933.firebaseapp.com',
      databaseURL: 'https://uucheckin-c2933.firebaseio.com',
      projectId: 'uucheckin-c2933',
      storageBucket: 'uucheckin-c2933.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadAudits')
  }
})
