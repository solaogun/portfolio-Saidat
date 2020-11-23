

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import {withRouter} from 'next/router'
import axios from 'axios';
// import { useGetPostById } from '@/action';
// import { useRouter } from 'next/router'
import { useGetUser } from '@/action/user'
import PortfolioApi from '@/utils/lib/api/portfolios';




const Portfolio = ({ pageProps: portfolio }) => {
    // const router = useRouter();
    // const {data: Portfolio, error, loading} = useGetPostById(router.query.id);
    const { data: dataU, loading: loadingU } = useGetUser()
    return (
        <BaseLayout user={dataU} loading={loadingU}>
            <BasePage header="Portfolio Details">
                {
                    JSON.stringify(portfolio)
                }
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
    const portfolios = json.data

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
    const json = await new PortfolioApi().getById(params.id)
    const portfolio = json.data
    // console.log(params.id)
    return { props: { portfolio } }
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