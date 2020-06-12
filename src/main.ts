import Vue from 'vue';
import App from '@/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './lang';
// import firebase from './firebaseConfig';

Vue.config.productionTip = false;

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch('fetchUser', user);
// });

new Vue({
  router: router,
  store: store,
  i18n: i18n,
  render: (h) => h(App),
}).$mount('#app');
