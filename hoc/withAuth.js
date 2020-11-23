import { useGetUser } from '@/action/user'
import Redirect from '@/components/shared/Redirect'
import { useState, useEffect } from 'react'
import { isAuthorized } from '../utils/auth0'

const withAuth = Component => role => {

    return props => {
        const { data, loading } = useGetUser();
        // const [loading, setLoading] = useState(true)

        // useEffect(() => {
        //     setLoading(false)
        // }, [data])

        if (loading) {
            return <p>Loading...</p>
        }
        if (!data) {
            return <Redirect ssr to="/api/v1/login" />
        } else {
            if (role && !isAuthorized(data, role)) {
                return <Redirect ssr to="/api/v1/login" />
            }
            return <Component user={data} loading={loading} {...props} />
        }
    }
}

export default withAuth