import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/nft/hamza">
        <a className=" m-5 rounded-xl bg-red-500 px-5 text-lg font-semibold text-white">
          Click for my example from Hamza
        </a>
      </Link>

      <h1 className=" text-4xl font-bold text-red-500">
        Welcome to the NFT DROP CHALLENGE
      </h1>
    </div>
  )
}

export default Home
