import {Component, useEffect,useState} from "react"
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import {useGetUser} from '@/action/user'
// import Redirect from '@/components/shared/redirect'
import withAuth from '@/hoc/withAuth'

const OnlyAdmin = ({user,loading}) => {
    return (<BaseLayout user={user} loading={loading}>
        <BasePage>
            <h1>I am admin page - Hello {user.name} </h1>
        </BasePage>
    </BaseLayout>)
        
}

export default withAuth(OnlyAdmin)('admin');