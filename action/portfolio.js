const { default: axios } = require("axios")
import { useState } from 'react'
import { useApiHandler, fetcher } from 'action';
import useSWR from 'swr';
// import { fetcher } from '@/action'



export const createPortfolio = (data) => axios.post('/api/v1/portfolios', data)

export const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data)

export const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`)





export const useCreatePortfolio = () => useApiHandler(createPortfolio)

export const useUpdatePortfolio = () => useApiHandler(updatePortfolio)

export const useDeletePortfolio = () => useApiHandler(deletePortfolio)






export const useGetPortfolio = (id) => {
    try {
        const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
        return { data, error, loading: !data && !error, ...rest }
    } catch (error) {
        console.error(error)
    }

}
