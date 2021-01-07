

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/action/user'
import { Row, Col, Container } from 'reactstrap'
import Link from 'next/link'
import Masthead from 'components/shared/Masthead'
import BlogApi from 'utils/lib/api/blogs';
import BlogItem from 'components/BlogItem'




const Blogs = ({ pageProps: { blogs } }) => {
    const { data, loading } = useGetUser()

    return (
        <BaseLayout
            navClass="transparent" className="blog-listing-page"
            user={data} loading={loading}>
            <Masthead imagePath="/images/home-bg.jpg">
                <h1>Fresh Blogs</h1>
                <span className="subheading">Programming, travelling...</span>
            </Masthead>
            <BasePage
                className="blog-body">
                <Row>
                    {
                        blogs.map(blog =>
                            <Col key={blog._id} md="10" lg="8" className="mx-auto">
                                <BlogItem blog={blog} />
                                {/* <div>
                                    <div className="post-preview clickable">
                                        <Link href="#">
                                            <a>
                                                <h2 className="post-title">
                                                    {blog.title}
                                                </h2>
                                                <h3 className="post-subtitle">
                                                    {blog.subTitle}
                                                </h3>
                                            </a>
                                        </Link>
                                        <p className="post-meta">Posted by
                                          <a href="#"> Saidat Adebule </a>
                                            -{blog.createdAt}
                                        </p>
                                    </div>
                                </div> */}
                                <hr></hr>
                            </Col>
                        )
                    }
                    {/* <Col md="10" lg="8" className="mx-auto">
                        <div>
                            <div className="post-preview clickable">
                                <Link href="#">
                                    <a>
                                        <h2 className="post-title">
                                            Some Title
                                        </h2>
                                        <h3 className="post-subtitle">
                                            Some Subtitle
                                        </h3>
                                    </a>
                                </Link>
                                <p className="post-meta">Posted by
                        <a href="#"> Saidat Adebule </a>
                        - 22/12/2020
                        </p>
                            </div>
                            <hr></hr>
                        </div>
                    </Col>
                    <Col md="10" lg="8" className="mx-auto">
                        <div>
                            <div className="post-preview clickable">
                                <Link href="#">
                                    <a>
                                        <h2 className="post-title">
                                            Some Title
                                        </h2>
                                        <h3 className="post-subtitle">
                                            Some Subtitle
                                        </h3>
                                    </a>
                                </Link>
                                <p className="post-meta">Posted by
                                .
                        <a href="#"> Saidat Adebule </a>
                        - 22/12/2020
                         </p>
                            </div>
                            <hr></hr>
                        </div>
                    </Col> */}
                </Row>
            </BasePage>
        </BaseLayout>

    )
}

export const getServerSideProps = async () => {
    const data = await new BlogApi().getAll()
    const blogs = data.map(item => ({ ...item.blog, author: item.author }))
    return {
        props: { blogs }
    }
}

export default Blogs