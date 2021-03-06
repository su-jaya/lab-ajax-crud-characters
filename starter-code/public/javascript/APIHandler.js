class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get("http://localhost:8000/characters")
  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`)
  }

  createOneRegister (body) {
    return axios.post("http://localhost:8000/characters", body)
  }

  updateOneRegister (id, object) {
    return axios.put(`http://localhost:8000/characters/${id}`, object)
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`)
  }
}
