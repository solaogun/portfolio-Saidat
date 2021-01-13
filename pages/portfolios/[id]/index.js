

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import {withRouter} from 'next/router'
import axios from 'axios';
// import { useGetPostById } from '@/action';
// import { useRouter } from 'next/router'
import { useGetUser } from '@/action/user'
import PortfolioApi from '@/utils/lib/api/portfolios';
import { formatDate } from 'helpers/functions'




const Portfolio = ({ pageProps: portfolio }) => {
    // const router = useRouter();
    // const {data: Portfolio, error, loading} = useGetPostById(router.query.id);
    const { data: dataU, loading: loadingU } = useGetUser()
    return (
        <BaseLayout navClass="transparent" user={dataU} loading={loadingU}>
            <BasePage
                noWrapper
                className="no-wrapper"
                indexPage
                title={`${portfolio.title} - Saidat Adebule`}
                // header="Portfolio Details"
                metaDescription={portfolio.description}
            >
                <div className="portfolio-detail">
                    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                        <main role="main" class="inner page-cover">
                            <h1 class="cover-heading">{portfolio.title}</h1>
                            <p class="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
                            <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
                            <p class="lead">{portfolio.description}</p>
                            <p class="lead">
                                <a href={portfolio.companyWebsite} target="_" class="btn btn-lg btn-secondary">Visit Company</a>
                            </p>
                        </main>
                    </div>
                </div>

                {/* {
                    JSON.stringify(portfolio)
                } */}
            </BasePage>
        </BaseLayout>

    )
}

// export async function getServerSideProps({ query }) {
//     const json = await new PortfolioApi().getById(query.id)
//     const portfolio = json.data;
//     return { props: { portfolio } }

// }

//the function is executed at the build time
export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll()
    const portfolios = json

    //get the path we want to pre-render based on portfolio id
    const paths = portfolios.map(portfolio => {
        return {
            params: { id: portfolio._id }
        }
    })
    //fallback means that not found page will be resolved into 404 page
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

    const portfolio = await new PortfolioApi().getById(params.id)
    return {
        props: portfolio,
        revalidate: 1
    }
}
// {loading && <p>Loading data...</p>}
//  {error && <div className="alert alert-danger">{error.message}</div>}
//  {Portfolio &&
//  <>
//    <h1>I am portfolio page</h1>
//     {/* <h2>{this.props.router.query.id}</h2> */}
//     <h1>{Portfolio.title}</h1>
//     <p>BODY:{Portfolio.body}</p>
//     <p>ID:{Portfolio.id}</p>
//     </>
//   }

// Portfolio.getInitialProps = async({query})=>{
//     let posts = [];
//     try {
//      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
//      posts = res.data;
//     }catch(e) {
//         console.log(e);
//     }
//     return{Portfolio: posts};
// }

export default Portfolio