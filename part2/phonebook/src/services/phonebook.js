import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const index = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
}

const create = newContact => {
  return axios.post(baseUrl, newContact)
    .then(response => response.data)
}

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}${id}`, newPerson)
    .then(response => response.data)
}

const del = id => {
  return axios.delete(`${baseUrl}${id}`)
}

export default { index, create, update, del }
