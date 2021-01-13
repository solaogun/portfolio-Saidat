import { Container } from "reactstrap"
import Head from 'next/head'
import { useRouter } from 'next/router'


const PageHeader = ({ header }) =>
  <div className="page-header">
    <h1 className="page-header-title">{header}</h1>
  </div>



const BasePage = props => {
  const router = useRouter()

  const { indexPage,
    noWrapper,
    className = ``,
    header,
    title = "portfolio - Saidat Adebule",
    canonicalPath,
    metaDescription = "My name is Saidat Bolanle and I am an experienced software engineer and freelance developer.",
    children } = props

  const pageType = indexPage ? 'index-page' : 'base-page'
  const wrapper = noWrapper ? React.Fragment : Container
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0 width=device-width " />
        <meta name="description" key="description" content={metaDescription} />

        <meta name="title" key="title" content={title} />

        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locae" key="og:locale" content="en_NG" />
        <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:description" key="og:description" content={metaDescription} />
        <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`} />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`} />

      </Head>
      <div className={`${pageType} ${className}`}>

        <wrapper>
          {header && <PageHeader header={header} />}
          {children}
        </wrapper>



      </div>

    </>
  )
}


export default BasePage