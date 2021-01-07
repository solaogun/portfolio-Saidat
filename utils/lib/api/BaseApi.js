import axios from 'axios'

class BaseApi {

    constructor(accessToken, subPath) {
        this.config = {}
        if (accessToken) {
            this.config.headers = {
                authorization: `Bearer ${accessToken}`
            }
        }
        this.apiUrl = process.env.PORTFOLIO_API_URL + subPath
    }

    async getAll() {
        const { data } = await axios.get(this.apiUrl);
        return data
    }

    getByUser() {
        return axios.get(`${this.apiUrl}/me`, this.config)
    }

    // getById(id) {
    //     return axios.get(`${this.apiUrl}/${id}`)

    // }

    // getAll() {
    //     return axios.get(this.apiUrl)
    // }

    async getById(id) {
        const { data } = await axios.get(`${this.apiUrl}/${id}`) //data ={blog,author}
        return data;
    }

    async getBySlug(slug) {
        const { data } = await axios.get(`${this.apiUrl}/s/${slug}`)
        return data;

    }

    create(data) {
        return axios.post(this.apiUrl, data, this.config)
    }

    update(id, data) {
        return axios.patch(`${this.apiUrl}/${id}`, data, this.config)
    }

    delete(id) {
        return axios.delete(`${this.apiUrl}/${id}`, this.config)
    }



}

export default BaseApi