import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router'
import { useGetUser } from '@/action/user'
import PortfolioApi from '../../utils/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard'
import { isAuthorized } from '@/utils/auth0'
import { useDeletePortfolio } from '@/action/portfolio'
import { useState } from 'react'




const Portfolios = ({ pageProps: portfolios }) => {
  const myPortfolio = portfolios.portfolios;
  const router = useRouter();
  const [_portfolios, setPortfolios] = useState(myPortfolio);
  const [deletePortfolio, { data, error, loading }] = useDeletePortfolio();
  const { data: dataU, loading: loadingU } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation()

    const isConfirm = confirm('Are you sure you want to delete this Portfolio?')
    if (isConfirm) {
      await deletePortfolio(portfolioId)
      setPortfolios(_portfolios.filter(p => p._id !== portfolioId))
    }


    // const newPortfolios = _portfolios.filter((portfolio) => {
    //   if (portfolio._id !== portfolioId) {
    //     return true;
    //   }
    //   return false;
    // })
    // setPortfolios(newPortfolios);
    //or
    // setPortfolios(_portfolios.filter(p => p._id !== portfolioId))
  }



  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        header="Portfolios"
        title="Newest Portfolios - Saidat Adebule"
        className="portfolio-page">

        <Row>
          {_portfolios.map(portfolio =>
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
              }}
              md="3">
              <PortfolioCard
                portfolio={portfolio} >

                {dataU && isAuthorized(dataU, 'admin') &&
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                      }}
                      className="mr-2"
                      color="warning">Edit</Button>
                    <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color="danger">Delete</Button>
                  </>
                }
              </PortfolioCard>
            </Col>

          )
          }

        </Row>
      </BasePage>
    </BaseLayout>
  )

}
// this function is called during build up time
// it improves page performance
// it will create static page with dynamic data
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll()
  const portfolios = json
  return { props: { portfolios } }
}

export default Portfolios;