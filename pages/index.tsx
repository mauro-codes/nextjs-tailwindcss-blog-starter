import Head from 'next/head'
import Layout from './layout'

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Welcome to my blog!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Welcome to my blog</h1>
        </main>
      </div>
    </Layout>
  )

}

export default Home