import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/action/user'
import { Row, Col } from 'reactstrap'






const Cv = () => {
    const { data, loading } = useGetUser()
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage title="My Cv - Saidat Adebule">
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <iframe style={{ width: '100%', height: '800px' }} src="/Saidat's Resume.pdf " />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )

}

export default Cv