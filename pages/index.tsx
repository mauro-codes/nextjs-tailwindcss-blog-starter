import Head from 'next/head'

const Home = () => {

  return (
    <div className="container">
      <Head>
        <title>Welcome to my blog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to my blog</h1>
      </main>
    </div>
  )

}

export default Home