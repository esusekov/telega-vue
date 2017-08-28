import api from 'services/api'

const getChats = async () => {
  const chats = await api.getChats()
  console.log('CHATS', chats)
}

export default {
  getChats,
}
