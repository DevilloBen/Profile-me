import { collection, getDocs } from 'firebase/firestore'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { database } from '../firebaseConfig'
import styles from '../styles/Home.module.css'

interface GetDataTest {
  id:string
  node: string
}
const dbInstance = collection(database, 'test');
const Home: NextPage = () => {
  const [notesArray, setNotesArray] = useState<GetDataTest[]>();

  useEffect(() => {
    getNotes();
}, [])

  const getNotes = () => {
    getDocs(dbInstance)
      .then((data:any) => {
        setNotesArray(data.docs.map((item:any) => {
          return { ...item.data(), id: item.id }
      }));
      })
  }

  return (
    <>
      <Head>
        <title>Benchapon Sakhonkam - Full stack developer</title>
      </Head>
      <div className={styles.container}>
        {console.log("<--- Data input --->",notesArray)}
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          {notesArray?.length && notesArray.map((data:GetDataTest) => {
            return (
              <div key={`${data.id}`}>

                <h3>{data.node}</h3>
              </div>
            )
          })}
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github by{' '}
            <span className={styles.logo}>
              <Image src="/logo-dark.png" alt="Devillo Logo" width={111.8} height={20} />
            </span>
          </a>
        </footer>
      </div>
    </>

  )
}

export default Home
