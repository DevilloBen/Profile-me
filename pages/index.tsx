import type { NextPage } from 'next'
import Head from 'next/head'
import Education from '../components/profile/Education'
import Header from '../components/profile/Header'
import Hr from '../components/profile/Hr'
import MainSocial from '../components/profile/MainSocial'
import Picture from '../components/profile/Picture'
import Projects from '../components/profile/Projects'
import Social from '../components/profile/Social'

const Home: NextPage = () => {

  
  return (
    <>
      <Head>
        <title>Benchapon Sakhonkam | Full stack developer</title>
      </Head>

        <main className="container mx-auto p-5 my-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <Picture />
              <div>
                <MainSocial />
              </div>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <Header />

            <Hr />

            <Education />

            <Hr />

            <Projects />

            <Hr />

            <Social />
          </div>
        </div>
      </main>
    </>

  )
}

export default Home
