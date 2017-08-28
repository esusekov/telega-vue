import api from 'services/api'
import store from 'store'

export default async (phone) => {
  const data = await api.sendCode(phone)

  store.dispatch('setPhone', data)
};
