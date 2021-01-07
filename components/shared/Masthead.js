import { Container, Row, Button } from 'reactstrap';
import Link from 'next/link'

const Masthead = ({ children, imagePath }) =>
    <div className="masthead" style={{ "backgroundImage": `url(${imagePath})` }}>
        <div className="overlay"></div>
        <Container>
            <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        {/* <h1>Blogs Dashboard</h1>
                        <span className="subheading">
                            Let's write some nice blog today{' '}
                            <Link href='/blogs/editors'>
                                <Button color="primary">Create a new Blog</Button>
                            </Link>
                        </span> */}
                        {children}
                    </div>
                </div>
            </Row>
        </Container>
    </div>

export default Masthead