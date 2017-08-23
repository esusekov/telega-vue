// import Vue from 'vue';
// import accountService from './../account';
// import store from './../../store';
import api from './../api'

// When the request succeeds
// const success = (token) => {
//   store.dispatch('login', token);
//   accountService.find();
//   Vue.router.push({
//     name: 'home.index',
//   });
// };

// When the request fails
// const failed = () => {
// };

export default user => api.sendCode(user.phone)
