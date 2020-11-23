import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import {withRouter} from 'next/router'
// import { useGetPostById } from '@/action';
import { useRouter } from 'next/router'
import withAuth from '@/hoc/withAuth';
import { useGetPortfolio } from '@/action/portfolio'
import PortfolioForm from '@/components/PortfolioForm'
import { Row, Col } from 'reactstrap'
import { useUpdatePortfolio } from '../../../action/portfolio';
import { toast } from 'react-toastify';


const PortfolioEdit = ({ user }) => {
    const router = useRouter();
    const [updatePortfolio, { error }] = useUpdatePortfolio()
    const { data: initialData } = useGetPortfolio(router.query.id)

    const _updatePortfolio = async (data) => {
        // try {
        //     await updatePortfolio(router.query.id, data)
        //     toast.success('Portfolio has been updated!', { autoClose: 2000 })
        // } catch {
        //     toast.error('Ooops some error!', { autoClose: 2000 })
        // }


        // updatePortfolio(router.query.id, data)
        //     .then(() => toast.success('Portfolio has been updated!', { autoClose: 2000 }))
        //     .catch(() => toast.error('Ooops some error!', { autoClose: 2000 }))

        await updatePortfolio(router.query.id, data)
        toast.success('Portfolio has been updated!', { autoClose: 2000 })
    }

    return (
        <BaseLayout user={user} loading={false}>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {initialData &&
                            <PortfolioForm
                                onSubmit={_updatePortfolio}
                                initialData={initialData}
                            />
                        }
                        {error &&
                            <div className="alert alert-danger mt-2">{error}</div>
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>

    )
}

export default withAuth(PortfolioEdit)('admin')