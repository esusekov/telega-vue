/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
import Vue from 'vue';
import * as App from './index.vue';

require('./bootstrap');

new Vue(App).$mount('#app');
