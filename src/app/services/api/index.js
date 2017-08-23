import MTProto from 'telegram-mtproto'

const API_ID = 197410
const API_HASH = '2a62203be3ec698ee4b217f7842499c6'

const api = {
  invokeWithLayer: 0xda9b0d0d,
  layer: 57,
  initConnection: 0x69796de9,
  api_id: API_ID,
  app_version: '1.0.1',
  lang_code: 'en',
}

const server = {
  webogram: true,
  dev: false,
}

const client = MTProto({ server, api })

let phoneNumber
let phoneHash

const sendCode = async (phone) => {
  phoneNumber = phone
  const { phone_code_hash: phoneCodeHash } = await client('auth.sendCode', {
    phone_number: phone,
    current_number: false,
    api_id: API_ID,
    api_hash: API_HASH,
  })

  console.log('PHONE CODE HASH', phoneCodeHash)

  phoneHash = phoneCodeHash

  return phoneCodeHash
}

const signIn = async (code) => {
  const res = await client('auth.signIn', {
    phone_number: phoneNumber,
    phone_code_hash: phoneHash,
    phone_code: code,
  })

  console.log('USER', res)
}

export default {
  sendCode,
  signIn,
}
