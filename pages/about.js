import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/action/user'




const About = () =>{
    const  {data,loading}= useGetUser()
     debugger
        return(
            <BaseLayout user={data} loading={loading}>
            <BasePage>
            <h1>I am about page</h1>
            </BasePage>
            </BaseLayout>
        )
    
}

export default About