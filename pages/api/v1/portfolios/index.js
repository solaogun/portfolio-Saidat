

import axios from 'axios'
import auth0 from '@/utils/auth0'
import PortfolioApi from '@/utils/lib/api/portfolios'

export default async function createPortfolio(req, res) {
    try {
        const { accessToken } = await auth0.getSession(req)
        const json = await new PortfolioApi(accessToken).createPortfolio(req.body)
        return res.json(json.data)
    } catch (e) {
        console.log(e)
        return res.status(e.status || 422).json(e.response.data)
    }
}