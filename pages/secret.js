import { Component, useEffect, useState } from "react"
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import {useGetUser} from '@/action/user'
// import Redirect from '@/components/shared/redirect'
import withAuth from '@/hoc/withAuth'

const Secret = ({ user, loading }) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>I am secret page - Hello {user.name} </h1>
            </BasePage>
        </BaseLayout>
    )

}
export default withAuth(Secret)();

// Higher Order Component
// simple function that takes component and 
// return new component with extended functionality

// function withAuth (Component) {
//  return function (props) {
//   return <Component title="Hello World" {...props} />
//  }
// }


//    const withAuth =(Component)=> props=> 
//       <Component title="Hello World" {...props} />