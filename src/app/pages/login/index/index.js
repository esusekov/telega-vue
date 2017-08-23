/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login
 */

import api from './../../../services/api';

export default {

  data() {
    return {
      user: {
        phone: null,
        code: null,
      },
      phoneSent: false,
    };
  },

  methods: {
    async submit() {
      if (this.phoneSent) {
        await api.signIn(this.user.code)
      } else {
        await api.sendCode(this.user.phone)
        this.phoneSent = true
      }
    },
  },

  components: {
    VLayout: require('layouts/minimal/minimal.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
