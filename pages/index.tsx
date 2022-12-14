import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import LaunchList from '../components/LaunchList';
import LaunchProfile from '../components/LaunchProfile';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId: any) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  )
}
