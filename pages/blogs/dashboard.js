

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/action/user'
import withAuth from '@/hoc/withAuth'




const Dashboard = ({ user, loading }) => {
    // const  {data,loading}= useGetUser()
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage header="DASHBOARD">
                <h1>Some text</h1>
            </BasePage>
        </BaseLayout>
    )

}

export default withAuth(Dashboard)('admin')