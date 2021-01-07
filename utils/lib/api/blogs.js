

import axios from 'axios'
import BaseApi from './BaseApi'

class BlogApi extends BaseApi {

    constructor(accessToken) {
        // this.config = {}
        // if (accessToken) {
        //     this.config.headers = {
        //         authorization: `Bearer ${accessToken}`
        //     }
        // }
        super(accessToken, '/blogs')
        // this.apiUrl = process.env.PORTFOLIO_API_URL + '/blogs'
    }

    // getById(id) { all in BaseApi
    //     return axios.get(`${this.apiUrl}/${id}`)

    // }

    // create(data) {all in BaseApi
    //     return axios.post(this.apiUrl, data, this.config)
    // }

    // update(id, data) {     all in BaseApi
    //     return axios.patch(`${this.apiUrl}/${id}`, data, this.config)
    // }


}

export default BlogApi