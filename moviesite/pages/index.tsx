import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'
import HCarousel from '../components/HCarousel'
import requests from '../utils/requests'
import Results from '../components/Results'

const inter = Inter({ subsets: ['latin'] })



export default function Home({results}:Props) {
  // console.log(results)
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Site</title>
        <meta name="description" content="Movie Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Nav />

      <HCarousel />

      <Results results={results}/>

    </div>
  )
}

interface Props{
  results: any;
}

export async function getServerSideProps (context:any){
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}9f63518819b9854c24d4ffcd9a060e1b`
  ).then((res)=>res.json())


  return{
    props:{
      results: request.results
    }
  }
}
