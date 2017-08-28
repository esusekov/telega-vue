import Vue from 'vue'
import api from 'services/api'
import store from 'store'

export default async (code) => {
  const { phoneData } = store.getters
  const { user } = await api.signIn({ ...phoneData, code })

  store.dispatch('setUser', user)
  Vue.router.push({
    name: 'home.index',
  });
};

