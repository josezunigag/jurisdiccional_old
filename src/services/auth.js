import axios from 'axios'
import store from 'store'
import { url } from '../config/api'

export default class AuthService {
  static login (usuario, password) {
    return new Promise(async (resolve) => {
      try {
        let response = await axios.post(
          `${url}/login`,
          {
            usuario,
            password
          }
        )

        response = response.data.data
        console.log(response);
        store.set(
          'user',
          response.user
        )
        
        store.set('token',
          response.token
        )
        resolve(true)
      } catch (e) {
        resolve(false)
      }
    })
  }
}
