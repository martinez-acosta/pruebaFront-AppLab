import axios from 'axios'

const apiClient = axios.create({
  //baseURL: `//localhost:5000`,
  //baseURL: `https://api-tt-2019-b052.herokuapp.com`,
  baseURL: 'https://pruebabackapplab.herokuapp.com',
  withCredentials: false,
  progress: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async register(registerInfo) {
    console.log(registerInfo)
    const ip = await apiClient.post('/admin', registerInfo)
    return ip
  },
  async getAdmins() {
    return await apiClient.get('/admin', {})
  },
  setToken(userData) {
    //axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
  }
}
