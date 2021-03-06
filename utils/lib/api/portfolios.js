import axios from 'axios'
import BaseApi from './BaseApi'

class PortfolioApi extends BaseApi {

    constructor(accessToken) {
        // this.config = {}
        // if (accessToken) {
        //     this.config.headers = {
        //         authorization: `Bearer ${accessToken}`
        //     }
        // }
        super(accessToken, '/portfolios')
        // this.apiUrl = process.env.PORTFOLIO_API_URL + '/portfolios'
    }

    // getById(id) {
    //     return axios.get(`${this.apiUrl}/${id}`)
    // }

    // getAll() {
    //     return axios.get(this.apiUrl)
    // }

    // getById(id) { all in BaseApi
    //     return axios.get(`${this.apiUrl}/${id}`)

    // }

    // create(data) {all in BaseApi
    //     return axios.post(this.apiUrl, data, this.config)
    // }

    // update(id, data) {
    //     return axios.patch(`${this.apiUrl}/${id}`, data, this.config)
    // }

    delete(id) {
        return axios.delete(`${this.apiUrl}/${id}`, this.config)
    }


}

export default PortfolioApi