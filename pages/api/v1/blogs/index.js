


import axios from 'axios'
import auth0 from '@/utils/auth0'
import BlogApi from '@/utils/lib/api/blogs'

export default async function createBlog(req, res) {
    try {
        const { accessToken } = await auth0.getSession(req)
        const json = await new BlogApi(accessToken).create(req.body)
        return res.json(json.data)
    } catch (e) {
        console.log(e)
        return res.status(e.status || 422).json(e.response.data)
    }
}