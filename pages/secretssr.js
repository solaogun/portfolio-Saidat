

import { Component, useEffect, useState } from "react"
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import {useGetUser} from '@/action/user'
import { initAuth0 } from "@auth0/nextjs-auth0";
import { authorizeUser } from '@/utils/auth0'
import { withAuth } from "../utils/auth0";




const SecretSSR = ({ pageProps }) => {
  const { user, title } = pageProps;
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am secret page - Hello {user && user.name} </h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>)

}


//  export const getServerSideProps = async ({req,res}) =>{
//      const user = await authorizeUser(req,res)
//      return {
//        props: {user}
//      }
//  }

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: 'my new title!' })
    }, 500)
  })
}

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const title = await getTitle();
  return title;
})();

export default SecretSSR