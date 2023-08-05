import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import useTaqueria from '../hooks/useTaqueria'
export default function Home() {
  const {hola} = useTaqueria()
  console.log(hola)
  return (
    <Layout pagina={'Menu'}>
      <h1>Hola mundo</h1>
    </Layout>
  )
}
