import Head from "next/head";


const Layout = ({children,pagina}) => {
  return (
    <>
        <Head>
            <title>Taqueria - {pagina}</title>
            <meta name="description" content="taqueria las vecinas"/>
        </Head>
        <div className=" md:flex">
            <aside className=" bg-red-500 md:w-1/4">
                Sidebar aqui
            </aside>
            <main className=" bg-blue-500 md:w-3/4 md:h-screen md:overflow-y-scroll">
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout