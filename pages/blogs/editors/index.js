



import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/action/user'
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from 'action/blogs'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'




const BlogEditor = ({ user, loading }) => {
    const router = useRouter()
    // const {data: initialData}= useGetBlog(router.query.id)
    const [createBlog, { data: createdBlog, error, loading: blogLoading }] = useCreateBlog()
    // const  {data,loading}= useGetUser()
    const saveBlog = async (data) => {
        const createdBlog = await createBlog(data)
        router.push('/blogs/editors/[id]', `/blogs/editors/${createdBlog._id}`)
    }

    if (error) {
        toast.error(error)
    }

    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage >

                < Editor
                    onSave={saveBlog}
                    loading={blogLoading} />

                {/* <div>
                    <br></br>
                    < Editor onSave={(data) => {
                        debugger
                    }} />
                </div> */}

            </BasePage>
        </BaseLayout>
    )

}

export default withAuth(BlogEditor)('admin')