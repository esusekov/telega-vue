/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login
 */

import auth from 'services/auth';

export default {

  data() {
    return {
      input: {
        phone: null,
        code: null,
      },
    };
  },

  computed: {
    phoneSent() {
      return this.$store.getters.phoneSent
    }
  },

  methods: {
    async submit() {
      if (this.phoneSent) {
        await auth.signIn(this.input.code)
      } else {
        await auth.sendCode(this.input.phone)
      }
    },
  },

  components: {
    VLayout: require('layouts/minimal/minimal.vue'),
    VPanel: require('components/panel/panel.vue'),
  },
};
