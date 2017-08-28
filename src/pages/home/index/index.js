/* ============
 * Home Index Page
 * ============
 *
 * The home index page
 */

import VLayout from 'layouts/default/default.vue'
import VPanel from 'components/panel/panel.vue'

import chatsList from 'services/chatsList'

export default {
  mounted() {
    chatsList.getChats()
  },

  components: {
    VLayout,
    VPanel,
  },
};
