import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const index = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
}

const create = (newContact) => {
  return axios.post(baseUrl, newContact)
    .then(response => response.data)
}

export default { index, create }
