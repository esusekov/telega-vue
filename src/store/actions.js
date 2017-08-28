/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types'


// Auth
export const setPhone = ({ commit }, data) => {
  commit(types.SET_PHONE, data)
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
}

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION)
}

export const setUser = ({ commit }, user) => {
  commit(types.SET_USER, user)
  // commit(types.SET_ACCESS, user.access_hash)
}
