import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPassenger() {
    return apiClient('/passenger?_page=1&_limit=5')
  },
  getDetailById(id: number) {
    return apiClient('/passenger/' + id)
  },
  getAirlineById(id: number) {
    return apiClient('/airline/' + id)
  }
}
