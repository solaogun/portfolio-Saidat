import useSWR from 'swr'
import {fetcher} from '@/action'


export const useGetUser =()=> {
    try{
        const {data, error, ...rest} = useSWR('/api/v1/me', fetcher);
        return {data, error, loading: !data && !error, ...rest }
    }catch (error){
        console.error(error)
    }
// const {data, error, ...rest} = useSWR('/api/v1/me', fetcher)
// return {data, error, loading: !data && !error, ...rest }
}