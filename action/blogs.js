
const { default: axios } = require("axios")
import { useState } from 'react'
import { useApiHandler, fetcher } from 'action';
import useSWR from 'swr';
// import { fetcher } from '@/action'



export const createBlog = data => axios.post('/api/v1/blogs', data)
export const updateBlog = (id, data) => axios.patch(`/api/v1/blogs/${id}`, data)


export const useCreateBlog = () => useApiHandler(createBlog)
export const useUpdateBlog = () => useApiHandler(updateBlog)

export const useGetBlog = (id) => {
    try {
        const { data, error, ...rest } = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher);
        return { data, error, loading: !data && !error, ...rest }
    } catch (error) {
        console.error(error)
    }
}

export const useGetUserBlogs = () => {
    try {
        const { data, error, ...rest } = useSWR(`/api/v1/blogs/me`, fetcher);
        return { data, error, loading: !data && !error, ...rest }
    } catch (error) {
        console.error(error)
    }
}





// export const useGetPortfolio = (id) => {
//     try {
//         const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
//         return { data, error, loading: !data && !error, ...rest }
//     } catch (error) {
//         console.error(error)
//     }

// }
