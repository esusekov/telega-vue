/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

export const phoneSent = (state) => !!state.account.auth.phone
export const phoneData = ({ account: { auth }}) => ({
  phone: auth.phone,
  phoneHash: auth.phoneHash,
})
export const user = (state) => state.account.user
