import Head from 'next/head'
import Layout from '@components/layout/default';
import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Accordeonles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Welcome to the new site
      </h1>

      <p className={styles.description}>
        It's quite empty still...
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </Layout>
  )
}
