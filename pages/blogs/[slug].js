

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/action/user'
import BlogApi from 'utils/lib/api/blogs'
import { SlateView } from 'slate-simple-editor';
import { Row, Col } from 'reactstrap'
import Avatar from 'components/shared/Avatar'




const BlogDetail = ({ pageProps: { blog, author } }) => {
    const { data, loading } = useGetUser()
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Avatar
                            image={author.picture}
                            title={author.name}
                            date={blog.createdAt}
                        />
                        <hr />
                        <SlateView initialContent={blog.content} />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )

}

export async function getStaticPaths() {
    const json = await new BlogApi().getAll();
    const blogs = json;
    const paths = blogs.map(b => ({ params: { slug: b.blog.slug } }))
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const { blog, author } = await new BlogApi().getBySlug(params.slug)
    return {
        props: {
            blog,
            author
        }
    }
}

export default BlogDetail